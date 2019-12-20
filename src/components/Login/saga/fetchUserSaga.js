import { takeLatest, put, delay } from 'redux-saga/effects';
import { FULFILLED } from 'redux-promise-middleware';
import { NavigationActions } from 'react-navigation';

function* fetchUser(action) {
    console.log('calling fetchUser :', action);
    if (action.payload.uid) {
        try {
            console.log('calling saga');
            yield delay(1000);
            yield put(NavigationActions.navigate({ routeName: 'EmployeeList' }));
        } catch(error) {
            console.log('fetch user saga error', error);
        }
        
    }
};

function* fetchUserSaga() {
    console.log('fetchUserSaga ');
  yield takeLatest(`AUTHENICATE_USER_${FULFILLED}`, fetchUser)  
}

export default fetchUserSaga;