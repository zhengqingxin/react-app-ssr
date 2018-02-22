const initialState = {
  user: 'zhengqingxin'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, list: action.list }
    default:
      return state
  }
}
