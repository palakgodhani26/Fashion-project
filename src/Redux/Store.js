// import { createStore, applyMiddleware } from 'Redux'
// import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
// import { rootReducer } from './Reducer/Root.Reducer'
// import { rootSaga } from './Saga/Root.Saga'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist : ['home']
// }

// const sagaMiddleware = createSagaMiddleware()

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleware = [thunk ,sagaMiddleware ]

// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(...middleware)
// )


// sagaMiddleware.run(rootSaga);
// export let persistor = persistStore(store)

// // render the applicationnn