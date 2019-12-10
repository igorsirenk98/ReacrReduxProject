import { combineReducers } from 'redux';
import topProducts from './topProductsReducer';
import productById from './productByIdReducer';
import productsBySearch from './productsBySearchReducer';
import searchInputChange from './searchInputChangeReducer';

export default combineReducers({
    topProducts,
    productById,
    searchInputChange,
    productsBySearch
});