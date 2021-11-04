import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Accessory, Text } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import CommonHeader from '../components/CommonHeader'

function ContactProfileScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>
        
        <Stack.Screen name="Home" component={HomeScreen} />

        <CommonHeader/>

        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Avatar
                rounded
                size="xlarge"
                icon={{name: 'user', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'lightblue'}}
                onPress={() => console.log("Works!")}
                activeOpacity={1.0}
                containerStyle={{flex: 0, marginBottom: 10}}
                
            ><Accessory onPress={() => console.log("Works!")}/></Avatar>
            
            <Text style={[styles.info_name]}>
                Marcelo Andrade
            </Text>
        </View>


        <View style={{marginTop: 25, alignItems: 'flex-start', paddingLeft:15}} >

            <Text style={[styles.info_data]}>
                01/02/03
            </Text>
            
            <Text style={[styles.info_data]}>
                marceloand@gmail.com
            </Text>

            <Text style={[styles.info_data]}>
                81 98855-3424
            </Text>
        </View>
        
        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Text> POSTAGENS </Text>
        </View>
      </View>
    );
  }

  export default ContactProfileScreen;
  
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
    }
  });