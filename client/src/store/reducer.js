
const initState = {
  category: undefined
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {...state, category: action.category}
    default:
      return state
  }
}

export default reducer
