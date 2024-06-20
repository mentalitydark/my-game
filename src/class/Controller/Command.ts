import { ECommandType } from "../../enum/Controller"
import { ICommand, ICommandProps } from "../../interface/Controller/Command"
import { TKeys } from "../../types"

export class Command implements ICommand {
  private _keys: TKeys = {}
  private _type: ECommandType

  public constructor(props: ICommandProps) {
    this._keys = props.keys
    this._type = props.type
  }

  get keys(): TKeys { return this._keys }
  get type(): ECommandType { return this._type }

  public static create(props: ICommandProps) {
    return new Command(props)
  }
}