import { ECommandType } from "../../enum/Controller"
import { TKeys } from "../../types"

export interface ICommandProps {
  keys: TKeys
  type: ECommandType
}

export interface ICommand {
  keys: TKeys
  type: ECommandType
}