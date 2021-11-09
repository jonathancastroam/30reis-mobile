import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, BottomSheet, ListItem, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/Home';
import EditProfileScreen from '../screens/EditProfile';


function CommonHeader() {
    
    const Stack = createNativeStackNavigator();
    var navigation = useNavigation();    
    const [isVisible, setIsVisible] = useState(false);

    function goEdit(){
      setIsVisible(false);
      navigation.navigate('EditProfile');

    }

    const list = [
      { title: 'Editar perfil',
        containerStyle: { backgroundColor: '#fff' },
        titleStyle: { color: '#129E13' },
        onPress: () => goEdit()
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

        <Header 
          placement="center"
          backgroundColor='#fff'
          leftComponent={
            <Icon
              name='user-circle'
              size={40}
              color='#129E13'
              style={styles.commonHeaderIcon}
              onPress={() => setIsVisible(true)}
            />
          }

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
    paddingTop:0
  }
});