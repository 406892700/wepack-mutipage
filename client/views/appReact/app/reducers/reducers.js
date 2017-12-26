import { combineReducers } from 'redux';
import { OPEN, CLOSE,  TOGGLE } from '../actions/testAction';

export const open = (state = {flag: false}, action) => {
    switch (action.type) {
    case OPEN: return {
        flag: true
    };
    case CLOSE: return {
        flag: false
    };
    default: return state;
    }
};

export const toggle = (state = { flag: false }, action) => {
    if(action.type === TOGGLE) {
        return {
            flag: !state.flag
        };
    }
    return state;
};

const Reducer = combineReducers({
    toggle
});

export default Reducer;
