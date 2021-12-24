import {NewGameComponent} from "../../core/NewGameComponent";
import {createGameField} from "./gameField.template";
import {$} from "../../core/dom";

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

  createSingleShips = function(usedCells) {
    const singleShipsCoords = []
    let numberOfShips = 0

    while (numberOfShips < 4) {
      let x = Math.floor( Math.random() * 10) + 1;
      let y = Math.floor( Math.random() * 10) + 1;
      if (!usedCells.includes(`${x}-${y}`)) {
        // присвоить всем ячейкам с такми координатами атрибут notAvailable
        let closeCells = [`${x+1}-${y}`, `${x-1}-${y}`, `${x+1}-${y+1}`,
                          `${x-1}-${y+1}`, `${x}-${y+1}`, `${x-1}-${y-1}`,
                          `${x+1}-${y-1}`, `${x}-${y-1}`, `${x}-${y}`]
        singleShipsCoords.push(`${x}-${y}`)

        closeCells.forEach(item => {
          if (!usedCells.includes(item)) usedCells.push(item)
        })

        numberOfShips +=1
      }
    }
    console.log(singleShipsCoords)
  }

  createDoubleShips = function (usedCells) {
    const doubleShipsCoords = []
    let numberOfShips = 0

    while (numberOfShips < 3) {
      const orient = Math.floor( Math.random() * 2);
      console.log(orient)

      if (orient === 0) {
        const x = Math.floor( Math.random() * 9) + 1;
        const y = Math.floor( Math.random() * 10) + 1;
        const firstCell = `${x}-${y}`
        const secondCell = `${x+1}-${y}`

        if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell)) {
          doubleShipsCoords.push([firstCell, secondCell])
          let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`, `${x+2}-${y-1}`,
                            `${x-1}-${y}`, `${x}-${y}`, `${x+1}-${y}`, `${x+2}-${y}`,
                            `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`, `${x+2}-${y+1}`]

          closeCells.forEach(item => {
            if (!usedCells.includes(item)) usedCells.push(item)
          })
          numberOfShips +=1

        } else {
          const x = Math.floor( Math.random() * 10) + 1;
          const y = Math.floor( Math.random() * 9) + 1;
          const firstCell = `${x}-${y}`
          const secondCell = `${x}-${y+1}`

          if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell)) {
            doubleShipsCoords.push([firstCell, secondCell])
            let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`,
                              `${x-1}-${y}`, `${x}-${y}`, `${x+1}-${y}`,
                              `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`,
                              `${x-1}-${y+2}`, `${x}-${y+2}`, `${x+1}-${y+2}`]

            closeCells.forEach(item => {
              if (!usedCells.includes(item)) usedCells.push(item)
            })
            numberOfShips +=1
          }
        }
      }
    }
    console.log(doubleShipsCoords)
  }

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
    this.createDoubleShips(this.usedCells)
    this.createSingleShips(this.usedCells)
    return `
      ${createGameField()}
    `
  }
}

