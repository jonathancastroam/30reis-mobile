import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text, Image } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommonHeader from '../components/CommonHeader';
import SearchScreen from './Search';
import ContactsScreen from './Contacts';
import EditProfileScreen from './EditProfile';
import InstitutionProfileScreen from './InstitutionProfile';

function HomeScreen({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <ScrollView vertical={true}>

        <CommonHeader />

        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text>
            ------------------------------------------ </Text>
          <Text style={{ marginLeft: -98, marginTop: -40 }}>IFPE abre concursos</Text>
          <Image source={require('../assets/feed/ifpe.jpg')}
            style={{ width: 222, height: 150, marginBottom: 75 }} />

          <Text style={{ marginLeft: -30, marginTop: -40 }}>Palestra de Gestão de Qualidade</Text>
          <Image source={require('../assets/feed/palestra.jpg')}
            style={{ width: 222, height: 150, marginBottom: 75 }} />

          <Text style={{ marginLeft: -30, marginTop: -40 }}>IFPE divulga calendário letivo.</Text>
          <Image source={require('../assets/feed/ifpe2.jpg')}
            style={{ width: 222, height: 150, marginBottom: 75 }} />

          <Text style={{ marginLeft: -98, marginTop: -40 }}>Turma ganha prêmio</Text>
          <Image source={require('../assets/feed/02.jpg')}
            style={{ width: 222, height: 150, marginBottom: 75 }} />

        </View>
      </ScrollView>
    </View>
  );






}

export default HomeScreen;