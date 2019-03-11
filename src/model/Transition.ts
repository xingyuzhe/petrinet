import { NodeAbstract } from './Node.abstract'
import { ITransition } from './Transition.interface'
import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'
import * as uuid from 'uuid'

export class Transition extends NodeAbstract implements ITransition {
  constructor() {
    super()
    this.id = 'transition_' + uuid()
  }

  addInputArc(arc: IInputIArc) {
    this.inputArcs.push(arc)
  }

  addOutputArc(arc: IOutputArc) {
    this.outputArcs.push(arc)
  }
}
