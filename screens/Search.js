import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReducedHeader from '../components/ReducedHeader';
import HomeScreen from './Home';

function SearchScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    const [search, setSearch] = useState('')

    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>
        
        <Stack.Screen name="Home" component={HomeScreen} />

        <ReducedHeader/>

        <SearchBar
            placeholder="Pesquisar"
            onChangeText={setSearch}
            value={search}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInput}
        />

      </View>
    );
  }

  export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor:'#fff',
    borderBottomColor:'#fff',
    borderTopColor:'#fff'
  },
  searchInput: {
    backgroundColor:'#fff'
  }
});