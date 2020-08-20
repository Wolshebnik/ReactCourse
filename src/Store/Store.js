import { createStore } from 'redux';
import rootReducer from './rootReducer';

let store = createStore(rootReducer);

export { store };
