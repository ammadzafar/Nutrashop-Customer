import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    addedItems: [],
    total: 0,
    totalItems: 0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(action.payload.product.Variants[0])
            const addedItem = {
                'id': action.payload.id,
                'variantId':action.payload.Variants[0] && action.payload.Variants[0].id,
                'name': action.payload.name,
                'slug': action.payload.slug,
                'price': action.payload.price,
                'image': action.payload.images[0] && action.payload.images[0].path,
                'description': action.payload.description,
            }
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.payload.id === item.id)
            if (existed_item) {
                existed_item.quantity += 1
                state.total = state.total + addedItem.price
                state.totalItems = state.totalItems + 1

            } else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price
                state.addedItems = [...state.addedItems, addedItem]
                state.total = newTotal
                state.totalItems = state.totalItems + 1


            }
        },
        increment: (state, action) => {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            let item = state.addedItems.find(item => action.payload.id === item.id)
            item.quantity += 1

            state.total = state.total + item.price
            state.totalItems = state.totalItems + 1

        },
        decrement: (state, action) => {
            let existed_item = state.addedItems.find(item => action.payload.id === item.id)
            if (existed_item.quantity === 1) {
                let quantity = existed_item.quantity
                let price = existed_item.price
                let totalPrice = price * quantity
                const updatedArray = state.addedItems.filter(item => action.payload.id !== item.id)

                state.addedItems = updatedArray
                state.total = state.total - totalPrice
                state.totalItems = state.totalItems - quantity


            } else {
                existed_item.quantity -= 1

                state.total = state.total - existed_item.price
                state.totalItems = state.totalItems - 1

            }

        },
        remove: (state, action) => {
            let existed_item = state.addedItems.find(item => action.payload.id === item.id)
            let quantity = existed_item.quantity
            let price = existed_item.price
            let totalPrice = price * quantity
            const updatedArray = state.addedItems.filter(item => action.payload.id !== item.id)

            state.addedItems = updatedArray
            state.total = state.total - totalPrice
            state.totalItems = state.totalItems - quantity

        },
        addToCartQuantity: (state, action) => {
            console.log("reached",action.payload)
            const addedItem = {
                'id': action.payload.product.id,
                'variantId':action.payload.product.Variants[0].id,
                'name': action.payload.product.name,
                'slug': action.payload.product.slug,
                'price': action.payload.product.price,
                'image': action.payload.product.images[0] && action.payload.product.images[0].path,
            }
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.payload.product.id === item.id)
            if (existed_item) {
                existed_item.quantity += action.payload.quantity

                state.total = state.total + (addedItem.price * action.payload.quantity)
                state.totalItems = state.totalItems + action.payload.quantity

            } else {
                addedItem.quantity = action.payload.quantity;
                //calculating the total
                let newTotal = state.total + (addedItem.price * action.payload.quantity)

                state.addedItems = [...state.addedItems, addedItem]
                state.total = newTotal
                state.totalItems = state.totalItems + action.payload.quantity


            }
        },
        empty: (state) => {
            state.addedItems = []
            state.total = 0
            state.totalItems = 0

        }
    }
})

export const {increment, decrement, addToCart, remove, addToCartQuantity, empty} = cartSlice.actions

export default cartSlice.reducer
