import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Avatar, Accessory } from 'react-native-elements'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CommonHeader from '../components/CommonHeader'

function EditProfileScreen({ navigation }) {
   // const Stack = createNativeStackNavigator()

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>

        <CommonHeader/>

        <View style={{marginTop: 50}}>
            <Avatar
                rounded
                size="large"
                overlayContainerStyle={{backgroundColor: 'lightblue'}}
                onPress={() => console.log("Works!")}
                activeOpacity={1.0}
                containerStyle={{flex: 0, marginBottom: 10}}
                
            ><Accessory onPress={() => console.log("Works!")}/></Avatar>
        </View>

        <Input
            name='nome'
            placeholder='Primeiro nome'
            inputStyle={{marginTop:50}}
            />
        <Input
            name='Sobrenome'
            placeholder='Sobreonome'
            />
        <Input
            name='cpf'
            placeholder='CPF'
            />
        <Input
            name='dataNasc'
            placeholder='Data de nascimento'
            />
        <Input
            name='email'
            placeholder='E-mail'
            />
        <Input
            name='telefone'
            placeholder='Telefone'
            />

        <View style={{marginTop: 50}}>
        <Button
            title="Salvar"
            titleStyle={{color:'#129E13',fontSize:18, fontWeight:'bold'}}
            type="clear"
            onPress={() => navigation.goBack()} />
        </View>

      </View>
    )
  }

  export default EditProfileScreen;
  
  const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: '#129E13',
      fontSize: 22,
      fontWeight: 'bold',
    },
  })