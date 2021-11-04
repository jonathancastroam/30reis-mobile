import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';
import EditProfileScreen from './EditProfile';
import SearchScreen from './Search';
import CommonHeader from '../components/CommonHeader';

function HomeScreen({ navigation }) {
    
    const Stack = createNativeStackNavigator();
    


    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />

        <CommonHeader/>

        <Button
            title="Amigos"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => navigation.navigate('Contacts')}
             />

        <Button
            title="Editar perfil"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => navigation.navigate('EditProfile')}
             />

        <Button
            title="Pesquisar"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => navigation.navigate('Search')}
             />
      </View>
    );
  }

  export default HomeScreen;

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