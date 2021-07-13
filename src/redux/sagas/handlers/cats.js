import { call, put } from 'redux-saga/effects';
import { setCats } from '../../ducks/catsSlice';
import { requestGetCats } from '../requests/cats';

export function* handleGetCats(action) {
  const { payload } = action;
  
  try {
    const response = yield call(requestGetCats, payload);
    const { data } = response;

    yield put(setCats(data));
  } catch (error) {
    console.log(error)
  }
}