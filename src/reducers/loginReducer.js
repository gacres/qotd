import { SIGN_IN } from '../actions/types';

const INITIAL_STATE = {
    username: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, username: action.payload.username };
        default:
            return state;
    }
}