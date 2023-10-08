import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
function Cau2b() {
    return (
      <View style={styles.nen}>
        <view style={styles.sanpham}>
            <Image style={styles.img}source={{ uri: 'https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02273.png' }} />
            <Text style={styles.texthead}>USB Bluetooth Music Receiver <br/>HJX-001 Biến loa thường thành loa<br/>bluetooth</Text>
        </view>
            <Text style={styles.textcen}>Cực kỳ hài lòng</Text>
            <Image style={styles.img5star}source={{ uri: 'https://png.pngtree.com/png-vector/20220703/ourmid/pngtree-5-star-review-five-vector-png-image_5560551.png' }} />
        <TouchableOpacity style={styles.addimg}>Thêm hình ảnh</TouchableOpacity>
        <Image style={styles.imgmayanh}source={{ uri: 'https://media.istockphoto.com/id/1175387759/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%C3%A1y-%E1%BA%A3nh.jpg?s=170667a&w=0&k=20&c=3PXgm1MmNxUcmZkMXlg0bFaue9BJHRmQ4LCQMkg8UFs=' }} />
        <TextInput style={styles.textinput} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm" multiline={true}/>
        <Text style={styles.textlink}>http://meet.google.com/nsj-ojwi-xpp</Text>
        <TouchableOpacity style={styles.send}>Gửi</TouchableOpacity>
      </View>
    );
  }
  export default Cau2b;
  const styles = StyleSheet.create({
    nen:{
        flex:1,
    },
    sanpham:{
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    img:{
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        width:75,
        height:75,
    },
    imgmayanh:{
        width:65,
        height:65,
        position:'absolute',
        top:269,
        left:50,
    },
    texthead:{
        fontSize: 17,
        fontWeight:'bold',
    },
    textcen:{
        fontSize: 17,
        fontWeight:'bold',
        marginTop:50,
        textAlign:'center',
    },
    img5star:{
        marginTop:30,
        textAlign:'center',
        width: '100%',
        height:40,
    },
    addimg:{
        borderRadius:7,
        paddingLeft:90,
        height:70,
        width:'80%',
        borderWidth:1,
        borderColor:'blue',
        marginLeft:'10%',
        marginTop:30,
        position:'relative',
        paddingTop:22,
        fontSize:20,
        fontWeight:'bold',
    },
    textinput:{
        borderRadius:7,
        paddingTop:10,
        paddingLeft:10,
        marginTop:20,
        height:100,
        width:'80%',
        marginLeft:'10%',
        borderWidth:1,
        borderColor:'#969493',
        paddingBottom:180,
        fontSize:20,
        position:'relative',
    },
    textlink:{
        fontWeight:'bold',
        position:'absolute',
        top:525,
        left:90,
    },
    send:{
        borderRadius:7,
        paddingTop:10,
        margin:'10%',
        width:'80%',
        height:45,
        backgroundColor:'blue',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:"white"
    }
  })