import React from 'react';
import {Text, FlatList, View, Image} from 'react-native';
//DEMO  FLATLIST API
const Demo = () => {

    const dataT = [
        {id: 1, name: "Thang IS", image:'https://antimatter.vn/wp-content/uploads/2022/04/hinh-anh-meo-khoc-1.jpg'},
        {id: 2, name: "Thang IS 1", image:'https://antimatter.vn/wp-content/uploads/2022/04/hinh-anh-meo-khoc-1.jpg'},
        {id: 3, name: "Thang IS 111", image:'https://antimatter.vn/wp-content/uploads/2022/04/hinh-anh-meo-khoc-1.jpg'},
        {id: 4, name: "Thang IS 1111", image:'https://antimatter.vn/wp-content/uploads/2022/04/hinh-anh-meo-khoc-1.jpg'},
    ];

    return (
        <>
        <Text style={{backgroundColor: 'red', padding: 10, textAlign: 'center'}}>Demo Flatlist</Text>
        <FlatList data={dataT} renderItem={({item}) => 
        <View style={{margin: 15}}>
            <Text>{item.name}</Text>
            <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
        </View>
    }/>
    </>
    )
};

export default Demo;