import { combineReducers } from 'redux'
import { productsReducer, selectedProductsReducer } from './product.reducer'

export default combineReducers({
    allProducts     : productsReducer,
    product         : selectedProductsReducer,
})