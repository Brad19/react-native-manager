import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeReducer';
import EmployeesListReducer from './EmployeesListReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers ({
    form: formReducer,
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeesListReducer
});