import { type } from "@testing-library/user-event/dist/type"

// For Add items to Cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

// For Delete items From Cart
export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}