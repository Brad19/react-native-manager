import React from 'react';
import { View, TextInput, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoFocus }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label }</Text>
            <TextInput
             secureTextEntry={secureTextEntry} 
             autoCorrect={false}
             placeholder={placeholder}
             style={inputStyle}
             value={value}
             onChangeText = {onChangeText}
             autoFocus = {autoFocus}
             />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex:2
    },
    labelStyle:{
        fontSize:18,
        paddingLeft: 20,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };