import { $ } from "../core/dom";
import { Page } from "../core/Page";
import {NewGame} from './../components/game/NewGame'
import {GameField} from './../components/gameField/GameField'
import {Statistic} from './../components/statistic/Statistic'
import {createStore} from './../core/createStore'
import {rootReducer} from './../redux/rootReducer'

export class GamePage extends Page {
  getRoot() {
    const store = createStore(rootReducer, {
      shipsDestroyed: 0,
      shootsMade: 0
    })

    this.newGame = new NewGame({
      components: [GameField, Statistic],
      store
    })
    // newGame.render()
    return this.newGame.getRoot()
  }

  afterRender() {
    this.newGame.render()
  }
}