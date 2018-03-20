import { combineReducers } from 'redux'
import { isFunction } from 'lodash'
import * as reducers from './inc'

function generateReducer() {
  const keys = Object.keys(reducers)
  const ret = {}
  keys.forEach(k => {
    // 每一个reducer(namespace)
    let reducer = reducers[k]
    // namespace 转化为小写
    const key = k.toLocaleLowerCase()
    // 将 reducer 的 key 前自动加上 namespace
    const newReducer = {}
    Object.keys(reducer).forEach(rk => {
      if (isFunction(reducer[rk])) {
        newReducer[`${key}/${rk}`] = reducer[rk]
      } else {
        newReducer[rk] = reducer[rk]
      }
    })
    reducer = newReducer
    // 初始化state
    const initialState = reducer.initialState || {}
    ret[key] = (state = initialState, action) => {
      const rKeys = Object.keys(reducer)
      const fnKey = rKeys.filter(rk => rk === action.type)[0]
      if (fnKey && isFunction(reducer[fnKey])) {
        return reducer[fnKey](state, action)
      }
      return state
    }
  })
  return ret
}

export default combineReducers(generateReducer())
