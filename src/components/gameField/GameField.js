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
  singleShips = []
  doubleShips = []
  tripleShips = []
  bigShip = []

  onClick(event) {
    if (event.target.dataset.coords) {
      const {coords} = event.target.dataset
      // запилить функцию-проверку на то, что точка совпадает с какой-либо точкой выствленных краблей и добавить classname или что-то еще
      if (!this.shoots.includes(coords) && !this.usedCells.includes(coords)) {
        this.shoots.push(coords)
        const $target = $(event.target)
        $target.html('<p>X</p>')
      }

    }
  }


  toHTML() {
    createBigShip(this.usedCells, this.bigShip)
    createTripleShip(this.usedCells, this.tripleShips)
    createDoubleShips(this.usedCells, this.doubleShips)
    createSingleShips(this.usedCells, this.singleShips)
    return `
      ${createGameField(this.singleShips, this.doubleShips, this.tripleShips, this.bigShip)}
    `
  }
}

