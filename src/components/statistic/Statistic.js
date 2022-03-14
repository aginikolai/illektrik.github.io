import {NewGameComponent} from "../../core/NewGameComponent";

export class Statistic extends NewGameComponent { 
  static className = 'wrapper'

  init() {
    super.init()
    this.$subscribe(state => {
      const shots = document.getElementsByClassName('battle_shots')
      shots[0].innerHTML = state.shootsMade
    })
  }

  toHTML() {
    return `
      <div class="battle_info">
        <p class="battle_shots">0</p>
      </div>
    `
  }
}
