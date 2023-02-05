import axios from "axios"
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {wishlistAdd, wishlistRemove} from "./authSlice"

const initialState = {
    loading: false,
    wishlistLoading: false,
    wishListP: []

}
export const addToWishlist = createAsyncThunk(
    "wishlist/add",
    async (body, {dispatch}) => {
        const response = await axios.post("wishlist", body)
        dispatch(wishlistAdd({productId: response.data.wishlist.productId}))
        return response;
    }
);
export const removeFromWishlist = createAsyncThunk(
    "wishlist/remove",
    async (body, {dispatch}) => {
        const response = await axios.post("wishlist/remove", body)
        dispatch(wishlistRemove({productId: body.productId}))
        return response;
    }
);
export const wishListProducts = createAsyncThunk(
    "wishlist/products",
    async (body, {dispatch}) => {
        const response = await axios.post("wishlist/products", body)
        return response;
    }
);
export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: {
        [addToWishlist.fulfilled]: (state, action) => {
            state.loading = false
        },
        [addToWishlist.pending]: (state, action) => {
            state.loading = true

        },
        [addToWishlist.rejected]: (state, action) => {
            state.loading = false

        },
        [removeFromWishlist.fulfilled]: (state, action) => {
            let productId = action.payload.data.productId
            const updatedArray=state.wishListP.filter(product=> product.id!==productId)
            state.wishListP=updatedArray
        },
        [wishListProducts.fulfilled]: (state, action) => {
            state.wishlistLoading = false
            state.wishListP = action.payload.data.products
        },
        [wishListProducts.pending]: (state, action) => {
            state.wishlistLoading = true

        },
        [wishListProducts.rejected]: (state, action) => {
            state.wishlistLoading = false

        },
    },
})

export const {addWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
