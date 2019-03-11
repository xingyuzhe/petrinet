import { ITransitionService } from './TransitionService.interface'
import { IFactory, ITransition, IMarking } from '../model'
import { TransitionNotEnabledException, PlaceMarkingNotFoundException } from '../exceptions'

export class TransitionService implements ITransitionService {
  private factory: IFactory

  constructor($factory: IFactory) {
    this.factory = $factory
  }

  isEnabled($transition: ITransition, $marking: IMarking): boolean {
    const $inputArcs = $transition.getInputArcs()

    if (!$inputArcs.length) {
      return false
    }

    return $inputArcs.every(inputArc => {
      const place = inputArc.getPlace()
      const placeMarking = $marking.getPlaceMarking(place)

      if (!placeMarking) {
        console.log('isEnabled: placeMarking empty cause disabled')
        return false
      }

      if (placeMarking.getTokens().length < inputArc.getWeight()) {
        console.log('isEnabled: tokens length < inputArc weight cause disabled')
        return false
      }

      return true
    })
  }

  fire(transition: ITransition, marking: IMarking) {
    if (!this.isEnabled(transition, marking)) {
      throw new TransitionNotEnabledException()
    }

    const inputArcs = transition.getInputArcs()
    const outputArcs = transition.getOutputArcs()

    // 消费 input place 拥有的 tokens
    inputArcs.forEach(inputArc => {
      const weight = inputArc.getWeight()
      const place = inputArc.getPlace()
      const placeMarking = marking.getPlaceMarking(place)

      if (!placeMarking) {
        throw new PlaceMarkingNotFoundException()
      }

      const tokens = placeMarking.getTokens()

      for (let i = 0; i < weight; i++) {
        placeMarking.removeToken(tokens[i])
      }
    })

    // 生产tokens 给到 output places
    outputArcs.forEach(outputArc => {
      const weight = outputArc.getWeight()
      const place = outputArc.getPlace()
      let placeMarking = marking.getPlaceMarking(place)

      if (placeMarking === null) {
        placeMarking = this.factory.createPlaceMarking()
        placeMarking.setPlace(place)
        marking.addPlaceMarking(placeMarking)
      }

      const tokens = []

      for (let i = 0; i < weight; i++) {
        tokens.push(this.factory.createToken())
      }

      placeMarking.setTokens(tokens)
    })
  }
}
