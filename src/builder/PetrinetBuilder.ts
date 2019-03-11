import { IPlace } from '../model/Place.interface'
import { Place } from '../model/Place'
import { ITransition } from '../model/Transition.interface'
import { Transition } from '../model/Transition'
import { IFactory } from '../model/Factory.interface'
import { INode } from '../model/Node.interface'
import { IPetrinet } from '../model/Petrinet.interface'

export class PetrinetBuilder {
  private places: IPlace[] = []

  private transitions: ITransition[] = []

  private factory: IFactory

  constructor(factory: IFactory) {
    this.factory = factory
  }

  place(): IPlace {
    const place = this.factory.createPlace()
    this.places.push(place)
    return place
  }

  transition(): ITransition {
    const transition = this.factory.createTransition()
    this.transitions.push(transition)
    return transition
  }

  connect(source: INode, target: INode, weight: number): this {
    let arc
    if (source instanceof Place && target instanceof Transition) {
      arc = this.factory.createInputArc()
      arc.setPlace(source)
      arc.setTransition(target)
    } else if (source instanceof Transition && target instanceof Place) {
      arc = this.factory.createOutputArc()
      arc.setPlace(target)
      arc.setTransition(source)
    } else {
      throw new Error('An arc must connect a place to a transition or vice-versa.')
    }

    arc.setWeight(weight)
    source.addOutputArc(arc)
    target.addInputArc(arc)

    return this
  }

  getPetrinet(): IPetrinet {
    const petrinet = this.factory.createPetrinet()
    petrinet.setPlaces(this.places)
    petrinet.setTransitions(this.transitions)

    return petrinet
  }
}
