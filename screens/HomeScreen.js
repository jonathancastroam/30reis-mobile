import * as React from 'react';
import { View } from 'react-native';
import { Header, Text} from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function HomeScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          backgroundColor='#fff'
        />

        <Text h1>
          Em construção
        </Text>

      </View>
    );
  }

  export default HomeScreen;