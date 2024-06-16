import { IPlayer } from "../interface/Player";
import { Character } from "./Character";

export class Player extends Character implements IPlayer {

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