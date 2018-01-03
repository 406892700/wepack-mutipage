export const FILTER = 'FILTER';
export const ADD = 'ADD';

/**
 * 筛选
 * @param {*筛选内容} text 
 */
export const filters = (text) => {
    return {
        type: FILTER,
        text
    };
};

/**
 * 添加
 * @param {*添加内容} text 
 */
export const add = (text) => {
    return {
        type: ADD,
        text
    };
};
