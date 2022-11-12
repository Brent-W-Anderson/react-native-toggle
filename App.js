import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import Input from './components/input'
import DayNightToggle from './components/toggles/day_night'

const App = () => {
	const [backgroundColor, setBackgroundColor] = useState('#fff');
	const [foregroundColor, setforegroundColor] = useState('#333');

	return (
		<>
			<StatusBar style={foregroundColor === '#333' ? 'dark' : 'light'} />
			<View style={{ ...styles.container, backgroundColor: backgroundColor }}>
				<DayNightToggle
					backgroundColor={backgroundColor}
					foregroundColor={foregroundColor}
					setBackgroundColor={setBackgroundColor}
					setforegroundColor={setforegroundColor}
				/>
				<Input foregroundColor={foregroundColor} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default App;
