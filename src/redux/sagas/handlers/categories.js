import { call, put } from 'redux-saga/effects';
import { setCategories } from '../../ducks/categorySlice';
import { requestGetCategories } from '../requests/categories';

export function* handleGetCategories(action) {
  const { payload } = action;
  
  try {
    const response = yield call(requestGetCategories, payload);
    const { data } = response;

    yield put(setCategories(data));
  } catch (error) {
    console.log(error)
  }
}