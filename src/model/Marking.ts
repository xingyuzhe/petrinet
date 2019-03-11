import { IMarking } from './Marking.interface'
import { IPlaceMarking } from './PlaceMarking.interface'
import { IPlace } from './Place.interface'
import * as uuid from 'uuid'

export class Marking implements IMarking {
  id: string

  placeMarkings: IPlaceMarking[]

  constructor() {
    this.placeMarkings = []
    this.id = 'marking_' + uuid()
  }

  getId(): string {
    return this.id
  }

  getPlaceMarking(place: IPlace): IPlaceMarking | null {
    const placeMarkings = this.placeMarkings.filter(placeMarking => placeMarking.getPlace() === place)

    return placeMarkings.length ? placeMarkings[0] : null
  }

  addPlaceMarking(placeMarking: IPlaceMarking) {
    if (this.placeMarkings.includes(placeMarking)) {
      throw new Error('Cannot add two placeMarkings for the same place.')
    }

    this.placeMarkings.push(placeMarking)
  }

  setPlaceMarkings(placeMarkings: IPlaceMarking[]) {
    this.placeMarkings = placeMarkings
  }

  removePlaceMarking(placeMarking: IPlaceMarking) {
    const index = this.placeMarkings.indexOf(placeMarking)
    if (index > -1) {
      this.placeMarkings.splice(index, 1)
    }
  }

  getPlaceMarkings(): IPlaceMarking[] {
    return this.placeMarkings
  }
}
