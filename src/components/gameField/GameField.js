import {NewGameComponent} from "../../core/NewGameComponent";
import {createGameField} from "./gameField.template";
import {$} from "../../core/dom";
import {createDoubleShips, createSingleShips, createBigShip, createTripleShip, checkingShoot} from '../../core/utils'
import {GameFieldSelection} from "./GameFieldSelection";

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

  prepare() {
    this.selection = new GameFieldSelection()
  }

  init() {
    super.init()
  }

  onClick(event) {
    if (event.target.dataset.coords) {
      const {coords} = event.target.dataset
      const shoot = checkingShoot(this.singleShips, this.doubleShips, this.tripleShips, this.bigShip, coords)
      // this.selection.select({coords, shoot})
      console.log(shoot)
      // запилить функцию-проверку на то, что точка совпадает с какой-либо точкой выствленных краблей и добавить classname или что-то еще
      if (!this.shoots.includes(coords)) {
        this.shoots.push(coords)
        // console.log(this.shoots.length)
        const $target = $(event.target)
        switch (shoot) {
          case 'missed':
            return $target.html('<p>X</p>')
          case 'single':
            $target.$el.classList.add('battle_cell--red')
            return $target.html('<p>1</p>')
          case 'double':
            $target.$el.classList.add('battle_cell--red')
            return $target.html('<p>2</p>')
          case 'triple':
            $target.$el.classList.add('battle_cell--red')
            return $target.html('<p>3</p>')
          case 'big':
            $target.$el.classList.add('battle_cell--red')
            return $target.html('<p>4</p>')
          default: return
        }
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

