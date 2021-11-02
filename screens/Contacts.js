import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

function ContactsScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    const list = [
      {
        name: 'Marcos Andrade',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '81 98855-3424'
      },
      {
        name: 'Patrícia Tavares',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '81 99876-5332'
      }
    ];

    return (
      <View>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Header 
          placement="top"
          backgroundColor='#fff'
          centerComponent={{ text: '30reis', style: styles.heading }}
          leftComponent={{ icon: 'chevron-left', color: '#129E13', onPress: () => navigation.goBack() }}
          rightComponent={{ icon: 'add', color: '#129E13', onPress: () => navigation.goBack() }}
        />

        <View>
          {list.map((l, i) => (
              <ListItem  key={i} bottomDivider >
                <Avatar source={{uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png'}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            ))
          }
        </View>
        


      </View>
    );
  };

export default ContactsScreen;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    flex: 3,
  },
  heading: {
    color: '#129E13',
    fontSize: 22,
    fontWeight: 'bold',
  },
});