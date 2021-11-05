import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './Search';
import ContactsScreen from './Contacts';
import EditProfileScreen from './EditProfile';
import InstitutionProfileScreen from './InstitutionProfile';

import Navigation from '../components/Navigation';
import CommonHeader from '../components/CommonHeader';


function HomeScreen({ navigation }) {
    
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Institution" component={InstitutionProfileScreen} />

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
        <Button
            title="Instituições"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => navigation.navigate('Institution')}
             />        
        
        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Text> --FEED DE POSTAGENS-- </Text>
        </View>

        <Navigation/>

      </View>
    );
  }

  export default HomeScreen;