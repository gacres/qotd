import { FETCH_RESULT } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_RESULT:
            // console.log("resultReducer.FETCH_RESULT");
            // console.log(action.payload);
            return {...state, ...action.payload };
        default:
            return state;
    }
}