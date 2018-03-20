import { put, call } from 'redux-saga/effects'
import request from 'utils/request'
import config from 'utils/config'

export default {
  * getList(action) {
    // eslint-disable-next-line
    console.log('trigger namespace2.getList')
    yield put({ type: 'namespace2/save', payload: { loading: true } })
    const list = yield call(request, {
      url: config.api.getFavoriteByUser,
      data: action.payload
    })
    yield put({ type: 'namespace2/save', payload: { list, loading: false } })
  }
}