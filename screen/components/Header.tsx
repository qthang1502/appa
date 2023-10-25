import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const Header = () =>{
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>NQT IS</Text>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')}/>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingLeft: 15,
        
   },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
    }
})
export default Header;