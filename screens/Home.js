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
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Institution" component={InstitutionProfileScreen} />

        <CommonHeader />

        <Button
          title="Amigos"
          titleStyle={{ color: '#129E13', fontSize: 18, fontWeight: 'bold' }}
          buttonStyle={{ paddingBottom: 10, paddingTop: 10 }}
          type="clear"
          onPress={() => navigation.navigate('Contacts')}
        />

        <Button
          title="Pesquisar"
          titleStyle={{ color: '#129E13', fontSize: 18, fontWeight: 'bold' }}
          buttonStyle={{ paddingBottom: 10, paddingTop: 10 }}
          type="clear"
          onPress={() => navigation.navigate('Search')}
        />
        <Button
          title="Instituições"
          titleStyle={{ color: '#129E13', fontSize: 18, fontWeight: 'bold' }}
          buttonStyle={{ paddingBottom: 10, paddingTop: 10 }}
          type="clear"
          onPress={() => navigation.navigate('Institution')}
        />

        <View style={{ marginTop: 100, alignItems: 'center' }}>
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


          <Text>
            --FEED DE POSTAGENS-- </Text>
          <Text>
            ------------------------------------------ </Text>
        </View>
      </ScrollView>
    </View>
  );






}

export default HomeScreen;