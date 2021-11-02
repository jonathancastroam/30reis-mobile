import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button} from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';
import EditProfileScreen from './EditProfile';

function HomeScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />

        <Header 
          placement="top"
          backgroundColor='#fff'
          centerComponent={{ text: '30reis', style: styles.heading }}
          leftComponent={{
            icon: 'menu',
            color: '#129E13',
            size: 30,
            styles: styles.headerLeft
          }}
        />

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
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
});