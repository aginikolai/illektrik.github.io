import {NewGameComponent} from "../../core/NewGameComponent";
import {createGameField} from "./gameField.template";

export class GameField extends NewGameComponent {
  static className = 'wrapper'

  constructor($root) {
    super($root, {
      name: 'GameField',
      listeners: ['click']
    });
  }

  onClick(event) {
    console.log('click', event.target)
  }

  toHTML() {
    return `
      ${createGameField()}
    `
  }
}

