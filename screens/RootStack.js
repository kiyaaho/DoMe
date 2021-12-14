import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';
import FilterScreen from './FilterScreen';
import DeleteScreen from './DeleteScreen';
import CategoryScreen from './CategoryScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filter"  
        component={FilterScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Delete"  
        component={DeleteScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;