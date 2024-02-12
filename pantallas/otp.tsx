import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OTP=({navigation})=>{
    const handlePress=()=>{
        navigation.navigate('Details');
        console.log('si');
    };
    const [otp, setOtp] = useState('');

    const handleOTPChange = (input) => {
      // Validar si el nuevo valor contiene solo números
      const isValid = /^[0-9]*$/.test(input);
      // Si el nuevo valor es válido y la longitud no supera el límite de 6 caracteres, actualiza el estado
      if (isValid && input.length <= 6) {
        setOtp(input);
      }
    };

    return <SafeAreaView style={styles.SafeArea}>
        <ScrollView>
            
        <View style={styles.container}>

        <Text style={styles.texto}>You only have to enter an OTP code we sent via SMS to your registered phone number +6288803210321</Text>
        <Text style={styles.texto}>OTP *</Text>
        <View style={styles.Vtext}>
            <TextInput style={styles.input} value={otp} onChangeText={handleOTPChange} keyboardType="numeric" maxLength={6}/>
            <Text style={styles.texto}>00:28</Text>
        </View>
        <View style={styles.logoV}>
            <Image style={styles.background} source={require('../imagenes/logo.png')}></Image>   
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.SIGNIN}>NEXT</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
   
    
};
const styles=StyleSheet.create({
    SafeArea:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#ffffff',

    },
    logoV:{

    },
    background:{
        width:300,
        height:300,
    },
    container: {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:50,

      },
      input: {
        height: 40,
        width: 200,
        borderColor: '#006241',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlign:'center',
        marginTop:10,
      },
      texto:{
        color:'#006241',
        fontSize:16,
        fontWeight:'400',
        marginTop:10,
      },
      Vtext:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
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
});
export default OTP;