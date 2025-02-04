import { put, takeLatest, call} from 'redux-saga/effects';
import { retrieveAllUserData } from '../../services/APIServices';
import { getDataFailed, getDataSuccess } from '../ListSlice';

function* retrieveData(){
    try {
        let data = yield call(retrieveAllUserData);
        //console.log(data);
        yield put(getDataSuccess({payload: data.data}));
    } catch (error) {
        console.log(error);
        yield put(getDataFailed());

    }
}

function* ListSaga(){
    yield takeLatest('GET_LIST_DATA', retrieveData);
}

export default ListSaga;