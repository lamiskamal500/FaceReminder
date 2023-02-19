import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import HomePage from '../screens/HomePage';
import CustomDrawer from '../components/CustomDrawer'
import StaticProfile from '../screens/StaticProfile';
import EditProfile from '../screens/EditProfile';

const Drawer = createDrawerNavigator();
const DrawerScreens = ()=>{
    return(
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer/>} screenOptions={{
            drawerStyle: {
              width: 240,
            },
          }}>
        <Drawer.Screen name="HomePage" component={HomePage} 
        options={{headerShown:false}}/>
        <Drawer.Screen name="StaticProfile" component={StaticProfile} 
        options={{headerShown:false}} />
        <Drawer.Screen name="Login" component={Login} 
        options={{headerShown:false}}/>
        <Drawer.Screen name="EditProfile" component={EditProfile} 
        options={{headerShown:false}}/>


      </Drawer.Navigator>
    )
}
export default DrawerScreens;