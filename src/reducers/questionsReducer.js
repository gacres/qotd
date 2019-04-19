import _ from 'lodash';
import {
    FETCH_QUESTIONS, 
    SIGN_IN
} from '../actions/types';

export default (state = {}, action) => {
    console.log("in questionsReducer");
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ..._.values(action.payload.questions) };
        case FETCH_QUESTIONS:
            console.log("in FETCH_QUESTIONS");
            return { ...state, ..._.mapKeys(action.payload.questions, 'id') };
        default:
            return state;
    }
}