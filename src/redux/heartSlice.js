import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'heart',
    initialState: {
        heartItem: []
    },
    reducers: {
        addHeartToFavorites: (state,action) => {
            const timeId = new Date().getTime()
            state.heartItem.push({
                id: timeId,
                heartId: action.payload.elem.id,

            })
        },

        removeHeartFromFavorites: (state, action) => {
            state.heartItem = state.heartItem.filter( heartItem => heartItem.id !== action.payload.heartItemId)
        }
    }
})
export const getTotalHearts = state => {
    return state.heart.heartItem.length 
  };

export const getHeartItem = state => state.heart.heartItem;
export const {addHeartToFavorites, removeHeartFromFavorites} = slice.actions;
export  default slice.reducer;