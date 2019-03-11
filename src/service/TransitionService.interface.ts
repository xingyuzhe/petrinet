import { ITransition } from '../model/Transition.interface'
import { IMarking } from '../model/Marking.interface'

export interface ITransitionService {
  isEnabled(transition: ITransition, marking: IMarking): boolean

  fire(transition: ITransition, marking: IMarking): void
}
