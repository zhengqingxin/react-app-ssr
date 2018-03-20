export default {
  initialState: { user: 'zhengqingxin' },
  save: (state, action) => {
    return { ...state, ...action.payload }
  },
}