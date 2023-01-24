import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICart {
    id: number
    title: string
    price: number
    quantity: number
    img: string
}

interface CartState {
    cart: ICart[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addProduct: (state, action: PayloadAction<ICart>) => {
        const productExists = state.cart.find(product => product.id === action.payload.id)

        if(!productExists) {
          state.cart.push(action.payload)
        }
      },
      removeProduct: (state, action: PayloadAction<number>) => {
        const cartWithoutRemovedOne = state.cart.filter(product => product.id !== action.payload)
        state.cart = cartWithoutRemovedOne
      },
      increaseQuantity: (state, action: PayloadAction<number>) => {
        const product = state.cart.find(product => product.id === action.payload)
      
        if(product) {
          product.quantity += 1
        }
      },
      decreaseQuantity: (state, action: PayloadAction<number>) => {
        const product = state.cart.find(product => product.id === action.payload)

        if(product) {
          product.quantity === 1 ? product.quantity : product.quantity -= 1
        }
      },
    }
})

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;