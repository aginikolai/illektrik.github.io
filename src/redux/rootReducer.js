export function rootReducer (state, action) {
  switch (action.type) {
    case 'MAKE_SHOOT':
      return {
        ...state,
        shootsMade: action.payload
      }
    case 'SHIP_SUNK':
      return {
        ...state,
        shipsDestroyed: action.payload
      }
    default: return state
  }
}
