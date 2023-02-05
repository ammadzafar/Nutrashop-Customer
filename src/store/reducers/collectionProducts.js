import * as actionTypes from '../actions/collectionProductActions'

const initialState = {
    collectionProducts: [],
    tempCollectionProducts: [],
    filteredBrands: []
}
const popularProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_COLLECTION_PRODUCTS:
            let collectionsData = action.value !== undefined ? action.value : []

            const newBrands = []
            collectionsData.map(product => {
                const existingBrand = newBrands.find(item => product.Brand.id === item.value)
                if (!existingBrand) {
                    let obj = {
                        label: product.Brand.name,
                        value: product.Brand.id
                    }
                    newBrands.push(obj)
                }
            })
            return {
                ...state,
                collectionProducts: collectionsData,
                tempCollectionProducts: collectionsData,
                filteredBrands: newBrands
            }
        case actionTypes.FILTER_PRODUCTS_ON_BRANDS:
            let new_products = []
            let minPrice=action.priceRange[0]
            let maxPrice=action.priceRange[1]
            if (action.value.length === 0) {
                state.tempCollectionProducts.map((product) => {
                    if(product.price >= minPrice && product.price<=maxPrice){
                        new_products.push(product)

                    }
                })
                return {
                    ...state,
                    collectionProducts: new_products,
                }
            }
            state.tempCollectionProducts.map((product) => {
                action.value.map((brand_id) => {
                    if (product.Brand.id === brand_id) {
                        if(product.price >= minPrice && product.price<=maxPrice){
                            new_products.push(product)

                        }
                    }
                })
            })
            return {
                ...state,
                collectionProducts: new_products,
            }

    }

    return state
}
export default popularProducts
