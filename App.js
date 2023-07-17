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
import CameraScreen from './src/screens/CameraScreen';
import DrawerScreens from './src/components/DrawerScreens';
import CustomDrawer from './src/components/CustomDrawer';
// import {store} from './src/redux/store';
import store from './src/store/store.js';
import {Provider} from 'react-redux';
import {Camera} from 'react-native-vision-camera';
import EditProfile from './src/screens/EditProfile';
import UploadImage from './src/screens/UploadImage';
import Recognize from './src/screens/Recognize';
import RecognizedPerson from './src/screens/RecognizedPerson';
import ExtraDetails from './src/screens/ExtraDetails';
import Add from './src/screens/Add';
import ExternalCamera from './src/screens/ExternalCamera';
import SplashScreen from './src/screens/SplashScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
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
          {/* <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
            options={{headerShown: false}}
          /> */}
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
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomDrawer"
            component={CustomDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UploadImage"
            component={UploadImage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Recognize"
            component={Recognize}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RecognizedPerson"
            component={RecognizedPerson}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExtraDetails"
            component={ExtraDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="ExternalCamera"
            component={ExternalCamera}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
