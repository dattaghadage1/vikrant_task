import { createSlice } from "@reduxjs/toolkit";

const ProductINC = createSlice({
    name: "INCR",
    initialState: {
        value: 0
    },
    reducers: {
        Increment: (state) => {
            state.value += 1
        },
        Filter:(state)=>{
            //feature product api is empty not images.....
        }

    }
})
export const { Increment,Filter } = ProductINC.actions;
export default ProductINC.reducer