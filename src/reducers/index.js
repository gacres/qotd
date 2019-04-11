import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import qotdReducer from './qotdReducer';
import questionsReducer from './questionsReducer';
import responseReducer from './responseReducer';

export default combineReducers({
    form: formReducer,
    qotd: qotdReducer,
    questions: questionsReducer,
    responseKey: responseReducer,
    username: loginReducer
});