import { ECommandType } from "../enum/Controller"
import { Controller } from "./Controller"
import { Dimension } from "./Dimension"
import { MenuControllerObserver, PlayerControllerObserver } from "./Observer"
import { Player } from "./Player"
import { Position } from "./Position"

export class Game {
  private static screen: Dimension = new Dimension(500, 500)

  private _canvas: HTMLCanvasElement
  private _controllers: {[X: string]: Controller} = {}
  private _player: Player

  public constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas

    this._player = this.createPlayer()
    this.defineControllers()
  }

  get context(): CanvasRenderingContext2D { return this._canvas.getContext('2d')! }

  public start() {
    this.update()
  }

  private update() {
    this.render()

    requestAnimationFrame(this.update.bind(this))
  }

  private render() {
    this.context.clearRect(0, 0, Game.screen.width, Game.screen.height)

    this.drawPlayer()
  }

  private createPlayer() {
    return new Player({
      name: 'Player',
      health: 100,
      position: new Position(280, 10),
      dimensions: new Dimension(10, 10)
    })
  }

  private defineControllers() {
    this._controllers[ECommandType.PLAYER] = new Controller(ECommandType.PLAYER)
    this._controllers[ECommandType.MENU] = new Controller(ECommandType.MENU)

    this._controllers[ECommandType.PLAYER].addObserver(new PlayerControllerObserver(this._player))
    this._controllers[ECommandType.MENU].addObserver(new MenuControllerObserver())
  }

  private drawPlayer() {
    this._player.draw(this.context)
  }
}