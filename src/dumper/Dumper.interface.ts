import { IPetrinet, IMarking } from '../model'

export interface IDumper {
  dump(petrinet: IPetrinet, marking: IMarking | null): Promise<any>
}
