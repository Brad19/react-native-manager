import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = {email: '', password: '', error:'', loading:false};

// export default (state = INITIAL_STATE, action) => {
//     console.log('reducer from Auth ', state, action);
//     switch(action.type) {
//         case EMAIL_CHANGED: return { ...state, email: action.payload }; 
//         case PASSWORD_CHANGED: return { ...state, password: action.payload}
//         case LOGIN_USER: return {...state, error:'', loading:true}
//         case LOGIN_USER_SUCCESS: return {...state, ...INITIAL_STATE, user: action.payload}
//         case LOGIN_USER_FAIL: return{...state, error: 'Authentication failed', password:'', loading:false}
//         default: return state;
//     }
// };

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
    ['LOGIN_USER_SUCCESS']:(state=INITIAL_STATE, action)=>  {
        return {...state, ...INITIAL_STATE, user: action.payload}
 },
}, INITIAL_STATE)

// export default reducer;