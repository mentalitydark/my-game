import { ICharacter, ICharacterProps } from "../interface";
import { GameObject } from "./GameObject";
import { Health } from "./Health";

export abstract class Character extends GameObject implements ICharacter {
  private _name: string
  private _health: Health

  public constructor(props: ICharacterProps) {
    super(props);
    this._name = props.name
    this._health = new Health(props.health)
  }

  get name(): string { return this._name }
  get health(): Health { return this._health }
}