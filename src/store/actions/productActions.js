import React from "react";

export const STORE_PRODUCT = 'STORE_PRODUCT'
export const saveProduct = (res) => {
    return {
        type: 'STORE_PRODUCT',
        value: res
    }
}

export const STORE_QUESTION = 'STORE_QUESTION'
export const saveQuestion = (res) => {
    return {
        type: 'STORE_QUESTION',
        value: res
    }
}

