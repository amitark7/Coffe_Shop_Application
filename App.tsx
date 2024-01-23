import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screen } from 'react-native-screens'
import DetailsScreen from './src/screens/DetailsScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import TabNavigator from './src/navigator/TabNavigator'

const Stack=createNativeStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
      name='Tab'
      component={TabNavigator}
      options={{animation:'slide_from_bottom'}}
      />
      <Stack.Screen
      name='Details'
      component={DetailsScreen}
      options={{animation:'slide_from_bottom'}}
      />

      <Stack.Screen
      name='Payment'
      component={PaymentScreen}
      options={{animation:'slide_from_bottom'}}
      />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})