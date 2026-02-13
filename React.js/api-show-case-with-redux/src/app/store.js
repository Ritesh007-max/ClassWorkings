import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/users/userSlice'
import productReducer from '../components/products/productSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },

})