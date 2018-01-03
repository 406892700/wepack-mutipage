import { combineReducers } from 'redux';
import index from './indexReducer';
import about from './aboutReducer';

export default combineReducers({
    index, // 首页
    about, // 关于我
});
