import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '~/pages/Main'

const Tab = createStackNavigator()

export default function MainRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
      />
    </Tab.Navigator>
  )
}
