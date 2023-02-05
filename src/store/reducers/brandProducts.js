import * as actionTypes from '../actions/brandProductActions'

const initialState = {
    brandProducts: [],
    tempBrandProducts: [],
    filteredCollections: []
}
const popularProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_BRAND_PRODUCTS:
            const newCollections = []
            let brandsData = action.value !== undefined ? action.value : []
            brandsData.map(product => {
                product.collections.map(collection => {
                    const existingCollection = newCollections.find(item => collection.id === item.value)
                    if (!existingCollection) {
                        let obj = {
                            label: collection.name,
                            value: collection.id
                        }
                        newCollections.push(obj)
                    }

                })


            })
            return {
                ...state,
                brandProducts: brandsData,
                tempBrandProducts:brandsData,
                filteredCollections: newCollections
            }
        case actionTypes.FILTER_PRODUCTS_ON_COLLECTIONS_AND_PRICE:
            let new_products = []
            let minPrice=action.priceRange[0]
            let maxPrice=action.priceRange[1]
            if (action.value.length === 0) {
                state.tempBrandProducts.map((product) => {
                    if(product.price >= minPrice && product.price<=maxPrice){
                        new_products.push(product)

                    }
                })
                return {
                    ...state,
                    brandProducts: new_products,
                }
            }
            state.tempBrandProducts.map((product) => {
                action.value.map((collection_id) => {
                    let existProduct=product.collections.find(item=>item.id===collection_id)
                    if (existProduct) {
                        let arrayProduct=new_products.find(item=>item.id===product.id)
                        if(!arrayProduct){
                            if(product.price >= minPrice && product.price<=maxPrice){
                                new_products.push(product)

                            }
                        }

                    }
                })
            })
            return {
                ...state,
                brandProducts: new_products,
            }
    }
    return state;
}

export default popularProducts
