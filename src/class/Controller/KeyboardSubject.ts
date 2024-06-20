import { ICommand, IObserver } from "../../interface/Controller";

export class KeyboardSubject {
  private _observers: IObserver[] = []

  public addObserver(observer: IObserver): void {
    this._observers.push(observer)
  }

  public removeObserver(observer: IObserver): void {
    this._observers = this._observers.filter(obs => obs !== observer)
  }

  public notify(command: ICommand): void {
    this._observers.forEach(obs => obs.update(command))
  }
}