import { IPlace } from './Place.interface'
import { ITransition } from './Transition.interface'

export interface IArc {
  getId(): string

  setPlace(place: IPlace): void

  getPlace(): IPlace

  setTransition(transition: ITransition): void

  getTransition(): ITransition

  setWeight(weight: number): void

  getWeight(): number
}
