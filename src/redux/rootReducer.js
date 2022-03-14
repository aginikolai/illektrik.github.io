export function rootReducer (state, action) {
  switch (action.type) {
    case 'MAKE_SHOOT':
      return {
        ...state,
        shootsMade: action.payload
      }
    default: return state
  }
}
