import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import noteReducer from './noteReducer';

export default combineReducers({
    notes: notesReducer,
    note: noteReducer,
});