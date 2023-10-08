import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

function Cau2a() {
  return (
    <View style={styles.nen}>
      <Text style={styles.textlogin}>LOGIN</Text>
        <View style={styles.neninput}>
            <TextInput style={styles.input} placeholder="Name"/>
            <Image style={styles.img1}source={{ uri: 'https://theme.hstatic.net/200000081969/1000831359/14/user_header.png?v=881' }} />
            <TextInput style={styles.input} placeholder="Password"/>
            <Image style={styles.img2}source={{ uri: 'https://cdn.pixabay.com/photo/2023/06/05/09/12/security-8041759_1280.png' }} />
            <Image style={styles.img3}source={{ uri: 'https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-eye-icon-png-image_925911.jpg' }} />
            <TouchableOpacity style={styles.touchlogin}>LOGIN</TouchableOpacity>
            <text style={styles.text}>Forgot your password?</text>
        </View>
    </View>
  );
}
export default Cau2a;

const styles = StyleSheet.create({
  nen: {
    flex:1,
    backgroundColor: '#fcc203',
    position: 'relative',
  },
  textlogin:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 80,
  },
  neninput:{
    marginTop:80,
    position: 'relative', 
  },
  input:{
    paddingLeft: 65,
    marginTop:25,
    height:50,
    width:'90%',
    borderColor: '#ffe796',
    borderWidth:2,
    backgroundColor:'#fac923',
    marginLeft:'5%',
    fontSize:20,
  },
  touchlogin:{
    padding:15,
    marginTop:60,
    height:50,
    width:'90%',
    backgroundColor:'black',
    marginLeft:'5%',
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight: 'bold',
  },
  img1:{
    height:30,
    width:30,
    position: 'absolute', 
    left: 34, 
    top: 34,
  },
  img2:{
    height:30,
    width:30,
    position: 'absolute', 
    left: 34, 
    top: 110,
  },
  img3:{
    height:30,
    width:30,
    position: 'absolute', 
    right: 34, 
    top: 110,
  },
  text:{
    textAlign:'center',
    marginTop:40,
    fontSize:25,
    fontWeight: 'bold'
  }
});
