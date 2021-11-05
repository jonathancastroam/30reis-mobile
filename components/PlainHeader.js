import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const PlainHeader = () => {
    return (
      <View style={styles.plainHeader}>
        <Header 
          placement="center"
          backgroundColor='#fff'
        />
      </View>        
    )
}

export default PlainHeader;

const styles = StyleSheet.create({
  plainHeader: {
    marginTop:-10
  }
});