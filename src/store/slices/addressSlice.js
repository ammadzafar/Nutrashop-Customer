import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const storeAddresses = createAsyncThunk(
    "/addresses/",
    async (body, { dispatch }) => {
        const response = await axios.get("customer/addresses/" + body);
        return response;
    }
);
const initialState = {
    addressData:[]
}
export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {},
    extraReducers: {
        [storeAddresses.fulfilled]: (state, action) => {
            state.addressData = action.payload.data.addresses
        },
        // [storeAddresses.pending]: (state, action) => {
        //     state.addressData = action.payload.data.addresses
        //
        // },
        // [storeAddresses.rejected]: (state, action) => {
        //     state.addressData = action.payload.data.addresses
        //
        // }
    }
})

export default addressSlice.reducer
