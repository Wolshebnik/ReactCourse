import { combineReducers } from 'redux';

import form from './reducers/reducerForm';
import goods from './reducers/reducerGoods';

const rootReducer = combineReducers({form, goods});

export default rootReducer;