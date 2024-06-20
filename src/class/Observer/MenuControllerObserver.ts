import { IObserver, ICommand } from "../../interface/Controller";

export class MenuControllerObserver implements IObserver {

  public constructor() {}

  public update(command: ICommand): void {
    console.log(command)
  }
}