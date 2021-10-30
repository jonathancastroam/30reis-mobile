import * as React from 'react';
import { View } from 'react-native';
import { Input, Header, Text, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

function SignUpScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'  }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Header
          placement="top"
          backgroundColor='#fff'
          leftComponent={{ icon: 'chevron-left', color: '#129E13', onPress: () => navigation.goBack() }}
        />

        <Text 
          style={{fontSize:20, color:'#129E13', fontWeight:"bold", paddingTop: 100}}
          >
          Criar conta
        </Text>

        <Input
            name='nome'
            placeholder='Nome'
            inputStyle={{paddingTop:75}}
            />
        <Input
            name='cpf'
            placeholder='CPF'
            />
        <Input
            name='email'
            placeholder='Email'
            />
        <Input
            name='senha'
            placeholder='Senha'
            />

        <Button
          title="Salvar"
          titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
          buttonStyle={{paddingBottom:10, paddingTop:10}}
          type="clear"
          onPress={() => navigation.navigate('Home')}
        />

      </View>
    );
  }

  export default SignUpScreen;