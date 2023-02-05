import axios from "axios";
import {React} from "react";

export const STORE_BRAND_PRODUCTS = 'STORE_BRAND_PRODUCTS'
export const FILTER_PRODUCTS_ON_COLLECTIONS_AND_PRICE = 'FILTER_PRODUCTS_ON_COLLECTIONS_AND_PRICE'
export const saveBrandProducts = (res) => {
    return {
        type: 'STORE_BRAND_PRODUCTS',
        value: res
    }
}

export const filterProductsOnCollectionsAndPrice = (res,priceRange) => {
    return {
        type: 'FILTER_PRODUCTS_ON_COLLECTIONS_AND_PRICE',
        value: res,
        priceRange: priceRange,
    }
}
