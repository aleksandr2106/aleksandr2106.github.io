import { compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import localStorage from 'store';

const store = createStore(
  rootReducer,
  localStorage.get('app'),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => localStorage.set('app', store.getState()));

export default store;
