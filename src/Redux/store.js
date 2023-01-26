import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart/cartSlice'
import modalReducer from '../Features/Modal/modalSlice'
export default configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	}
})