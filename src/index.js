import './scss/index.scss'
import {NewGame} from "./components/game/NewGame";
import {GameField} from "./components/gameField/GameField";
import {Statistic} from "./components/statistic/Statistic";

const newGame = new NewGame('#app', {
  components: [GameField, Statistic]
})

newGame.render()
