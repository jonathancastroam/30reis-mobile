import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, BottomSheet, ListItem, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/Home';
import EditProfileScreen from '../screens/EditProfile';
import ContactsScreen from '../screens/Contacts';
import SearchScreen from '../screens/Search';
import InstitutionProfileScreen from '../screens/InstitutionProfile';


function CommonHeader() {
    
    const Stack = createNativeStackNavigator();
    var navigation = useNavigation();    
    const [isVisible, setIsVisible] = useState(false);

    function goEdit(){
      setIsVisible(false);
      navigation.navigate('EditProfile');

    }

    function goContacts(){
      setIsVisible(false);
      navigation.navigate('Contacts');

    }

    function goInstitution(){
      setIsVisible(false);
      navigation.navigate('Institution');

    }

    function goSearch(){
      setIsVisible(false);
      navigation.navigate('Search');

    }

    const list = [
      { title: 'Editar perfil',
        containerStyle: { backgroundColor: '#fff' },
        titleStyle: { color: '#129E13' },
        onPress: () => goEdit()
      },
      { title: 'Contatos',
        containerStyle: { backgroundColor: '#fff' },
        titleStyle: { color: '#129E13' },
        onPress: () => goContacts()
      },
      { title: 'Instituições',
        containerStyle: { backgroundColor: '#fff' },
        titleStyle: { color: '#129E13' },
        onPress: () => goInstitution()
      },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: '#fff' },
        onPress: () => setIsVisible(false),
      }
    ];


    return (
      <View style={{marginTop:-10}}>
        
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Institution" component={InstitutionProfileScreen} />

        <Header 
          placement="center"
          backgroundColor='#fff'
          leftComponent={
            <Icon
              name='user-circle'
              size={30}
              color='#129E13'
              style={styles.commonHeaderIcon}
              onPress={() => setIsVisible(true)}
            />
          }
          centerComponent={
            <Button
                title="30reis"
                titleStyle={{color:'#129E13',fontSize:20, fontWeight:'bold'}}
                buttonStyle={{paddingBottom:10, paddingTop:-5}}
                type="clear"
                containerStyle={{size:10}}
                onPress={() => navigation.navigate("Home")}
            />
          }
          rightComponent={
            <Icon
              name='search'
              size={25}
              color='#129E13'
              style={styles.commonHeaderIcon}
              onPress={() => goSearch()}
            />
          }
        />
        <BottomSheet
          isVisible={isVisible}
          containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
          >
          
          {list.map((l, i) => (
            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        
        </BottomSheet>
      </View>        
    )
}

export default CommonHeader;

const styles = StyleSheet.create({
  commonHeaderIcon: {
    paddingLeft:15,
    paddingTop:0,
    paddingRight:15
  }
});