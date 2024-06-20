import { IHealth } from "../interface";

export class Health implements IHealth {
  private _max: number
  private _current: number

  public constructor(value: number) {
    this._max = value
    this._current = value
  }

  get current(): number { return this._current }
  get max(): number { return this._max }
  public isAlive(): boolean { return this._current > 0 }
  
  public heal(amount: number) {
    this._current += amount

    if (this._current > this._max)
      this._current = this._max
  }

  public takeDamage(amount: number) {
    this._current -= amount
  }

  public increaseMax(amount: number) {
    this._max += amount
  };
}