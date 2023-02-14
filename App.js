import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';
import CreateNewPassword from './src/screens/CreateNewPassword';
import HomePage from './src/screens/HomePage';
import StaticProfile from './src/screens/StaticProfile';
import DrawerScreens from './src/components/DrawerScreens';
import CustomDrawer from './src/components/CustomDrawer';
// import {store} from './src/redux/store';
import store from './src/store/store.js';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={DrawerScreens}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StaticProfile"
            component={StaticProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomDrawer"
            component={CustomDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
