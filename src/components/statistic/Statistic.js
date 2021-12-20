import {NewGameComponent} from "../../core/NewGameComponent";

export class Statistic extends NewGameComponent {
  static className = 'wrapper'

  toHTML() {
    return `<div class="battle_info"></div>`
  }
}
