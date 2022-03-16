import './scss/index.scss'
// import {NewGame} from "./components/game/NewGame";
// import {GameField} from "./components/gameField/GameField";
// import {Statistic} from "./components/statistic/Statistic";
// import {createStore} from "./core/createStore";
// import {rootReducer} from "./redux/rootReducer";
import {Router} from './core/router/Router'
import {DashboardPage} from './pages/DashboardPage'
import {GamePage} from './pages/GamePage'

new Router("#app", {
  dashboard: DashboardPage,
  newGame: GamePage  
})
// const store = createStore(rootReducer, {
//   shipsDestroyed: 0,
//   shootsMade: 0
// })

// const newGame = new NewGame('#app', {
//   components: [GameField, Statistic],
//   store
// })

// newGame.render()
