// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from './components/DrawerMenu';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Register from './screens/Register';
import School from './screens/School';
import Police from './screens/Police';
import Teacher from './screens/Teacher';
import { View, StyleSheet, Button ,Text} from 'react-native';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Register School" component={School} />
        <Drawer.Screen name="Register teacher" component={Teacher} />
        <Drawer.Screen name="Register Police" component={Police} />
        <Drawer.Screen name="Register Student" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
