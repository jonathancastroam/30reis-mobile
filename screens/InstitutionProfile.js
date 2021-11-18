import * as React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements';
import ReducedHeader from '../components/ReducedHeader';

function InstitutionProfileScreen() {
    //const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>
           <ScrollView vertical={true}>
        <ReducedHeader/>

        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Image 
                source={require('../assets/Ifpe_logomarca.png')} 
                onPress={() => console.log("click")}
                style={{width:360, height:144, marginBottom:30}}
            />            
            <Text style={[styles.info_name]}>
                IFPE - Campus Jaboatão0
            </Text>
        </View>

        <View style={styles.fixToText}>
            <Button
                title="Site"
                onPress={() => console.log("Works!")}
                color='#129E13'
            />
            <Button
                title="Contato"
                onPress={() => console.log("Works!")}
                color='#129E13'
            />
            <Button
                title="Como chegar"
                onPress={() => console.log("Works!")}
                color='#129E13'      
            />
            <Button
                title="+ Seguir"
                onPress={() => console.log("Works!")}
                color='#129E13'         
            />
        </View>

        
        <View style={{marginTop: 50, alignItems: 'center'}}>
            <Text> FEED DE POSTAGENS3aaa </Text>
              <View style={{ marginTop: 10, alignItems: 'center' }}>
      
        <Text></Text>
        <Text></Text>
        <Text></Text>

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
        </View>

        </ScrollView>
      </View>
    );
  }

  export default InstitutionProfileScreen;
  
  const styles = StyleSheet.create({
    info_name: {
        marginBottom: 20,
        color:'#129E13',
        fontSize: 20,
        fontWeight:'bold'
    },
    info_data:{
        marginBottom: 10,
        color:'gray',
        fontSize: 20,
        fontWeight:'100'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    options:{
        color:"#129E13",
        backgroundColor:"#129E13"
    }
  });