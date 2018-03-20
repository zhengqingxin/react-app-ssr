export default {
  initialState: { user: 'zhengqingxin' },
  save: (state, action) => {
    return { ...state, ...action.payload }
  },
  test: (state) => {
    console.log('trigger namespace1/test') // eslint-disable-line
    return state
  }
}