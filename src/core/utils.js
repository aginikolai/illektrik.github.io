export function capitalize(string = '') {
  if (typeof string !== 'string') {
     return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}


export const createSingleShips = (usedCells) => {
  const singleShipsCoords = []
  let numberOfShips = 0

  while (numberOfShips < 4) {
    let x = Math.floor( Math.random() * 10) + 1;
    let y = Math.floor( Math.random() * 10) + 1;
    if (!usedCells.includes(`${x}-${y}`)) {
      // присвоить всем ячейкам с такми координатами атрибут notAvailable
      let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`,
                        `${x-1}-${y}`, `${x}-${y}`, `${x+1}-${y}`,
                        `${x+1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`]
      singleShipsCoords.push([`${x}-${y}`])

      closeCells.forEach(item => {
        if (!usedCells.includes(item)) usedCells.push(item)
      })

      numberOfShips +=1
    }
  }
  console.log(singleShipsCoords)
}

export const createDoubleShips = (usedCells) => {
  const doubleShipsCoords = []
  let numberOfShips = 0

  while (numberOfShips < 3) {
    const orient = Math.floor( Math.random() * 2);

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

export const createTripleShip = (usedCells) => {
  const tripleShipsCoords = []
  let numberOfShips = 0

  while (numberOfShips < 2) {
    const orient = Math.floor( Math.random() * 2);

    if (orient === 0) {
      const x = Math.floor( Math.random() * 8) + 1;
      const y = Math.floor( Math.random() * 10) + 1;
      const firstCell = `${x}-${y}`
      const secondCell = `${x+1}-${y}`
      const thirdCell = `${x+2}-${y}`

      if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell) && !usedCells.includes(thirdCell)) {
        tripleShipsCoords.push([firstCell, secondCell, thirdCell])
        let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`, `${x+2}-${y-1}`, `${x+3}-${y-1}`,
                          `${x-1}-${y}`, `${x}-${y}`, `${x+1}-${y}`, `${x+2}-${y}`, `${x+3}-${y}`,
                          `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`, `${x+2}-${y+1}`, `${x+3}-${y+1}`]

        closeCells.forEach(item => {
          if (!usedCells.includes(item)) usedCells.push(item)
        })
        numberOfShips +=1

      } else {
        const x = Math.floor( Math.random() * 10) + 1;
        const y = Math.floor( Math.random() * 8) + 1;
        const firstCell = `${x}-${y}`
        const secondCell = `${x}-${y+1}`
        const thirdCell = `${x}-${y+2}`

        if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell) && !usedCells.includes(thirdCell)) {
          tripleShipsCoords.push([firstCell, secondCell, thirdCell])
          let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`,
                            `${x-1}-${y}`,  `${x}-${y}`, `${x+1}-${y}`,
                            `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`,
                            `${x-1}-${y+2}`, `${x}-${y+2}`, `${x+1}-${y+2}`,
                            `${x-1}-${y+3}`, `${x}-${y+3}`, `${x+1}-${y+3}`]

          closeCells.forEach(item => {
            if (!usedCells.includes(item)) usedCells.push(item)
          })
          numberOfShips +=1
        }
      }
    }
  }
  console.log(tripleShipsCoords)
}

export const createBigShip = (usedCells) => {
  const bigShipCoords = []
  let numberOfShips = 0

  while (numberOfShips < 1) {
    const orient = Math.floor( Math.random() * 2);

    if (orient === 0) {
      const x = Math.floor( Math.random() * 7) + 1;
      const y = Math.floor( Math.random() * 10) + 1;
      const firstCell = `${x}-${y}`
      const secondCell = `${x+1}-${y}`
      const thirdCell = `${x+2}-${y}`
      const lastCell = `${x+3}-${y}`

      if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell) && !usedCells.includes(thirdCell) && !usedCells.includes(lastCell)) {
        bigShipCoords.push(firstCell, secondCell, thirdCell, lastCell)
        let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`, `${x+2}-${y-1}`, `${x+3}-${y-1}`, `${x+4}-${y-1}`,
                          `${x-1}-${y}`, `${x}-${y}`, `${x+1}-${y}`, `${x+2}-${y}`, `${x+3}-${y}`, `${x+4}-${y}`,
                          `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`, `${x+2}-${y+1}`, `${x+3}-${y+1}`, `${x+4}-${y+1}`]

        closeCells.forEach(item => {
          if (!usedCells.includes(item)) usedCells.push(item)
        })
        numberOfShips +=1

      } else {
        const x = Math.floor( Math.random() * 10) + 1;
        const y = Math.floor( Math.random() * 7) + 1;
        const firstCell = `${x}-${y}`
        const secondCell = `${x}-${y+1}`
        const thirdCell = `${x}-${y+2}`
        const lastCell = `${x}-${y+3}`

        if (!usedCells.includes(firstCell) && !usedCells.includes(secondCell) && !usedCells.includes(thirdCell) && !usedCells.includes(lastCell)) {
          bigShipCoords.push(firstCell, secondCell, thirdCell, lastCell)
          let closeCells = [`${x-1}-${y-1}`, `${x}-${y-1}`, `${x+1}-${y-1}`,
                            `${x-1}-${y}`,  `${x}-${y}`, `${x+1}-${y}`,
                            `${x-1}-${y+1}`, `${x}-${y+1}`, `${x+1}-${y+1}`,
                            `${x-1}-${y+2}`, `${x}-${y+2}`, `${x+1}-${y+2}`,
                            `${x-1}-${y+3}`, `${x}-${y+3}`, `${x+1}-${y+3}`,
                            `${x-1}-${y+4}`, `${x}-${y+4}`, `${x+1}-${y+4}`]

          closeCells.forEach(item => {
            if (!usedCells.includes(item)) usedCells.push(item)
          })
          numberOfShips +=1
        }
      }
    }
  }
  console.log(bigShipCoords)
}
