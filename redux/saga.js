import { takeEvery } from 'redux-saga'
import * as sagas from './sagas'

export default function* rootSaga() {
  const keys = Object.keys(sagas)

  for (let i = 0; i < keys.length; i++) {
    const sagaItem = sagas[keys[i]]
    const namespace = keys[i].toLowerCase()
    const eKeys = Object.keys(sagaItem)
    for (let j = 0; j < eKeys.length; j++) {
      yield takeEvery(`${namespace}/${eKeys[j]}`, sagaItem[eKeys[j]])
    }
  }
}
