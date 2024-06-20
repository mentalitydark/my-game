import { KeyboardSubject } from "../../class/Controller";
import { TKeys } from "../../types";
import { IObserver } from "./Observer";

export interface IController {
  keyboardSubject: KeyboardSubject
  keys: TKeys
  addObserver: (observer: IObserver) => void
  removeObserver: (observer: IObserver) => void
}