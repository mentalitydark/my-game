import { IGameObject, IGameObjectProps } from "../interface/GameObject"
import { Dimension } from "./Dimension"
import { Position } from "./Position"

export class GameObject implements IGameObject {
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

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "white"
    context.fillRect(
      this.position.x, this.position.y,
      this.dimensions.width, this.dimensions.height
    )
  }
}