import { ITransition } from './Transition.interface'
import { IPlace } from './Place.interface'

export interface IPetrinet {
  getId(): string

  getTransitions(): ITransition[]

  setTransitions(transitions: ITransition[]): void

  getPlaces(): IPlace[]

  setPlaces(places: IPlace[]): void
}
