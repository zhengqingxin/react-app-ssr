import { SAVE } from 'constants'

const initialState = {
  user: 'zhengqingxin'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
