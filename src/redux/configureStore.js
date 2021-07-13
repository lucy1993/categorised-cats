import { 
  configureStore,
  combineReducers,
  getDefaultMiddleware
 } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
// slices
import setCategories from './ducks/categorySlice';
import setCats from './ducks/catsSlice';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  categories: setCategories,
  cats: setCats,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);

export default store;