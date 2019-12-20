import { handleActions } from 'redux-actions';

const INITIAL_STATE = {email: '', password: '', error:'', loading:false};

export default handleActions({
    ['EMAIL_CHANGED']:(state=INITIAL_STATE, action)=>  {
        return {...state, email: action.payload}
     },
    ['PASSWORD_CHANGED']:(state=INITIAL_STATE, action)=>  {return {...state, password: action.payload}},
    ['LOGIN_USER']:(state=INITIAL_STATE, action)=>  {
        return {...state, loading: true}
    },
    ['AUTHENTICATE_USER_FULFILLED']:(state=INITIAL_STATE, action) => {
        console.log('auth user reducer fulfilled called', action.payload);
        return {...state, loading: false, user: action.payload}
    },
    ['AUTHENTICATE_USER_REJECTED']:(state=INITIAL_STATE, action) => {
        console.log('auth user reducer rejected called', action.payload);
        return {...state, loading: false, user: action.payload}
    },
    ['LOGIN_USER_SUCCESS']:(state=INITIAL_STATE, action)=>  {
        return {...state, ...INITIAL_STATE, user: action.payload}
 },
}, INITIAL_STATE)
