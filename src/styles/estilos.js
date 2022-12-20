import React from "react";
import { StyleSheet,useWindowDimensions } from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-screens'





const estiloTelaInicial = StyleSheet.create({

    containerTelaInicial:{alignItems:'center',borderWidth:3, width:'100%',height:'100%',backgroundColor:'#FF4500'},
    logotipoTelaInicial:{},
    textosLogo:{fontSize:25,fontWeight:'bold',color:'black'},
    botao:{ width:'80%',height:40,backgroundColor:'black',alignItems:'center',justifyContent:'center', margin:5},
   
    testosBotao:{ color:'white', fontSize:20}

})



export  {estiloTelaInicial};

