import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import ToDos from './reducers/ToDos';
import { persistStore } from 'redux-persist';
const reducer = combineReducers({
	ToDos
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	reducer,
	composeEnhancer(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
export default store;
