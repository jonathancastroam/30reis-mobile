import React from 'react';
import {useState} from 'react';
import { View, ToastAndroid, StyleSheet  } from 'react-native';
import { Button, Image , Input, Text } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlainHeader from '../components/PlainHeader';
import HomeScreen from './Home';
import SignUpScreen from './SignUp';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
    
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    function getLogin(){

        var sucess = false
        var logins = [['teste','12345'],['login','senha'],['','']]

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
        
        <Stack.Screen name= "Home"   component={HomeScreen} />
        <Stack.Screen name= "SignUp" component={SignUpScreen} />
        
        <PlainHeader/>

        <View style={styles.logo}>
            <Image 
                source={require('../assets/30reis_b.jpg')}
                style={{ width: 222, height: 57, marginBottom: 75 }}
                onPress={() => console.log("click")}
                
            />
        </View>    

        <View style={styles.credentials}>
            <Input 
                name='login'
                placeholder=' Email'
                inputContainerStyle={styles.input_container}
                onChangeText={value => setLogin(value)}
                value={login}
                leftIcon={
                    <Icon
                        name='user'
                        size={25}
                        color='#129E13'    />
                }
            />
            
            <Input 
                name='senha'
                placeholder=' Senha'
                inputContainerStyle={styles.input_container}
                onChangeText={value => setSenha(value)}
                value={senha}
                leftIcon={
                    <Icon
                        name='lock'
                        size={25}
                        color='#129E13'    />
                }
            />

            <Text 
                style={{color:'#129E13', fontSize:14, fontWeight:'normal', alignSelf:'flex-start', paddingLeft:10, marginTop:-15}}
                onPress={()=>ToastAndroid.show('A ser implementado', ToastAndroid.SHORT)}>
                Recuperar senha
            </Text>
        </View> 

        <View style={styles.buttons}>
            <Button
                title="Entrar"
                titleStyle={styles.button_text}
                buttonStyle={styles.button_layout}
                type="solid"
                onPress={() => getLogin()}
                />
            <Button
                title="Criar conta"
                titleStyle={styles.button_text}
                buttonStyle={styles.button_layout}
                type="clear"
                onPress={() => navigation.navigate('SignUp')}
                />

        </View>

      </View>
    )
  }

export default LoginScreen;

const styles = StyleSheet.create({
    logo: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        width:350
    },
    credentials: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        width:350
    },
    buttons: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        width:350
    },
    button_layout:{
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:'#129E13',
        marginTop: 10
    },
    button_text:{
        color:'#fff',
        fontSize:18,
        fontWeight:'100'
    },
    input_container:{
        marginLeft:0,
        marginRight:5,
        marginBottom:-5
    }
  });