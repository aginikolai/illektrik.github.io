import {NewGameComponent} from "../../core/NewGameComponent";

export class GameField extends NewGameComponent {
  static className = 'wrapper'

  constructor($root) {
    super($root, {
      name: 'GameField',
      listeners: ['click']
    });
  }

  onClick(event) {
    console.log('onClick', event)
  }

  toHTML() {
    return `
      <div class="battle_field">
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
        <div class="battle_cell"></div>
      </div>
    `
  }
}

