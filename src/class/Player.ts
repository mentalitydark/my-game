import { IPlayer } from "../interface";
import { Character } from "./Character";

export class Player extends Character implements IPlayer {
  static speed: number = 5

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "white"
    context.fillRect(
      this.position.x, this.position.y,
      this.dimensions.width, this.dimensions.height
    )
  }

  public update(deltaTime: number): void {
      console.log(deltaTime)
  }

}