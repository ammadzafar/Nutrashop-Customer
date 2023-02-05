import {React} from "react";

export const STORE_COLLECTION_PRODUCTS = 'STORE_COLLECTION_PRODUCTS'
export const FILTER_PRODUCTS_ON_BRANDS = 'FILTER_PRODUCTS_ON_BRANDS'
export const saveCollectionProducts = (res) => {
    return {
        type: 'STORE_COLLECTION_PRODUCTS',
        value: res
    }
}

export const filterProductsOnBrands = (res,priceRange) => {
    return {
        type: 'FILTER_PRODUCTS_ON_BRANDS',
        value: res,
        priceRange: priceRange,
    }
}
