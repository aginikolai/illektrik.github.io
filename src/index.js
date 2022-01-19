import './scss/index.scss'
import {NewGame} from "./components/game/NewGame";
import {GameField} from "./components/gameField/GameField";
import {Statistic} from "./components/statistic/Statistic";
import {createStore} from "./core/createStore";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer)

const newGame = new NewGame('#app', {
  components: [GameField, Statistic],
  store
})

newGame.render()
