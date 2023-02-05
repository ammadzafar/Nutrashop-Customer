import {ADD_TO_CART, ADD_TO_CART_QUANTITY, INCREMENT, DECREMENT, REMOVE, EMPTY} from '../actions/cartActions'


const initState = {
    addedItems: [],
    total: 0,
    totalItems: 0

}
const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        const addedItem = {
            'id': action.payload.id,
            'name': action.payload.name,
            'slug': action.payload.slug,
            'price': action.payload.price,
            'reviews':action.payload.reviews,
            'image': action.payload.images[0] && action.payload.images[0].path,
            'description': action.payload.description,
        }
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.payload.id === item.id)
        if (existed_item) {
            existed_item.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                totalItems: state.totalItems + 1
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalItems: state.totalItems + 1
            }

        }
    } else if (action.type === ADD_TO_CART_QUANTITY) {
        const addedItem = {
            'id': action.payload.id,
            'name': action.payload.name,
            'slug': action.payload.slug,
            'price': action.payload.price,
            'image': action.payload.images[0] && action.payload.images[0].path,
            'description': action.payload.description,
        }
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.payload.id === item.id)
        if (existed_item) {
            existed_item.quantity += action.quantity
            return {
                ...state,
                total: state.total + (addedItem.price * action.quantity),
                totalItems: state.totalItems + action.quantity
            }
        } else {
            addedItem.quantity = action.quantity;
            //calculating the total
            let newTotal = state.total + (addedItem.price * action.quantity)

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalItems: state.totalItems + action.quantity
            }

        }
    } else if (action.type === INCREMENT) {
        let item = state.addedItems.find(item => action.id === item.id)
        item.quantity += 1
        return {
            ...state,
            addedItems: newArray,
            total: state.total + newArray[index].price,
            totalItems: state.totalItems + 1,
            // addedItems:newArray
        }
    } else if (action.type === DECREMENT) {
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item.quantity === 1) {
            let quantity = existed_item.quantity
            let price = existed_item.price
            let totalPrice = price * quantity
            const updatedArray = state.addedItems.filter(item => action.id !== item.id)
            return {
                ...state,
                addedItems: updatedArray,
                total: state.total - totalPrice,
                totalItems: state.totalItems - quantity
            }


        } else {
            existed_item.quantity -= 1
            return {
                ...state,
                total: state.total - existed_item.price,
                totalItems: state.totalItems - 1
            }
        }

    } else if (action.type === REMOVE) {
        let existed_item = state.addedItems.find(item => action.id === item.id)
        let quantity = existed_item.quantity
        let price = existed_item.price
        let totalPrice = price * quantity
        const updatedArray = state.addedItems.filter(item => action.id !== item.id)
        return {
            ...state,
            addedItems: updatedArray,
            total: state.total - totalPrice,
            totalItems: state.totalItems - quantity
        }
    } else if (action.type === EMPTY) {
        return {
            ...state,
            addedItems: [],
            total: 0,
            totalItems: 0
        }
    } else {
        return state
    }
}

export default cartReducer
