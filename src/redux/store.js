import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import createSagaMiddleWare from 'redux-saga'
import rootSaga from "./saga/root-saga";


const sagaMiddleware = createSagaMiddleWare()
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}


const composeEnhancers =
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
})
: compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
  );

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);
const obj = { store, persistor };
export default obj;
