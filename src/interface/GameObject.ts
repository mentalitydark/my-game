import { Dimension } from "../class/Dimension"
import { Position } from "../class/Position"

export interface IGameObjectProps {
  position: Position
  dimensions: Dimension
}

export interface IGameObject {
  id: string
  position: Position
  dimensions: Dimension
  draw: (context: CanvasRenderingContext2D) => void
}