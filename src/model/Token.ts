import { IToken } from './Token.interface'
import * as uuid from 'uuid'

export class Token implements IToken {
  protected id: string

  constructor() {
    this.id = 'token_' + uuid()
  }

  getId(): string {
    return this.id
  }
}
