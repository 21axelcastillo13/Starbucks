import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login=({navigation})=>{
    const handlePress=()=>{
        navigation.navigate('OTP');
    };


    return <SafeAreaView style={styles.SafeArea}>
        <ScrollView>
            <View style={styles.container}>

                <Image style={styles.logo} source={require('../imagenes/logo.png')}></Image>
                <Text style={styles.name}>STARBUCKS</Text>
                <View style={styles.containerLog}>
                    <Text style={styles.checkText}>Log in whit Email</Text>
                    <TextInput style={styles.textDatos} placeholder="email"></TextInput>
                    <TextInput style={styles.textDatos} placeholder="password"></TextInput>
                    
                    <View style={styles.check}>
                        <Text style={styles.checkText}>Show password</Text>
                        <Text style={styles.checkText}>Forgot?</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.SIGNIN}>SIGN IN</Text>
                </TouchableOpacity>
                <Image style={styles.wave} source={require('../imagenes/wave.png')}></Image>
            </View>


              
                
              
        </ScrollView>
    </SafeAreaView>
};
const styles=StyleSheet.create({
    SafeArea:{
        margin:0,
        padding:0,
        backgroundColor: '#ffffff',
        height:'100%',
        width:'100%',
    },
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    logo:{
        width:150,
        height:150,
    },
    name:{
        fontWeight:'bold',
        color:'#000000',
        marginTop:-20,
        fontSize:18,
    },
    containerLog:{
       width:'85%',
       display:'flex',
       flexDirection:'column',
       alignItems:'flex-start',
       padding:20,
    },
    textDatos:{
        backgroundColor:'#ffff',
        width:'100%',
        height:50,
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#006241',
        color:'#565656',
        marginTop:10,
        fontSize:16,
    },
    check:{
        width:'100%',
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    checkText:{
        color:'#006241',
        fontSize:16,
        fontWeight:'bold',
    },
    button:{
        width:'75%',
        height:50,
        backgroundColor:'#006241',
        borderRadius:30,
        display:'flex',
        justifyContent:'center',
    },
    SIGNIN:{
        color:'#ffffff',
        width:'100%',
        textAlign:'center',
        fontSize:18,
    },
    wave:{
        marginTop:'20%',
    }

});
export default Login;