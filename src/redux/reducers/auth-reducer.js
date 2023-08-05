import { authConst } from "../constants"

const initialValue = {
    list: [],
    byKey: {},
    val:0
}


export const authReducer = (state = initialValue, action) => {
    const { type, payload } = action;
    console.log('payload :>> ', payload)
    switch (type) {

        case authConst.decrease: {
            return { ...state, val:val-1}
        }

        case authConst.increase:{
            return { ...state, val:val+1}
        }

       
        default:
            return state
    }
}