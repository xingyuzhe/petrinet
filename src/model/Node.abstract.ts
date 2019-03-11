import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'

export abstract class NodeAbstract {
  protected id: string

  protected inputArcs: IInputIArc[] = []

  protected outputArcs: IOutputArc[] = []

  getId(): string {
    return this.id
  }

  hasInputArc(inputArc: IInputIArc): boolean {
    return this.inputArcs.includes(inputArc)
  }

  removeInputArc(inputArc: IInputIArc) {
    const index = this.inputArcs.indexOf(inputArc)
    if (index > -1) {
      this.inputArcs.splice(index, 1)
    }
  }

  getInputArcs(): IInputIArc[] {
    return this.inputArcs
  }

  hasOutputArc(outputArc: IOutputArc): boolean {
    return this.outputArcs.includes(outputArc)
  }

  removeOutputArc(outputArc: IOutputArc) {
    const index = this.outputArcs.indexOf(outputArc)
    if (index > -1) {
      this.outputArcs.splice(index, 1)
    }
  }

  getOutputArcs(): IOutputArc[] {
    return this.outputArcs
  }
}
