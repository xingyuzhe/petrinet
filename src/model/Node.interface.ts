import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'

export interface INode {
  getId(): string

  getInputArcs(): IInputIArc[]

  getOutputArcs(): IOutputArc[]
}
