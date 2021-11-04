import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import LogoBtn from './LogoBtn';

const CommonHeader = () => {
    return (
      <View style={{marginTop:-10}}>
        <Header 
          placement="center"
          backgroundColor='#fff'
          leftComponent={
            <Icon
              name='user-circle'
              size={40}
              color='#129E13'
              style={{paddingLeft:15, paddingTop:5}}
            />
          }

          centerComponent={LogoBtn}
        />
      </View>        
    )
}

export default CommonHeader;