import { NodeAbstract } from './Node.abstract'
import { IPlace } from './Place.interface'
import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'
import * as uuid from 'uuid'

export class Place extends NodeAbstract implements IPlace {
  constructor() {
    super()
    this.id = 'place_' + uuid()
  }

  addInputArc(arc: IOutputArc) {
    this.inputArcs.push(arc)
  }

  addOutputArc(arc: IInputIArc) {
    this.outputArcs.push(arc)
  }
}
