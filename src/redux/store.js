import { configureStore} from "@reduxjs/toolkit";
import shop from './productSlice';
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
      shop,
      cart 
    },
  })


