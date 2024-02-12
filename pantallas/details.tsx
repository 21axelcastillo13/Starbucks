import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Details=({navigation})=>{
  const[name,setname]=useState('');

  const handlePress = () => {
    navigation.navigate('Inicio',{
      name,
    });
  };
    return <SafeAreaView style={styles.SafeArea}>
        <ScrollView>
            <View style={styles.container}>
               <Text style={styles.titulos}>Please fill in a few details below</Text>
               <View style={styles.textContainer}>
                    <Text style={styles.titulos}>Full name</Text>
                    <TextInput style={styles.textbox} placeholder=''  onChangeText={text =>setname(text)}></TextInput>
                    <Text style={styles.titulos}>Email</Text>
                    <TextInput style={styles.textbox} placeholder='name@email.com'></TextInput>
                    <Text style={styles.titulos}>Phone number</Text>
                    <TextInput style={styles.textbox} placeholder='+504'></TextInput>
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
        backgroundColor:'#ffffff',
        height:'100%',
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
      textContainer:{
        width:'100%',
        backgroundColor:'#ffffff',
        paddingTop:20,
        paddingBottom:20,
      },
      textbox:{
        borderBottomWidth:2,
        borderColor: '#006241',
        padding:10,
        fontSize:18,
        color:'#000000',
        height:50,
        marginBottom:10,
      },
      titulos:{
        color:'#006241',
        fontSize:16,
        fontWeight:'500',
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
export default Details;