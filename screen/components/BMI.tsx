import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import PieChart from "react-native-pie-chart";
const BMI = () => {
    const [height, onChangeNumber] = useState('');
    const [weight, onChangeWeight] = useState('');
    let calculator:number;
    // if(weight ==='' || height==='')
    // {
    //     calculator = 'Khoong'
    // }
    let calculator_all:number;
    if(weight === '0' || weight ==='')
    {
        calculator_all = 0;
    }
    else
    {
        calculator = +weight/(+height*+height)*10000;
    
        calculator_all = Math.round (calculator*100)/100;
    }
   

    //MAP
    const widthAndHeight = 200
    const series = [51.4, 51.4, 51.4, 51.4, 51.4]

    //RESET
    const [inputValue, setInputValue] = useState<string>('');

    const handleReset = () => {
        setInputValue(''); // Reset the input value
    };


    //const sliceColor = ['#27e837', 'gray', 'gray', 'gray','gray'];

    let sliceColor = ['#27e837', '#f5e571', '#f76539', '#b716f2', '#2ad4fa'];
    if(0<calculator_all && calculator_all<18.5)
    {
        sliceColor = ['#2ad4fa', 'gray', 'gray', 'gray','gray'];
    }
    if(18.5<calculator_all && calculator_all<24.9)
    {
        sliceColor = ['gray', '#27e837', 'gray', 'gray', 'gray'];
    }
    if(25<calculator_all && calculator_all<29.9)
    {
        sliceColor = ['gray', 'gray', '#f5e571', 'gray', 'gray'];
    }
    if(30<calculator_all && calculator_all<34.9)
    {
        sliceColor = ['gray', 'gray', 'gray', '#f76539', 'gray'];
    }
    if(calculator_all>40)
    {
        sliceColor = ['gray', 'gray', 'gray', 'gray', '#b716f2'];
    }
   
    //const sliceColor = ['#27e837', '#f0a046', '#f76539', '#b716f2', '#2ad4fa']
    
    
    return(
        <View style={styles.container}>
            <View>
                <StatusBar backgroundColor={'white'} barStyle={"dark-content"}></StatusBar>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20}}>App Tính Chỉ Số BMI</Text>
            </View>
            <View style = {styles.group}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Chiều cao</Text>
                <View style={styles.form}>
                    <TextInput  placeholder="" 
                                style={styles.input} 
                                onChangeText={onChangeNumber}
                                value={height}
                                keyboardType="numeric"
                                >
                    </TextInput>
                    <Text>  cm</Text>
                </View>
            </View>

            <View style = {styles.group}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Cân nặng</Text>
                
                <View style={styles.form}>
                    <TextInput  placeholder="" onFocus={handleReset}
                                style={styles.input} 
                                onChangeText={onChangeWeight}
                                value={weight}
                                keyboardType="numeric">
                    </TextInput>
                    <Text>  kg</Text>
                </View>
                
            </View>
            
            {/* <View>
                <TextInput
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    placeholder="Enter text"
                />
                <TouchableOpacity onPress={handleReset}>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>Reset Input</Text>
                    </View>
                </TouchableOpacity>
            </View> */}

            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, color: 'red'}}>KẾT QUẢ</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, color: 'red'}}>{calculator_all}</Text>
            </View>
            <View style = {styles.ketqua}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                />
                <View style={{flexDirection: 'column', padding: 30}}>
                    <Text style={{ flexDirection: 'row', fontSize: 16, fontWeight: 'bold'}}>Chú thích màu:</Text>
                    <Text style={{backgroundColor: '#2ad4fa', width: 100, margin: 10, fontSize: 13, fontWeight: 'bold'}}>{'<'}18.5: Người thiếu cân</Text>
                    <Text style={{backgroundColor: '#27e837', width: 100, margin: 10, fontSize: 13, fontWeight: 'bold'}}>18.5 - 24.9: Cân đối</Text>
                    <Text style={{backgroundColor: '#f5e571', width: 100, margin: 10, fontSize: 13, fontWeight: 'bold'}}>25 - 29.9: Thừa cân</Text>
                    <Text style={{backgroundColor: '#f76539', width: 100, margin: 10, fontSize: 13, fontWeight: 'bold'}}>30 - 34.9: Béo phì</Text>
                    <Text style={{backgroundColor: '#b716f2', width: 100, margin: 10, fontSize: 13, fontWeight: 'bold'}}>{'>'}35: Béo phì nguy hiểm</Text>  
                </View> 
            </View>
        </View>    
          
         
    )
};


const styles = StyleSheet.create ({
    container:{

    },
    title: {
        fontSize: 24,
        margin: 10,
    },
    chieucao: {
        textAlign: 'center',
    },
    input:{
        
        width: 50,
        borderBottomWidth : 1,
        borderRadius: 5,
    },
    group: {
        alignItems: 'center',
       
        flexDirection: 'column',
        textAlign: 'center'
    },
    ketqua: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        padding: 20,
        textAlign: 'center'
    },
    form:{
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        
    },
    btn:{
        backgroundColor: 'red',
        width: 80,
        padding: 10,
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
});
export default BMI;