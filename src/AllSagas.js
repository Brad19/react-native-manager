import { all } from 'redux-saga/effects';
import fetchUserSaga from './components/sagas';

export default function *AllSagas() {
    console.log('calling AllSagas');
    try {
        yield fetchUserSaga;
    } catch(error) {
        console.log('error - allsagas :', error);
    }
   
}