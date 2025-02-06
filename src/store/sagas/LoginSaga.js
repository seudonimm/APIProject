import auth from '@react-native-firebase/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createAccountFailure, createAccountSuccess } from '../LoginSlice';

function* logInToAccount(){

}
// function createAccountResponse(email, password){
//     return auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then(() => {
            
//             console.log('Account created')
//         })
//         .catch(error => {
//             if(error.code === 'auth/email-already-in-use'){
//                 console.log('That email address is already in use!');
//             }
//             if(error.code === 'auth/invalid-email'){
//                 console.log('That email address is invalid!');
//             }

//             console.error(error);
//         });

// }
function* createAccount(email, password){
    try{
        const res = yield call(auth().createUserWithEmailAndPassword, email, password);
        console.log('res ' + res);
        yield put(createAccountSuccess());
    }catch(e){
        if(e.code === 'auth/email-already-in-use'){
            console.log('That email address is already in use!');
        }
        if(e.code === 'auth/invalid-email'){
            console.log('That email address is invalid!');
        }
        console.log(e);
        yield put(createAccountFailure());
    }
}

function* changePassword(){

}

function* logout(){

}

function* LoginSaga(email, password){
    yield takeLatest('LOG_IN', logInToAccount);
    yield takeLatest('CREATE_ACCOUNT', createAccount, email, password);
    yield takeLatest('CHANGE_PASSWORD', changePassword);
    yield takeLatest('LOGOUT', logout);
}

export default LoginSaga;