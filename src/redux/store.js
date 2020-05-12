import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./root-saga";
// import thunk from "redux-thunk";
const sagaMiddlware = createSagaMiddleware();
const middlewares = [sagaMiddlware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddlware.run(rootsaga);
export const persistor = persistStore(store);
export default { store, persistor };
