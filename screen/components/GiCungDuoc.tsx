import React from "react";
import {Text, View} from "react-native"
//tao Props de dung lai trong compoment listcategory
type GiCungDuocProps = {
    title: string
}


const GiCungDuoc = ({title}: GiCungDuocProps) => {
    return (
        <>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold', paddingVertical: 15, color: 'red'}}>{title}</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', paddingVertical: 15, color: 'black'}}>Xem thêm</Text>
                </View>
            </View>
        </>
    )
};

export default GiCungDuoc;