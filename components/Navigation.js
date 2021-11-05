import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ContactsScreen from '../screens/Contacts';
import SearchScreen from '../screens/Search';
import InstitutionProfileScreen from '../screens/InstitutionProfile';

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
        initialRouteName="Contacts"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Institution"
        component={InstitutionProfileScreen}
        options={{
            tabBarLabel: 'Institution',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }}
        />
    </Tab.Navigator>
  );
}

export default Navigation;