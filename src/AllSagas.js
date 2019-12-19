import { all } from 'redux-saga/effects';
import fetchUserSaga from './components/Login/saga/fetchUserSaga';

export default function *AllSagas() {
    console.log('calling AllSagas');
    try {
        yield all([fetchUserSaga]);
    } catch(error) {
        console.log('error - allsagas :', error);
    }
   
}