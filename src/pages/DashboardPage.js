import { Page } from "../core/Page";
import { $ } from "../core/dom";

export class DashboardPage extends Page {
  getRoot() {
    console.log(this.params)
    console.log(window.location.host)
    return $.create('div', 'game_stat').html(`<h1>Game Result: ${this.params[1]}</h1>`)
  }
} 