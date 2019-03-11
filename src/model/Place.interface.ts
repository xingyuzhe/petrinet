import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'
import { INode } from './Node.interface'

export interface IPlace extends INode {
  addInputArc(arc: IOutputArc): void

  addOutputArc(arc: IInputIArc): void
}
