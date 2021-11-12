import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import ReducedHeader from '../components/ReducedHeader';

function SignUpScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'  }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <ReducedHeader/>

        <Text 
          style={{fontSize:20, color:'#129E13', fontWeight:"bold", paddingTop: 100}}  >
          Criar conta
        </Text>

        <Input
            name='nome'
            placeholder='Primeiro nome'
            inputStyle={{paddingTop:75}}
            />
        <Input
            name='sobrenome'
            placeholder='Sobreonome'
            />
        <Input
            name='email'
            placeholder='Email'
            />
        <Input
            name='senha1'
            placeholder='Senha'
            />
        <Input
            name='senha2'
            placeholder='Confirmar senha'
            />

        <Button
          title="Salvar"
          titleStyle={styles.button_text}
          buttonStyle={styles.button_layout}
          type="clear"
          onPress={() => navigation.navigate('Home')}
        />

      </View>
    );
  }

  export default SignUpScreen;

  const styles = StyleSheet.create({
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
  }
  });