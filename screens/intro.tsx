import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '.././components/Globalstyles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function intro({navigation}:any) {
  function navigateToHome(){
    navigation.navigate("Home")
    
  }
  

  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.intro_header}>
        <Text style={globalStyles.title_font}>Avalie Aqui</Text>
      </View>
      <View style={globalStyles.intro_body}>
        <StatusBar style="auto" />

        

        
        
        <Text> Clique no botão abaixo para compartilhar a sua experiência sobre diversos produtos com outros!  </Text>
        
        
        <TouchableOpacity style={globalStyles.button_style} onPress={navigateToHome}>
          <Text>Avalie-me!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}