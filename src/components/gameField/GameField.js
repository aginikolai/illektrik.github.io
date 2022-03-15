import {NewGameComponent} from "../../core/NewGameComponent";
import {createGameField} from "./gameField.template";
import {$} from "../../core/dom";
import {
  createDoubleShips, 
  createSingleShips, 
  createBigShip, 
  createTripleShip, 
  checkingShoot,
  countSunkShips
} from '../../core/utils'
import {GameFieldSelection} from "./GameFieldSelection";

export class GameField extends NewGameComponent {
  static className = 'wrapper'

  constructor($root, options) {
    super($root, {
      name: 'GameField',
      listeners: ['click'],
      ...options
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

  countShips() {
    const count = countSunkShips(this.singleShips, this.doubleShips, this.tripleShips, this.bigShip)
    this.$dispatch({type: 'SHIP_SUNK', payload: count})
  }

  onClick(event) {
    if (event.target.dataset.coords) {
      const {coords} = event.target.dataset
      const shoot = checkingShoot(this.singleShips, this.doubleShips, this.tripleShips, this.bigShip, coords)
      
      if (!this.shoots.includes(coords)) {
        this.shoots.push(coords)
        // console.log(this.shoots.length)
        const $target = $(event.target)
        this.$dispatch({type: 'MAKE_SHOOT', payload: this.shoots.length})
        switch (shoot.type) {
          case 'missed':
            return $target.html('<p>X</p>')
          case 'single':
            $target.$el.classList.add('battle_cell--red')
            this.singleShips = shoot.ships
            this.countShips()
            return $target.html('<p>1</p>')
          case 'double':
            $target.$el.classList.add('battle_cell--red')
            this.doubleShips = shoot.ships
            this.countShips()
            return $target.html('<p>2</p>')
          case 'triple':
            $target.$el.classList.add('battle_cell--red')
            this.tripleShips = shoot.ships
            this.countShips()
            return $target.html('<p>3</p>')
          case 'big':
            $target.$el.classList.add('battle_cell--red')
            this.bigShip = shoot.ships
            this.countShips()
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

