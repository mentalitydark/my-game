import { ICommand } from "./Command"

export interface IObserver {
  update(command: ICommand): void
}