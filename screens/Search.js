import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactProfileScreen from './ContactProfile';
import CommonHeader from '../components/CommonHeader'

function SearchScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    const [search, setSearch] = useState('')

    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>
        
        <Stack.Screen name="ContactProfile" component={ContactProfileScreen} />

        <CommonHeader/>

        <SearchBar
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
        />

      </View>
    );
  }

  export default SearchScreen;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: '#129E13',
    fontSize: 22,
    fontWeight: 'bold',
    //alignSelf: 'center'
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
});