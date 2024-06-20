import { ECommandType } from "../../enum/Controller"
import { IController, IObserver } from "../../interface/Controller"
import { TKeys, TControllerKeys } from "../../types"
import { Command } from "./Command"
import { KeyboardSubject } from "./KeyboardSubject"

export class Controller implements IController {
  private _keyboardSubject: KeyboardSubject
  private _keys: TKeys = {}

  public constructor(type: ECommandType) {
    this._keyboardSubject = new KeyboardSubject()

    document.addEventListener('keydown', event => {
      const key = event.key as TControllerKeys
      this._keys[key] = true

      this._keyboardSubject.notify(Command.create({keys: this._keys, type}))
    })

    document.addEventListener('keyup', event => {
      const key = event.key as TControllerKeys
      delete this._keys[key]

      this._keyboardSubject.notify(Command.create({keys: this._keys, type}))
    })
  }

  get keys(): TKeys { return this._keys }
  get keyboardSubject(): KeyboardSubject { return this._keyboardSubject }

  public addObserver(observer: IObserver) {
    this._keyboardSubject.addObserver(observer)
  }

  public removeObserver(observer: IObserver) {
    this._keyboardSubject.removeObserver(observer)
  }
}