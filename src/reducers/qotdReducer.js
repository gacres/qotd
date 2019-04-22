import _ from 'lodash';
import {
    SIGN_IN,
    FETCH_QOTD,
    SUBMIT_QOTD
} from '../actions/types';

const INITIAL_STATE = {
    qotd: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            //return { ...state, qotd: action.payload.questions[_.findIndex(action.payload.questions)] };
            return { ...state, ...action.payload.documents[_.findIndex(action.payload.documents)] };
        case FETCH_QOTD:
            return { ...state, qotd: action.payload };
        case SUBMIT_QOTD:
            return { ...state, qotd: action.payload };
        default:
            return state;
    }
}