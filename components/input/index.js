import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import Styles from './styles';

const Input = (props) => {
    const [inputText, setinputText] = React.useState('Hello World!');

    return (
        <View style={{ ...Styles.input, borderColor: props.foregroundColor }}>
            <TextInput
                style={{
                    ...Styles.inputText,
                    cursorColor: props.foregroundColor,
                    color: props.foregroundColor
                }}
                defaultValue={inputText}
            />
        </View>
    );
}

export default Input
