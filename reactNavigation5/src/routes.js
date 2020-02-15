import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Check from './pages/Check';

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Check" component={Check} />
    </Stack.Navigator>
  );
}
