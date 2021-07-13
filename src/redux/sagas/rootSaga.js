import { takeLatest } from 'redux-saga/effects';
// handlers
import { handleGetCategories } from './handlers/categories';
import { handleGetCats } from './handlers/cats';

// slices
import { getCategories } from '../ducks/categorySlice';
import { getCats } from '../ducks/catsSlice';



export function* watcherSaga() {
  // auth
  yield takeLatest(getCategories.type, handleGetCategories);
  yield takeLatest(getCats.type, handleGetCats);


}