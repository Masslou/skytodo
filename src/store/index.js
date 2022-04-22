import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import { todoReducer } from '../redux/reducers/TodoReducer';
import { uiReducer } from '../redux/reducers/uiReducer';

const __DEV__ = process.env.NODE_ENV === 'development';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#a4319f',
    error: () => '#ff0005'
  }
});

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true });
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

export const rootReducer = combineReducers({
  todo: todoReducer,
  ui: uiReducer
});

const persistConfig = {
  key: 'persist-key',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

export { store, __DEV__, persistor };
