import { call, put, takeEvery, takeLatest,select } from 'redux-saga/effects'

import {get,post,remove } from "../../service";
import {authConst} from "../constants"

const BASE_URL =process.env.REACT_APP_BASE_HANEL_PATH ;

const FIRM_BRANCH_LIST = "/List";


function* testAuth() {   
  const res = yield get(BASE_URL+FIRM_BRANCH_LIST,null);
  if(res.success)
    yield put({type:authConst.reqTest,payload:"asdada"});
}





function* adminFirmBranchSaga() {
  yield takeEvery(authConst.reqTest, testAuth);

}

export default adminFirmBranchSaga;