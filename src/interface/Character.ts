import { Health } from "../class/Health";
import { IGameObject, IGameObjectProps } from "./GameObject";

export interface ICharacterProps extends IGameObjectProps {
  name: string;
  health: number;
}

export interface ICharacter extends IGameObject {
  name: string
  health: Health
}