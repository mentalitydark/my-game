import { Character } from './class/Character'
import { Dimension } from './class/Dimension'
import { GameObject } from './class/GameObject'
import { Position } from './class/Position'
import './style.css'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')!

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(canvas)

const object1 = new GameObject({
  position: new Position(10, 0),
  dimensions: new Dimension(100, 10)
})
const object2 = new GameObject({
  position: new Position(10, 20),
  dimensions: new Dimension(100, 10)
})

object1.draw(context)
object2.draw(context)

console.log(object1.id)
console.log(object2.id)

const player = new Character({
  name: 'Player',
  health: 100,
  position: new Position(10, 20),
  dimensions: new Dimension(100, 10)
})

console.log(player)