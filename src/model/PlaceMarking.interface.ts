import { IPlace } from './Place.interface'
import { IToken } from './Token.interface'

export interface IPlaceMarking {
  getId(): string

  getPlace(): IPlace

  setPlace(place: IPlace): void

  removeToken(token: IToken): void

  getTokens(): IToken[]

  setTokens(tokens: IToken[]): void
}
