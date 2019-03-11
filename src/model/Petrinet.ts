import { IPetrinet } from './Petrinet.interface'
import { IPlace } from './Place.interface'
import { ITransition } from './Transition.interface'
import * as uuid from 'uuid'

export class Petrinet implements IPetrinet {
  protected id: string

  protected places: IPlace[]

  protected transitions: ITransition[]

  constructor() {
    this.places = []
    this.transitions = []
    this.id = 'petrinet_' + uuid()
  }

  getId(): string {
    return this.id
  }

  addPlace(place: IPlace) {
    this.places.push(place)
  }

  hasPlace(place: IPlace): boolean {
    return this.places.includes(place)
  }

  removePlace(place: IPlace) {
    this.places = this.places.filter(curPlace => {
      return curPlace.getId() === place.getId()
    })
  }

  setPlaces(places: IPlace[]) {
    this.places = places
  }

  getPlaces(): IPlace[] {
    return this.places
  }

  addTransition(transition: ITransition) {
    this.transitions.push(transition)
  }

  hasTransition(transition: ITransition): boolean {
    return this.transitions.includes(transition)
  }

  removeTransition(transition: ITransition) {
    this.transitions = this.transitions.filter(curTransition => {
      return curTransition.getId() === transition.getId()
    })
  }

  setTransitions(transitions: ITransition[]) {
    this.transitions = transitions
  }

  getTransitions(): ITransition[] {
    return this.transitions
  }
}
