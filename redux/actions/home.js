import { GET_LIST_ASYNC } from 'constants'

export const getList = (user) => {
  return { type: GET_LIST_ASYNC, payload: { user } }
}