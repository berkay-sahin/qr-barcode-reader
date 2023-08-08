import { authConst } from "../constants"



const decrease = (val) => ({ type: authConst.decrease,payload:val })
const increase = (val) => ({ type: authConst.increase,payload:val})
const reqTest = (payload) => ({ type: authConst.reqTest,payload:payload})



export const authActions =
{
    decrease,
    increase,
    reqTest
};