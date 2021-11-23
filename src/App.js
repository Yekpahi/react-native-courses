import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Drawer = createDrawerNavigator();

const App = () => {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
    <Drawer.Navigator
    initialRouteName="Screen_A"
    drawerPosition='left'
    drawerType="front"
    edgeWidth={50}
    hideStatusBar={false}
    overlayColor='#00000090'
    drawerStyle={{
      backgroundColor: 'red',
      width: 150
    }}
    screenOptions={{
      headerShown: false,
      swipeEnabled: true,
      gestureEnabled: true,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0080ff'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold'
      }
    }}
    >
      <Drawer.Screen name="Screen_A" component={ScreenA} />
      <Drawer.Screen name="Screen_B" component={ScreenB} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;