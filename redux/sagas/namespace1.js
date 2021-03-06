import { put, call } from 'redux-saga/effects'
import request from 'utils/request'
import config from 'utils/config'

// export default {
//   namespace: 'namespace1',
//   effects: {
//     * getList(action) {
//       // eslint-disable-next-line
//       console.log('trigger namespace1.getList')
//       yield put({ type: 'SAVE', payload: { loading: true } })
//       const list = yield call(request, {
//         url: config.api.getFavoriteByUser,
//         data: action.payload
//       })
//       yield put({ type: 'SAVE', payload: { list, loading: false } })
//     }
//   }
// }

export default {
  * getList(action) {
    // eslint-disable-next-line
    console.log('trigger namespace1.getList')
    yield put({ type: 'namespace1/save', payload: { loading: true } })
    const list = yield call(request, {
      url: config.api.getFavoriteByUser,
      data: action.payload
    })
    yield put({ type: 'namespace1/save', payload: { list, loading: false } })
  }
}