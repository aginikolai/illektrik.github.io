export class GameFieldSelection {
  constructor() {
    this.fields = []
    this.usedCells = []
  }

  select(el) {
    this.fields.push(el)
  }

  sedUsedCell(el) {
    this.usedCells.push(el)
  }
}
