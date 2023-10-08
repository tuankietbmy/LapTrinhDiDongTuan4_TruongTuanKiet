import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image,CheckBox, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
function Cau2c() {
    const [isChecked, setChecked] = useState(true);
    return (
        <view style={styles.nen} >
           <View style={styles.nen2}>
                <Text style={styles.text}>PASSWORD<br/>GENERATOR</Text>
                <TextInput style={styles.input}/>
                <view style={styles.check}>
                    <Text style={styles.text2}>Password length</Text>
                    <TextInput style={styles.input2}/>
                </view>
                <View style={styles.check}>
                    <Text style={styles.text2}>Include lower case letters</Text>
                    <CheckBox  value={isChecked} onValueChange={(newValue) => setChecked(newValue)}
                    style={styles.box}></CheckBox>
                </View>
                <View style={styles.check}>
                    <Text style={styles.text2}>Include upcase letters</Text>
                    <CheckBox  onValueChange={(newValue) => setChecked(newValue)}
                    style={styles.box}></CheckBox>
                </View>
                <View style={styles.check}>
                    <Text style={styles.text2}>Include number</Text>
                    <CheckBox value={isChecked} onValueChange={(newValue) => setChecked(newValue)}
                    style={styles.box}></CheckBox>
                </View>
                <View style={styles.check}>
                    <Text style={styles.text2}>Include special symbol</Text>
                    <CheckBox  onValueChange={(newValue) => setChecked(newValue)}
                    style={styles.box}></CheckBox>
                </View>
                <TouchableOpacity style={styles.touch}>GENERATE PASSWORD</TouchableOpacity>
           </View>
        </view>
    );
  }
  export default Cau2c;
  const styles = StyleSheet.create({
    nen:{
        width:'100%',
        backgroundColor: '#3B3B98',
        padding:20,
    },
    nen2:{
        width:'99%',
        margin:'1%',
        backgroundColor: '#23235B',
        borderRadius:20,
    },
    text:{
        textAlign:'center',
        width:'95%',
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        marginTop:30,
    },
    input:{
        marginBottom:20,
        marginLeft:'3%',
        marginTop:30,
        height:55,
        width:'94%',
        backgroundColor:'#151537'
    },
    check:{
        marginTop:15,
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between'
    },
    text2:{
        paddingLeft:10,
        height:50,
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    input2:{
        backgroundColor:'white',
        width:'40%',
        height:37,
        marginRight:10,
    },
    box:{
       width:30,
       height:30,
       marginRight:10,
    },
    touch:{
        backgroundColor:'#3B3B98',
        height:50,
        width:'90%',
        marginBottom:30,
        marginTop:10,
        marginLeft:'5%',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:11,
    }
  })