import _ from 'lodash';
import {
    FETCH_QUESTIONS, 
    SIGN_IN
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(_.values(action.payload.questions));
            return { ...state, ..._.values(action.payload.questions) };
        case FETCH_QUESTIONS:
            return { ...state, ..._.mapKeys(action.payload.questions, 'id') };
        default:
            return state;
    }
}