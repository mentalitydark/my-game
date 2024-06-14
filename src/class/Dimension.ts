export class Dimension {
  private _width: number
  private _height: number

  public constructor(width: number, height: number) {
    this._width = width
    this._height = height
  }

  get width() { return this._width }
  get height() { return this._height }
  get halfWidth() { return this._width / 2 }
  get halfHeight() { return this._height / 2 }
}