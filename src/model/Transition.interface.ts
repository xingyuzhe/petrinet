import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'
import { INode } from './Node.interface'

export interface ITransition extends INode {
  addInputArc(arc: IInputIArc): void

  addOutputArc(arc: IOutputArc): void
}
