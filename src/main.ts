import { Dimension } from './class/Dimension'
import { Player } from './class/Player'
import { Position } from './class/Position'
import './style.css'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')!

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(canvas)

const object1 = new Player({
  name: 'Player 01',
  health: 100,
  position: new Position(10, 0),
  dimensions: new Dimension(100, 10)
})
const object2 = new Player({
  name: 'Player 02',
  health: 100,
  position: new Position(10, 20),
  dimensions: new Dimension(100, 10)
})

object1.draw(context)
object2.draw(context)

console.log(object1.id)
console.log(object2.id)

const player = new Player({
  name: 'Player',
  health: 100,
  position: new Position(10, 50),
  dimensions: new Dimension(200, 10)
})

player.draw(context)

console.log(player)