import { ECommandType } from "../../enum/Controller";
import { IObserver, ICommand } from "../../interface/Controller";
import { Player } from "../Player";

export class PlayerControllerObserver implements IObserver {
  private _player: Player

  public constructor(player: Player) {
    this._player = player
  }

  public update(command: ICommand): void {
    if (command.type !== ECommandType.PLAYER) {
      return
    }

    const keys = command.keys

    if (keys.ShiftLeft || keys.ShiftRight) {
      Player.speed = 10
    } else {
      Player.speed = 5
    }

    if (keys.ArrowUp) {
      this.moveUp()
    }
    
    if (keys.ArrowDown) {
      this.moveDown()
    } 

    if (keys.ArrowRight) {
      this.moveRight()
    }
    
    if (keys.ArrowLeft) {
      this.moveLeft()
    }      
  }

  private moveUp() {
    this._player.position.y -= 1 * Player.speed
  }

  private moveDown() {
    this._player.position.y += 1 * Player.speed
  }

  private moveRight() {
    this._player.position.x += 1 * Player.speed
  }

  private moveLeft() {
    this._player.position.x -= 1 * Player.speed
  }
}