import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getFormValues, reduxForm } from 'redux-form';
import { createAction, } from 'redux-actions';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class LoginForm extends Component {
    
    state = {modal:false};
    static navigationOptions = {
        title: 'Welcome to manager'
    }
    onEmailChange(email) {
        this.props.changeEmail(email);
    }
    onPasswordChange(text) {
        this.props.changePassword(text);
    }
    onButtonPress(){
        this.props.loginUser();
    }
    renderError() {
        const { auth } = this.props;
        return auth && auth.user.code && (
            <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorStyle}>{auth.user.code}</Text>
            </View>
        )
        
    }

    componentWillMount() {
        this.props.children={};
       
    }

    renderButton() {
        const { email, password, user, loading } = this.props;
        
        if (loading) {
            this.props.authenticateUser(email, password);
            return <Spinner size='small'/>
        }
        
        return(<Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>);  
    }
    
    render() {
       
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)} 
                        value={this.props.email}
                        autoFocus={true}
                    />
                </CardSection>
                <CardSection>
                <Input 
                    label="Password" 
                    placeholder="password" 
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
                </CardSection>
                    {this.renderError()}
                <CardSection>
                {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        formValues: getFormValues('LOGIN_FORM')(state) || {},
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user
    };
};

export const actionTypes = {
    EMAIL_CHANGED: 'EMAIL_CHANGED',
    PASSWORD_CHANGED: 'PASSWORD_CHANGED',
    AUTHENICATE_USER: 'AUTHENTICATE_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER: 'LOGIN_USER',
    TEST_ACTION: 'TEST_ACTION',
    AUTHENICATE_USER_FULFILLED: 'AUTHENTICATE_USER_FULFILLED',
    AUTHENICATE_USER_REJECTED: 'AUTHTENTICATE_USER_REJECTED'
}    

export const actions = {
    authenticateUser: createAction(actionTypes.AUTHENICATE_USER, (email, password) => (
             firebase.auth().signInWithEmailAndPassword(email, password)
    )),
    emailChanged: createAction(actionTypes.EMAIL_CHANGED),
    passwordChanged: createAction(actionTypes.PASSWORD_CHANGED),
    loginUser: createAction(actionTypes.LOGIN_USER),
    loginUserSuccess: createAction(actionTypes.LOGIN_USER_SUCCESS, (payload) => {
        return payload;
    })   
}    

export const mapDispatchToProps = (dispatch) => ({
    changeEmail:(email) => dispatch(actions.emailChanged(email)),
    changePassword:(password) => dispatch(actions.passwordChanged(password)),
    authenticateUser: (email, password) => dispatch(actions.authenticateUser(email, password)),
    loginUser:() => dispatch(actions.loginUser()),
    loginUserSuccess: () => dispatch(NavigationActions.navigate({routeName :'EmployeeList'})),
    
});

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}

const reduxFormWrapper = reduxForm({
    form: 'LOGIN_FORM',
    destroyOnUnmount: false,
    enableReinitialize: true,
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormWrapper);
