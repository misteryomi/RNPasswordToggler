import React, { Component, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';


const PasswordToggler = (props) => {

        const [show, setShow] = useState(props.show);

        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.inputStyle} 
                secureTextEntry={show} 
                {...props}
                />              
                <View style={styles.toggleStyle}>
                <TouchableOpacity activeOpacity={0.7} style={styles.togglerBtn} onPress={() => setShow(!show)}>
                    <Icon name={ show ? 'eye-with-line' : 'eye'} style={[styles.toggleEye, props.iconStyle]} />
                </TouchableOpacity>
                </View>
            </View>    
        )

}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    inputStyle: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 1
    },
    toggleStyle: {
        position: 'absolute', 
        right: 0, 
        top: 0,
    },
    togglerBtn: {
        padding: 15,
    },
    toggleEye: {
        fontSize: 20,
    }
})

PasswordToggler.defaultProps = {
    show: false,
}

PasswordToggler.propTypes = {
    ...TextInput.propTypes,
    show: PropTypes.bool,
    iconStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
      ])
};

export default PasswordToggler;