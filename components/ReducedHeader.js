import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/Home';


function ReducedHeader() {
  const Stack = createNativeStackNavigator();
  var navigation = useNavigation();

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
              onPress={() => navigation.goBack()}
            />}
          
          rightComponent={
            <Button
                title="30reis"
                titleStyle={{color:'#129E13',fontSize:20, fontWeight:'bold'}}
                buttonStyle={{paddingBottom:10, paddingTop:-5}}
                type="clear"
                containerStyle={{size:10}}
                onPress={() => navigation.navigate("Home")}
            />
          }
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