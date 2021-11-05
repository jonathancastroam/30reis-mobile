import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/Home';
import LogoBtn from './LogoBtn';

const Stack = createNativeStackNavigator();

const ReducedHeader = ({ navigation }) => {
    return (
      <View style={styles.reducedHeader}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Header 
          placement="center"
          backgroundColor='#fff'
          
          leftComponent={
            <Icon
              name='chevron-left'
              size={15}
              color='#129E13'
              style={styles.commonHeaderIcon}
              //onPress={() => navigation.goBack()}
            />}
          
          rightComponent={LogoBtn}
        />
      </View>        
    )
}

export default ReducedHeader;

const styles = StyleSheet.create({
  reducedHeader: {
    marginTop:-10
  },
  commonHeaderIcon: {
    paddingLeft:10,
    paddingTop:0
  }
});