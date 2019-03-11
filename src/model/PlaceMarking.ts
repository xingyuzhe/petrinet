import { IPlaceMarking } from './PlaceMarking.interface'
import { IPlace } from './Place.interface'
import { IToken } from './Token.interface'
import * as uuid from 'uuid'

export class PlaceMarking implements IPlaceMarking {
  protected id: string

  protected place: IPlace

  protected tokens: IToken[]

  constructor() {
    this.tokens = []
    this.id = 'placeMarking_' + uuid()
  }

  getId() {
    return this.id
  }

  addToken(token: IToken) {
    this.tokens.push(token)
  }

  hasToken(token: IToken): boolean {
    return this.tokens.includes(token)
  }

  removeToken(token: IToken) {
    const index = this.tokens.indexOf(token)
    if (index > -1) {
      this.tokens.splice(index, 1)
    }
  }

  setTokens(tokens: IToken[]) {
    this.tokens = tokens
  }

  getTokens(): IToken[] {
    return this.tokens
  }

  setPlace(place: IPlace) {
    this.place = place
  }

  getPlace(): IPlace {
    return this.place
  }
}
