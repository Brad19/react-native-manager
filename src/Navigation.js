import LoginForm from './components/Login/LoginForm';
import { StackNavigator } from 'react-navigation';
import EmployeeList from './components/EmployeeList';

const Navigation = StackNavigator({
    Login: {screen: LoginForm},
    EmployeeList: { screen: EmployeeList}
});

export default Navigation;