import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Alert, TextInput } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Fontisto';
import { Image } from "react-native";
const RegisterScreen = () => {
    const [isCheck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorUser, setErrorUser] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const onSubmit = () => {
        let formData = {
            _email : email,
            _password : password,
            _checkbox : isCheck
        }
        formData._email ==='' ? setErrorUser('Không được để trống tên đăng nhập') :setErrorUser('');
        formData._password==='' ? setErrorPassword('Không được để trống mật khẩu') : setErrorPassword('');

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"}></StatusBar>
           <View style={styles.title}>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>Register</Text>
                <Text>By signing in you are agreeing</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>our </Text><TouchableOpacity onPress={()=> Alert.alert('Điều khoản sử dụng!')}>
                    <Text style={{color: '#1bcdff'}}>Term and privacy policy</Text></TouchableOpacity>
                </View>
           </View>
           <View style={styles.form}>
                <View style={styles.group}>
                    <Icon name="user-secret" style={styles.icon} />
                    <TextInput placeholder="Tên đăng nhập" style={styles.input} onChangeText={(value) =>setEmail(value)}></TextInput>
                    <Text style={{color:'red'}}>{errorUser}</Text>
                </View>
                <View style={styles.group}>
                    <Icon name="locked" style={styles.icon} />
                    <TextInput placeholder="Nhập mật khẩu"  secureTextEntry={true} style={styles.input} onChangeText={(value) =>setPassword(value)} ></TextInput>
                    <Text style={{color:'red'}}>{errorPassword}</Text>
                </View>
                <View style={styles.group}>
                    <Icon name="locked" style={styles.icon} />
                    <TextInput placeholder="Nhập lại mật khẩu"  secureTextEntry={true} style={styles.input} onChangeText={(value) =>setPassword(value)} ></TextInput>
                    <Text style={{color:'red'}}>{errorPassword}</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={{color: '#ffffff', }}>Đăng ký</Text>
                </TouchableOpacity>    
           </View>
           
           <View style={styles.logo}>
                <Image source={require('../../assets/logo.png')} />
           </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        
    },
    title:{
        marginTop: 30,
        alignItems: 'center',
    },
    form:{
        marginTop: 30,
        paddingHorizontal: 25,
    },
    group:{
        //backgroundColor: 'red',
        marginTop: 15,
    },
    input:{
        borderBottomWidth: 1,
        borderRadius: 10, 
        paddingLeft: 35,
        zIndex: 1000,
    },
    icon:{
        fontSize: 30,
        position: 'absolute',
        top: 10,
    },
    group1:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    remeber: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn:{
        marginTop: 20,
        backgroundColor: '#1bcdff',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
    },
    logo:{
        alignItems: 'center',
        marginTop: 120,
        justifyContent: 'center'
    }
});
export default RegisterScreen;