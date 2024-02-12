import { NavigationContainer, useRoute } from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  { MyDrawer } from '../pantallas/Drawer/DraweScreen';

const Inicio=({navigation,route})=>{
    
 const params=route.params;
 const{name}=route.params || {};
console.log(name);
    return <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textBienvenida}>Good Morning.</Text>
            <View style={styles.ContainerBienvenida}>
            <Text style={styles.name}>{name}</Text>
                <Image style={styles.perfil} source={require('../imagenes/yo.jpg')}></Image>
            </View>
            <View style={styles.card}>
                <Image style={styles.cardimg} source={require('../imagenes/card.png')}></Image>
            </View>
            
        </View>
    </ScrollView>
 </SafeAreaView>
 
};
const styles=StyleSheet.create({
    SafeArea:{
        width:'100%',
        height:'100%',
        backgroundColor: '#006241',

    },
    container:{
        display:'flex',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
    },
    ContainerBienvenida:{
        
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent:'space-between',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:0,
        paddingBottom:20,
    },
    name:{
        color:'#ffffff',
        fontSize:28,
        fontWeight:'600',
    },
    textBienvenida:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'600',
        backgroundColor:'#006241',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:30,
    },
    perfil:{
        width:60,
        height:60,
        borderRadius:50,
        borderWidth:1,
    },
    card:{
        backgroundColor:'#006241',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:30,
    },
    cardimg:{
        borderRadius:20,
    }

});
export default Inicio;