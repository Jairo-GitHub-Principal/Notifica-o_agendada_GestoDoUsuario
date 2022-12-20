import React,{Component} from 'react';

//import Icon from 'react-native-vector-icons/FontAwesome';
import Matirial from 'react-native-vector-icons/MaterialIcons';


import { Text,TouchableOpacity,View} from 'react-native';

import { estiloTelaInicial } from '../styles/estilos';














//export const icone = <Icon  name="rocket" size={50} color="black" margin="10"/>
export const matirial = <Matirial  name="delivery-dining" size={70} color="black" margin="10"/>





export default class TelaInicial extends Component {
 
 render(){

return (
  <View style={estiloTelaInicial.containerTelaInicial} >

    <View style={{flex:2,marginTop:100,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={estiloTelaInicial.textosLogo}>FlashDelivery</Text> 
      {matirial}
    </View>

    <View style={{width:'100%',alignItems:'center',flex:3}} >
    
    <TouchableOpacity  onPress={this.props.notificationPorGestoDoUsuario}
      style={estiloTelaInicial.botao}>
      <Text style={estiloTelaInicial.testosBotao}>   Testar notificação  </Text>
    </TouchableOpacity>

    <TouchableOpacity  onPress={this.props.onPressCancelAllLocalNotification}
      style={estiloTelaInicial.botao}>
      <Text style={estiloTelaInicial.testosBotao}>   Cancelar notificação  </Text>
    </TouchableOpacity>

    


   
    </View>

    
  </View>
)
 }
}