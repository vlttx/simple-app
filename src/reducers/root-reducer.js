import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ToDos from './ToDos';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['todos']
};

const rootReducer = combineReducers({
	todos: ToDos
});

export default persistReducer(persistConfig, rootReducer);
