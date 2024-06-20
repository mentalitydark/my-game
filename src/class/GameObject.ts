import { IGameObject, IGameObjectProps } from "../interface"
import { Dimension } from "./Dimension"
import { Position } from "./Position"

export abstract class GameObject implements IGameObject {
  private _id: string = crypto.randomUUID()
  private _position: Position
  private _dimensions: Dimension

  public constructor(props: IGameObjectProps) {
    this._position = props.position
    this._dimensions = props.dimensions
  }

  get id(): string { return this._id }
  get position(): Position { return this._position }
  get dimensions(): Dimension { return this._dimensions }

  public abstract draw(context: CanvasRenderingContext2D): void
  public abstract update(deltaTime: number): void
}