import { FILTER, ADD} from '../actions/indexAction';

const initialState = [
    { text: 111 },
    { text: 112 },
    { text: 113 },
    { text: 114 },
    { text: 112 },
    { text: 116 },
    { text: 111 },
];

// 筛选
export const filter = (state, text) => {
    let result = state.filter((item) => text === item.text);
    return result.length ? result : state;
};

// 添加
export const add = (state, text) => {
    return [
        ...state,
        {text}
    ];
};

/**
 * reducer
 * @param {*} state 
 * @param {*} action 
 */
export const index = (state = initialState, action) => {
    switch(action.type) {
    case FILTER: return filter(state, action.text); // 筛选
    case ADD: return add(state, action.text); // 添加
    default: return state;
    }
};

export default index;
