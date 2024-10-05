import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

const usePasswordToggle = (initialState = false) => {
    const [show, setShow] = useState(initialState);
    const toggle = useCallback(() => setShow(prev => !prev), []);
    return { show, toggle };
};

/**
 * A password input component with a visibility toggle.
 * @param {Object} props - The component props.
 * @param {boolean} [props.show=false] - Initial visibility state of the password.
 * @param {Object} [props.inputStyle] - Custom styles for the TextInput.
 * @param {Object} [props.iconStyle] - Custom styles for the toggle icon.
 */

const PasswordToggler = ({ show: initialShow, inputStyle, iconStyle, ...restProps }) => {

    const { show, toggle } = usePasswordToggle(initialShow);

    const iconName = useMemo(() => show ? 'eye-with-line' : 'eye', [show]);


    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.inputStyle, props.inputStyle]}
                secureTextEntry={show}
            />
            <View style={styles.toggleStyle}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.togglerBtn}
                    accessibilityRole="button"
                    accessibilityLabel={show ? "Show password" : "Hide password"}
                    onPress={() => toggle}>
                    <Icon name={iconName} style={[styles.toggleEye, props.iconStyle]} />
                </TouchableOpacity>
            </View>
        </View>
    )

}

import { COLORS, SIZES } from '../utils/styles/styles';


const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    inputStyle: {
        width: '100%',
        borderColor: COLORS.border,
        borderWidth: 1,
        backgroundColor: COLORS.background
    },
    toggleStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    togglerBtn: {
        padding: SIZES.padding,
    },
    toggleEye: {
        fontSize: SIZES.icon,
    }
})

PasswordToggler.defaultProps = {
    show: false,
}
const customStyle = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
])
PasswordToggler.propTypes = {
    ...TextInput.propTypes,
    show: PropTypes.bool,
    iconStyle: customStyle,
    inputStyle: customStyle,
};

export default PasswordToggler;