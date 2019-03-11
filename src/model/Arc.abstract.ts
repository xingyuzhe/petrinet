import { IArc } from './Arc.interface'
import { IPlace } from './Place.interface'
import { ITransition } from './Transition.interface'
import * as uuid from 'uuid'

export abstract class AbstractArc implements IArc {
  protected id: string

  protected place: IPlace

  protected transition: ITransition

  protected weight: number

  constructor() {
    this.id = 'arc_' + uuid()
  }

  getId(): string {
    return this.id
  }

  setPlace(place: IPlace) {
    this.place = place
  }

  getPlace(): IPlace {
    return this.place
  }

  setTransition(transition: ITransition) {
    this.transition = transition
  }

  getTransition(): ITransition {
    return this.transition
  }

  setWeight(weight: number) {
    if (weight < 0) {
      throw new Error('The weight must be a positive integer.')
    }

    this.weight = weight
  }

  getWeight(): number {
    return this.weight
  }
}
