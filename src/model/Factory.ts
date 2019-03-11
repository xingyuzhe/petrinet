import { IFactory } from './Factory.interface'
import { Petrinet } from './Petrinet'
import { IPetrinet } from './Petrinet.interface'
import { Place } from './Place'
import { IPlace } from './Place.interface'
import { Transition } from './Transition'
import { ITransition } from './Transition.interface'
import { InputArc } from './InputArc'
import { IInputIArc } from './InputArc.interface'
import { OutputArc } from './OutputArc'
import { IOutputArc } from './OutputArc.interface'
import { PlaceMarking } from './PlaceMarking'
import { IPlaceMarking } from './PlaceMarking.interface'
import { Token } from './Token'
import { IToken } from './Token.interface'
import { Marking } from './Marking'
import { IMarking } from './Marking.interface'

export class Factory implements IFactory {
  createPetrinet(): IPetrinet {
    return new Petrinet()
  }

  createPlace(): IPlace {
    return new Place()
  }

  createTransition(): ITransition {
    return new Transition()
  }

  createInputArc(): IInputIArc {
    return new InputArc()
  }

  createOutputArc(): IOutputArc {
    return new OutputArc()
  }

  createPlaceMarking(): IPlaceMarking {
    return new PlaceMarking()
  }

  createToken(): IToken {
    return new Token()
  }

  createMarking(): IMarking {
    return new Marking()
  }
}
