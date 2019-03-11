import { IPetrinet } from './Petrinet.interface'
import { IPlace } from './Place.interface'
import { ITransition } from './Transition.interface'
import { IInputIArc } from './InputArc.interface'
import { IOutputArc } from './OutputArc.interface'
import { IPlaceMarking } from './PlaceMarking.interface'
import { IToken } from './Token.interface'
import { IMarking } from './Marking.interface'

export interface IFactory {
  createPetrinet(): IPetrinet
  createPlace(): IPlace
  createTransition(): ITransition
  createInputArc(): IInputIArc
  createOutputArc(): IOutputArc
  createPlaceMarking(): IPlaceMarking
  createToken(): IToken
  createMarking(): IMarking
}
