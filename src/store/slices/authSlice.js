import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    auth: {},
    isAuthenticated: false,
    guestEmail: '',
    isGuest: false,
    wishlist: [],
    abc:''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveLoginData: (state, action) => {
            let productIds=[]
            if(action.payload.user.wishlist.length !==0){
                 productIds= action.payload.user.wishlist.map(function (w) {
                    return w.id;
                });
            }
            state.auth = action.payload
            state.isAuthenticated = true
            state.wishlist = productIds

        },
        logout: (state, action) => {

            state.auth = {}
            state.isAuthenticated = false
            state.wishlist = []

        },
        storeGuestEmail: (state, action) => {
            state.auth = {}
            state.guestEmail = action.payload
            state.isGuest = true
        },
        setGuest: (state, action) => {
            state.isGuest = false
        },
        wishlistAdd:(state,action)=>{

            state.wishlist.push(action.payload.productId)
        },
        wishlistRemove:(state,action)=>{
            const index=state.wishlist.indexOf(action.payload.productId)
            state.wishlist.splice(index,1)

        }
    }
})

export const {saveLoginData,logout,storeGuestEmail,wishlistAdd,wishlistRemove,setGuest} = authSlice.actions

export default authSlice.reducer
