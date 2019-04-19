import { LOG_IN } from '../actions/types';

const INITIAL_STATE = {
    token: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, token: action.payload.token };
        default:
            return state;
    }
}