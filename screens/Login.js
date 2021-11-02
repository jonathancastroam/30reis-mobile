import * as React from 'react';
import {useState} from 'react';
import { View, ToastAndroid  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image , Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUp';

function LoginScreen({ navigation }) {

    const Stack = createNativeStackNavigator()
    
    const [login, setLogin] = useState('a')
    const [senha, setSenha] = useState('b')

    function getLogin(){

        var sucess = false
        var logins = [['teste','12345'],['login','senha']]

        for (var i = 0; i<logins.length; i++){
            if (logins[i][0] === login && logins[i][1] === senha){           
                sucess = true
                navigation.navigate('Home')
                break
            }
        }
        if(sucess === false){
            ToastAndroid.show('Credenciais incorretas', ToastAndroid.SHORT);
        }

    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flexDirection: 'column' }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        <Image 
            source={require('../assets/30reis_b.jpg')}
            style={{ width: 222, height: 57, marginBottom: 75 }}
            onPress={() => console.log("click")}
            
        />

        <Input 
            name='login'
            placeholder=' Email'
            inputContainerStyle={{marginLeft:5, marginRight:10}}
            onChangeText={value => setLogin(value)}
            value={login}
            leftIcon={
                <Icon
                    name='user'
                    size={25}
                    color='#129E13'
                />
            }/>
        
        <Input 
            name='senha'
            placeholder=' Senha'
            inputContainerStyle={{marginLeft:5, marginRight:10}}
            onChangeText={value => setSenha(value)}
            value={senha}
            leftIcon={
                <Icon
                    name='lock'
                    size={25}
                    color='#129E13'
                />
            }/>

        <Button
            title="Login"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => getLogin()}
             />


        <Button
            title="Cadastro"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            type="clear"
            onPress={() => navigation.navigate('SignUp')} />

      </View>
    );
  }

export default LoginScreen;