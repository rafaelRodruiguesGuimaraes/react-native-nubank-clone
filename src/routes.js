import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Main from './pages/Main';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}

export default Routes;
