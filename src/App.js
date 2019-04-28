import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga';
//import fetchUserSaga from './components/sagas';
import AllSagas from './AllSagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
import Navigation from './Navigation';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "xxxxxxxx",
            authDomain: "xxxx-f5ff7.firebaseapp.com",
            databaseURL: "https://xxxx-f5ff7.firebaseio.com",
            projectId: "xxxx-f5ff7",
            storageBucket: "xxxx-f5ff7.appspot.com",
            messagingSenderId: "1087570901563"
        };
        firebase.initializeApp(config);
    }
    render() {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(reducers, composeEnhancers, applyMiddleware(promiseMiddleware(), sagaMiddleware));
        sagaMiddleware.run(AllSagas);
        return (
                <Provider store={store}>
                    <Navigation />
                </Provider>
            );
    }
}

export default App;
