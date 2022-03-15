import {NewGameComponent} from "../../core/NewGameComponent";

export class Statistic extends NewGameComponent { 
  static className = 'wrapper'

  init() {
    super.init()
    this.$subscribe(state => {
      const shots = document.getElementsByClassName('battle_shots')
      shots[0].innerHTML = `Shoots made: ${state.shootsMade}`
      shots[1].innerHTML = `Ships destroyed: ${state.shipsDestroyed}`
    })
  }

  toHTML() {
    return `
      <div class="battle_info">
        <p class="battle_shots">Shoots made: 0</p>
        <p class="battle_shots">Ships destroyed: 0</p>
      </div>
    `
  }
}
