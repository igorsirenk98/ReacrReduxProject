import { combineReducers } from 'redux';
import topProducts from './topProductsReducer';
import productById from './productByIdReducer';
import productsBySearch from './productsBySearchReducer';

export default combineReducers({
    topProducts,
    productById,
    productsBySearch
});