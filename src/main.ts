import './style.css'

import { Game } from './class'

const canvas = document.createElement('canvas')
const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(canvas)

const game = new Game(canvas)
game.start()