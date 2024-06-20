import { CommandType } from "../../enum/Controller/CommandType"
import { TKeys } from "../../types"

export interface ICommandProps {
  keys: TKeys
  type: CommandType
}

export interface ICommand {
  keys: TKeys
  type: CommandType
}