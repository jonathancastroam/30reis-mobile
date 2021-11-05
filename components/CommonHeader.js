import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, BottomSheet, ListItem } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import LogoBtn from './LogoBtn';
import EditProfileScreen from '../screens/EditProfile';

const CommonHeader = ({navigation}) => {
    
    const Stack = createNativeStackNavigator();

    const [isVisible, setIsVisible] = useState(false);

    const list = [
      { title: 'Editar perfil',
        onPress: () => navigation.navigate('EditProfile')
      },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];


    return (
      <View style={{marginTop:-10}}>
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

          rightComponent={LogoBtn}
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