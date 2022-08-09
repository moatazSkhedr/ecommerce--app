import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../components/cartItems";
const initialState = {
    amount : 0 ,
    basket : [] ,
    cartItems:cartItems,
    total : 0 ,
    
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToBasket :(state , actions)=>{
            // console.log(actions.payload)
            // const itemId = actions.payload
            // state.basket =  cartItems.filter((item)=>item.id === itemId)
            // state.amount = state.amount + 1;
            state.basket = [...state.basket , actions.payload] 
            state.amount = state.amount + 1
        },
        removeFromBasket:(state , actions)=>{
            const itemId = actions.payload
            state.basket  = state.basket.filter((item)=> item.id !== itemId)
            state.amount = state.amount - 1 

        },
        calculateTotal :(state)=>{
            let total =  0 
            state.basket.forEach((item)=>{
                total = total + item.price  
            });
            state.total = total;
        },
        clearBasket :(state)=>{
            state.basket = []
            state.amount = 0 ;
        }
    }
})

export const {addToBasket , removeFromBasket , calculateTotal , clearBasket} = cartSlice.actions;
export default cartSlice.reducer;
