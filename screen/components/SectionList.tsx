import React from "react";
import { Image, SectionList, StyleSheet, Text, View } from "react-native";
//danh sách theo danh bạ
const NYC = () => {
    const dataFake = [
        {title: 'A', data:[ {id: 1, name: 'Anh'}, {id: 2, name: 'Ánh Tuyết'}]},
        {title: 'B', data:[ {id: 3, name: 'Bình'}, {id: 4, name: 'Bích Ngọc'}]},
        {title: 'C', data:[ {id: 5, name: 'Chinh'}, {id: 6, name: 'Cúc'}, {id: 7, name: 'Cúcccc'}, {id: 8, name: 'Chust'}, {id: 9, name: 'Cúchh'}]}
    ]
return (
    <>
        <Text style={{backgroundColor: 'yellow', padding: 10, textAlign: 'center'}}>SectionList</Text>
        
        <SectionList 
            sections={dataFake}
            renderItem={({item}) =>  
                <View style={styles.item}>
                    <Image source={{uri:'https://mcdn.coolmate.me/image/March2023/meme-meo-cute-hai-huoc-1297_374.jpg'}} style={styles.avatar}/>
                    <Text style={{fontSize: 16, marginLeft: 15}}>{item.name}</Text>
                </View>
            }
            renderSectionHeader={({section}) => <Text style={{backgroundColor: 'red'}}>{section.title}</Text>}
            keyExtractor={item => `basicListEntry-${item.id}`}
        />
        

    </>
)
};



const styles = StyleSheet.create({
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
        },
})
export default NYC;