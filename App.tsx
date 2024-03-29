/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/Home'
import AddEmployeeScreen from './src/screens/AddEmployee';

const Stack = createNativeStackNavigator();

const App = () => {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true)
    }, 2000)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!flag ? <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> : <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddEmployee" component={AddEmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}


export default App;
