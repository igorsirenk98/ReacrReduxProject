import { combineReducers } from 'redux';

import topProducts from '../containers/TopProducts/reducer';
import productDetails from '../containers/ProductDetails/reducer';
import productsBySearch from '../containers/SearchResults/reducer';
import searchInput from '../containers/controls/SearchInput/reducer';
import loadingAnimation from '../containers/controls/Loading/reducer';

export default combineReducers({
    topProducts,
    productDetails,
    searchInput,
    productsBySearch,
    loadingAnimation
});