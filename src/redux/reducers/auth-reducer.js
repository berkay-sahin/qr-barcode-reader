import { authConst } from "../constants"

const initialValue = {
    list: [],
    byKey: {},
    value:0
}


export const authReducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {

        case authConst.decrease: {
            return { ...state,value:state.value-payload}
        }

        case authConst.increase:{
            return { ...state, value:state.value+payload}
        }

       
        default:
            return state
    }
}