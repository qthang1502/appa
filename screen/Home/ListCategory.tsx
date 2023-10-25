import { Text, View, Image, StyleSheet } from "react-native";
import GiCungDuoc from "../components/GiCungDuoc";

const ListCategory = () => {
    return (
        <>
            <GiCungDuoc title="Danh mục" />
            <View style={styles.container}>
                <View style={styles.item}> 
                    <Image source={require('../../assets/game1.jpg')} style={{width: '100%', height: 80}}/>
                </View>
                <View style={styles.item}> 
                    <Image source={require('../../assets/game2.png')} style={{width: '100%', height: 80}}/>
                </View>
                <View style={styles.item}> 
                    <Image source={require('../../assets/game3.jpg')} style={{width: '100%', height: 80}}/>
                </View>
                <View style={styles.item}> 
                    <Image source={require('../../assets/game4.png')} style={{width: '100%', height: 80}}/>
                </View>      
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item:{
        width: '20%',
        
    }
})
export default ListCategory;