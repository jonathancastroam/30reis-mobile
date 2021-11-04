import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

const ReducedHeader = () => {
    return (
      <View style={{marginTop:-10}}>
        <Header 
          placement="center"
          backgroundColor='#fff'
        />
      </View>        
    )
}

export default ReducedHeader;