import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainRoutes from '~/routes/main.routes'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Main" component={MainRoutes} />
    </Stack.Navigator>
  )
}
