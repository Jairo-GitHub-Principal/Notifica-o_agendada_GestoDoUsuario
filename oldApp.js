import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import Matirial from 'react-native-vector-icons/MaterialIcons';
import { Notification } from './src/notification/Notification';


import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
  
} from 'react-native';

import { estiloTelaInicial } from './src/styles/estilos';


//export const icone = <Icon  name="rocket" size={50} color="black" margin="10"/>
export const matirial = <Matirial  name="delivery-dining" size={70} color="black" margin="10"/>
 








 



export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.localNotify = null;
      }
  
      
      componentDidMount() {
        this.localNotify = Notification
        this.localNotify.createChannel()
        this.localNotify.configure()
        this.localNotify.NorificationCuponDisponivel()
        this.localNotify.NotificationScheduleProximaRefeicao()
        this.localNotify.NotificationScheduleOfertas()
        
      
        
  
      }
  
     

      notificationPorGestoDoUsuario = () => {
        this.localNotify.showNotification(
          1,
          "Cupom disponivel",
          "Use seu cupom para ganhar descontos",
          {}, // data
          {}, // options
          "ticker"
        )
      }
  
  
      onPressCancelAllLocalNotification = () => {
        this.localNotify.cancelAllLocalNotification()
      }

      onPressClearAllNotification = () => {
        this.localNotify.clearAllNotificationLocal()
      }


     
   render(){

   

 
 
  return (
    <View style={estiloTelaInicial.containerTelaInicial} >

      <View style={{flex:2,marginTop:100,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style={estiloTelaInicial.textosLogo}>FlashDelivery</Text> 
        {matirial}
      </View>

      <View style={{width:'100%',alignItems:'center',flex:3}} >
      
      <TouchableOpacity  onPress={this.notificationPorGestoDoUsuario}
        style={estiloTelaInicial.botao}>
        <Text style={estiloTelaInicial.testosBotao}>   Testar notificação  </Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={this.onPressCancelAllLocalNotification}
        style={estiloTelaInicial.botao}>
        <Text style={estiloTelaInicial.testosBotao}>   Cancelar notificação  </Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={this.onPressClearAllNotification}
        style={estiloTelaInicial.botao}>
        <Text style={estiloTelaInicial.testosBotao}>   Limpar notificações  </Text>
      </TouchableOpacity>


     
      </View>

      
    </View>
  )
   }
}
