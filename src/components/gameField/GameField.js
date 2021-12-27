import {NewGameComponent} from "../../core/NewGameComponent";
import {createGameField} from "./gameField.template";
import {$} from "../../core/dom";
import {createDoubleShips, createSingleShips, createBigShip, createTripleShip} from '../../core/utils'

export class GameField extends NewGameComponent {
  static className = 'wrapper'

  constructor($root) {
    super($root, {
      name: 'GameField',
      listeners: ['click']
    });
  }

  shoots = []
  usedCells = []

  onClick(event) {
    if (event.target.dataset.coords) {
      const {coords} = event.target.dataset

      if (!this.shoots.includes(coords)) {
        this.shoots.push(coords)
        const $target = $(event.target)
        $target.html('<p>X</p>')
      }

    }
  }


  toHTML() {
    createBigShip(this.usedCells)
    createTripleShip(this.usedCells)
    createDoubleShips(this.usedCells)
    createSingleShips(this.usedCells)
    return `
      ${createGameField()}
    `
  }
}

