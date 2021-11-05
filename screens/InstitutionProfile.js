import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReducedHeader from '../components/ReducedHeader';

function InstitutionProfileScreen() {
    //const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>

        <ReducedHeader/>

        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Image 
                source={require('../assets/Ifpe_logomarca.png')} 
                onPress={() => console.log("click")}
                style={{width:360, height:144, marginBottom:30}}
            />            
            <Text style={[styles.info_name]}>
                IFPE - Campus Jaboatão
            </Text>
        </View>

        <View style={styles.fixToText}>
            <Button
                title="Site"
                onPress={() => console.log("Works!")}
                color='#129E13'
            />
            <Button
                title="Contato"
                onPress={() => console.log("Works!")}
                color='#129E13'
            />
            <Button
                title="Como chegar"
                onPress={() => console.log("Works!")}
                color='#129E13'      
            />
            <Button
                title="+ Seguir"
                onPress={() => console.log("Works!")}
                color='#129E13'         
            />
        </View>

        
        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Text> --POSTAGENS-- </Text>
        </View>
      </View>
    );
  }

  export default InstitutionProfileScreen;
  
  const styles = StyleSheet.create({
    info_name: {
        marginBottom: 20,
        color:'#129E13',
        fontSize: 20,
        fontWeight:'bold'
    },
    info_data:{
        marginBottom: 10,
        color:'gray',
        fontSize: 20,
        fontWeight:'100'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    options:{
        color:"#129E13",
        backgroundColor:"#129E13"
    }
  });