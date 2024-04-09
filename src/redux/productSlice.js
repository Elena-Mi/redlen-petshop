import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'shop',
    initialState: {
        selectedCategory: "ВСЕ КАТЕГОРИИ"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }

    
})
export const getSelectedCategory = state => state.shop.selectedCategory;
export const {filterCategory} = productSlice.actions;
export default productSlice.reducer;