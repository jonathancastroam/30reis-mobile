import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';



const LogoBtn = () => {
    //const Stack = createNativeStackNavigator()
    //<Stack.Screen name="Home" component={HomeScreen} />
    return (       
        
            <Button
                title="30reis"
                titleStyle={{color:'#129E13',fontSize:20, fontWeight:'bold'}}
                buttonStyle={{paddingBottom:10, paddingTop:-5}}
                type="clear"
                containerStyle={{size:10}}
                //onPress={() => navigation.navigate("Home")}
            />

    )
};

export default LogoBtn;