import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import ToDos from './reducers/ToDos';
import ToDoForm from './reducers/ToDoForm';

const reducer = combineReducers({
	ToDos,
	ToDoForm
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
