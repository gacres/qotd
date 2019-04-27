import _ from 'lodash';
import {
    SIGN_IN,
    //FETCH_QOTD,
    SUBMIT_QOTD
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload.documents[_.findIndex(action.payload.documents)] };
        // case FETCH_QOTD:
        //     console.log("qotdReducer.FETCH_QOTD:");
        //     console.log(action.payload);
        //     return { ...state, ...action.payload };
        case SUBMIT_QOTD:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}