import { authConst } from "../constants"



const decrease = () => ({ type: authConst.decrease })
const increase = () => ({ type: authConst.increase})
const reqTest = (payload) => ({ type: authConst.reqTest,payload:payload})



export const authActions =
{
    decrease,
    increase,
    reqTest
};