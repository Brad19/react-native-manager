import React, { Component } from 'react';
import { View,  Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeNew } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    
    componentWillMount() {
        const { name, phone, shift }= this.props;
        this.props.employeeNew({name, phone, shift});
    }
    onButtonPress() {
        const { name, phone, shift }= this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    render() {
        console.log('props.employee ', this.props.employee);
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>    
        );     
    };
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, employeeNew } )(EmployeeCreate);