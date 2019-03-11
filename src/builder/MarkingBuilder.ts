import { IPlaceMarking } from '../model/PlaceMarking.interface'
import { IFactory } from '../model/Factory.interface'
import { IPlace } from '../model/Place.interface'
import { IToken } from '../model/Token.interface'
import { Token } from '../model/Token'
import { IMarking } from '../model/Marking.interface'

export class MarkingBuilder {
  private placeMarkings: IPlaceMarking[] = []

  private factory: IFactory

  constructor(factory: IFactory) {
    this.factory = factory
  }

  mark($place: IPlace, $tokens: IToken[] | number | IToken): this {
    let tokens = []
    if (Number.isInteger(Number($tokens))) {
      const tokensCount = $tokens

      for (let i = 0; i < tokensCount; i++) {
        tokens.push(this.factory.createToken())
      }
    } else if ($tokens instanceof Token) {
      tokens.push($tokens)
    } else if (Array.isArray($tokens)) {
      tokens = $tokens
    } else {
      throw new Error('The $tokens argument must be an array, integer or a PetrinetModelIToken instance.')
    }

    const placeMarking = this.factory.createPlaceMarking()
    placeMarking.setPlace($place)
    placeMarking.setTokens(tokens)

    this.placeMarkings.push(placeMarking)

    return this
  }

  getMarking(): IMarking {
    const marking = this.factory.createMarking()
    marking.setPlaceMarkings(this.placeMarkings)

    return marking
  }
}
