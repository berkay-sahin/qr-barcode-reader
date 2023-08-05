import { combineReducers } from '@reduxjs/toolkit'

import {authReducer as auth} from "./auth-reducer"

export default combineReducers({
    auth,

})