import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import qotdReducer from './qotdReducer';
import questionsReducer from './questionsReducer';
import responseReducer from './responseReducer';
import resultReducer from './resultReducer';
import initializeReducer from './initializeReducer';

export default combineReducers({
    form: formReducer,
    qotd: qotdReducer,
    questions: questionsReducer,
    responseKey: responseReducer,
    result: resultReducer,
    token: initializeReducer,
    username: loginReducer
});