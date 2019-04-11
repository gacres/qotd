import { SIGN_IN } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, responseKey: action.payload.responseKey };
        default:
            return state;
    }
}