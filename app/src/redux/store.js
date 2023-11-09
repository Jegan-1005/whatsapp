//import package
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//import reducer
import UpdateNotes from './reducer/notesReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  UpdateNotes: '',
});

const configureStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default configureStore;
