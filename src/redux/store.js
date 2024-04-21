import { configureStore} from "@reduxjs/toolkit";
import shop from './productSlice';
import cart from './cartSlice';
import heart from './heartSlice';



export const store = configureStore({
    reducer: {
      shop,
      cart,
      heart
    },
  })


