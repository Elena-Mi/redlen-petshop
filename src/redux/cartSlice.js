import { createSlice } from "@reduxjs/toolkit";
const cartItemLS = JSON.parse(localStorage.getItem('cartItems'));

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItemLS === null ? [] : cartItemLS,
      
    },
    reducers: {
        addItemToCart: (state,action)=> {
           
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                shopId: action.payload.elem.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.elem.price,
                
            })
        
        },
       
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter( cartItem => cartItem.id !== action.payload.cartItemId)
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce( (total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
export const getTotalArticles = state => {
    return state.cart.cartItems.length 
  };
export const getCartItems = state => state.cart.cartItems;

export const { addItemToCart, removeItemFromCart} = slice.actions;
export default slice.reducer;