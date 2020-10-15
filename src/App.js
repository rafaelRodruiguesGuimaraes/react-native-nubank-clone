import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => (
    <>
        <StatusBar backgroundColor="#8b10ae" />
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </>
);
export default App;
