import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import request from 'utils/request'
import config from 'utils/config'

function* getList(action) {
  yield put({ type: 'SAVE', payload: { loading: true } })
  const list = yield call(request, {
    url: config.api.getFavoriteByUser,
    data: action.payload
  })
  yield put({ type: 'SAVE', payload: { list, loading: false } })
}

export default function* rootSaga() {
  yield takeEvery('GET_LIST_ASYNC', getList)
}
