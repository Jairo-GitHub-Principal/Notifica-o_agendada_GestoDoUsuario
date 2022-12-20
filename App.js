//import * as React from 'react';
import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Notification } from './src/notification/Notification';




// importando as telas 

import TelaInicial from './src/telas/TelaInicial';
import TelaCupom from './src/telas/TelaCupom';
import TelaOfertas from './src/telas/TelaOfertas';
import TelaRefeicao from './src/telas/TelaRefeicao';



const notificador = Notification
const Stack = createNativeStackNavigator();

class App extends Component {

  constructor(props){
    super(props)
  }


  componentDidMount(){
    notificador.configure()
    notificador.createChannel()
    notificador.NotificationCuponDisponivel()
    notificador.NotificationScheduleOfertas()
    notificador.NotificationScheduleProximaRefeicao()
  }

  notificationPorGestoDoUsuario = () => {
    notificador.showNotification(
      1,
      "Cupom disponivel",
      "Use seu cupom para ganhar descontos",
      {}, // data
      {}, // options
     
      
    )
  }


  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }

 



  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {
            ({navigation})=>{
                notificador.setNavegador(navigation)
                return(<TelaInicial
                // passar funções que enviam e cancelam msg, como atributo para as props "qua estaão nos botões" da tela inicial
                notificationPorGestoDoUsuario = {this.notificationPorGestoDoUsuario}
                onPressCancelAllLocalNotification={this.onPressCancelAllLocalNotification}
               
                
                
                />)
            }
          }

        </Stack.Screen>

        <Stack.Screen name = "Tela1" component={TelaCupom}/>
        <Stack.Screen name = "Tela2" component={TelaRefeicao}/>
        <Stack.Screen name = "Tela3" component={TelaOfertas}/>
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
        }
}

export default App;