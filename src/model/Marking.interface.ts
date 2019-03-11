import { IPlace } from './Place.interface'
import { IPlaceMarking } from './PlaceMarking.interface'

export interface IMarking {
  getId(): string

  getPlaceMarking(place: IPlace): IPlaceMarking | null

  addPlaceMarking(placeMarking: IPlaceMarking): void

  setPlaceMarkings(placeMarkings: IPlaceMarking[]): void
}
