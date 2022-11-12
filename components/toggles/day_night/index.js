import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

import Styles from './styles';

const Toggle = (props) => {
    const [mode, setMode] = React.useState(false);

    const switchToggle = () => {
        // night mode
        if (mode) {
            props.setBackgroundColor('#fff');
            props.setforegroundColor('#333');
        }
        // day mode
        else {
            props.setBackgroundColor('#333');
            props.setforegroundColor('#fff');
        }

        // toggle
        setMode(!mode);
    }

    return (
        <View style={Styles.flex}>
            <Text style={{
                color: props.foregroundColor
            }}>{mode ? 'Night Mode' : 'Day Mode'}</Text>

            <Switch
                value={mode}
                onValueChange={switchToggle}
            />
        </View>
    );
}

export default Toggle
