import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        item : [],
        totalQuantiy: 0,
        changed : false,
    },
    reducers : {
        replaceCart(state, action) {
            state.totalQuantiy = action.payload.totalQuantiy;
            state.item = action.payload.item;
        },
        addItem(state,action){
            // console.log(action.payload, "justgot")
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            state.totalQuantiy ++;
            state.changed = true;
            if(!existingItem){
                state.item.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                })
            } else {
                existingItem.quantity ++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            const id = action.payload;  
            const existingItem = state.item.find(item => item.id === id);
            state.totalQuantiy--;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.item = state.item.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});


export const cartAction = cartSlice.actions;

export default cartSlice;