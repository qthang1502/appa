import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import GiCungDuoc from "../components/GiCungDuoc";
const ListProduct = () => {
    
    const [games, setGames] = useState([]);
    //cach 1 call API bang then, cat
    // const getApi = () => {
    //     return fetch('https://65091305f6553137159aeee5.mockapi.io/game')
    //     .then((response) => response.json())
    //     .then((data) => setGames(data))
    //     .catch(error => console.group(error))
    // }
    const [isLoading, setLoading] = useState(true);



    //cach 2 call API bang async await
    const getApi = async ()=>{
        try {
            const respone = await fetch('https://65091305f6553137159aeee5.mockapi.io/game')
            const data = await respone.json();
            setGames(data)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }



    useEffect(() => {
        getApi()
    },[])
    return (
        <>
            <GiCungDuoc title="Sản phẩm"/>
            <View style={styles.container}>
            {isLoading ? (<ActivityIndicator />) : (<FlatList
                data = {games}
                scrollEnabled={false}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({item}:any) =>
                    <View style={styles.items}>
                        <Image source={{uri:item.avatar}} style={{width: '100%', height: 150}} />
                        <Text style={{color: 'green', textAlign: 'center', padding: 7}}>{item.name}</Text>
                    </View>
                }    
                    
            />)}
            
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    items:{
        width: '48%',
        marginBottom: 10
    },
    row:{
        flex: 1,
        justifyContent: "space-between",
    }
})
export default ListProduct;