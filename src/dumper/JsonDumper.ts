import { IDumper } from './Dumper.interface'
import { IPetrinet, IMarking, INode, IArc } from '../model'
import * as jsonfile from 'jsonfile'

interface IArcSchema {
  id: string
  placeId: string
  transitionId: string
  weight: number
}

interface INodeSchema {
  id: string
  inputArcs: IArcSchema[]
  outputArcs: IArcSchema[]
}

interface IPetrinetSchema {
  id: string
  places: INodeSchema[]
  transitions: INodeSchema[]
}

export class JsonDumper implements IDumper {
  // 连线数据
  getArcData(arc: IArc): IArcSchema {
    return {
      id: arc.getId(),
      placeId: arc.getPlace().getId(),
      transitionId: arc.getTransition().getId(),
      weight: arc.getWeight(),
    }
  }

  // 单个节点数据
  getNodeData(node: INode): INodeSchema {
    const inputArcs: IArcSchema[] = []
    const outputArcs: IArcSchema[] = []

    node.getInputArcs().forEach(arc => {
      inputArcs.push(this.getArcData(arc))
    })

    node.getOutputArcs().forEach(arc => {
      outputArcs.push(this.getArcData(arc))
    })

    return {
      id: node.getId(),
      inputArcs,
      outputArcs,
    }
  }

  // 一类节点的数据
  getNodesData(nodes: INode[]): INodeSchema[] {
    return nodes.map(node => {
      return this.getNodeData(node)
    })
  }

  toJSON(petrinet: IPetrinet): string {
    const data: IPetrinetSchema = {
      id: petrinet.getId(),
      places: [],
      transitions: [],
    }

    data.places = this.getNodesData(petrinet.getPlaces())
    data.transitions = this.getNodesData(petrinet.getTransitions())

    return JSON.stringify(data)
  }

  async dump(petrinet: IPetrinet, marking: IMarking | null): Promise<any> {
    console.log(marking)
    const jsonString = this.toJSON(petrinet)
    await jsonfile.writeFileSync('./build/petrinet.json', JSON.parse(jsonString), { spaces: 2 })
  }
}
