import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Loading from './components/Loading';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';

const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
      />
    </Stack.Navigator>
  );
}



export default function Router() {
  const isLoading = useSelector(s => s.isAuthLoading);
  return (
    <NavigationContainer>
      {isLoading ? <Loading /> :  <NavStack />}
    </NavigationContainer>
  );
}
