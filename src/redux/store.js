import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import { createStore } from 'redux';
import mySaga from './sagas'

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false,serializableCheck: false,immutableCheck: false }), sagaMiddleware];



// if (devMode) {
//     middleware.push(logger);
// }



const store = configureStore({
  reducer:reducers,
  //devTools: devMode,
  middleware,
  // preloadedState,
});







export default store;

sagaMiddleware.run(mySaga);