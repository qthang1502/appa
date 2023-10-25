import React from "react";
import { Text, View, Button, TouchableOpacity, SectionList } from "react-native";
import NYC from "./screen/components/SectionList";
import BMI from "./screen/components/BMI";
import Header from "./screen/components/Header";
import HomeScreen from "./screen/Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screen/login/LoginScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import Account from "./screen/components/Account";
import { AccountStack } from "./screen/stack/AccountStack";

const Home = ({navigation} :any) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Chuyen trang detail" onPress={()=> navigation.navigate('Detail', {name: 'Thang', obj:{id: 1, name: 'Kaka', price: 100}})}/>
    </View>
  )
}

//thêm biến [[route]] để lấy dữ liệu truyền vào từ màn hình home qua
const Detail = ({route,navigation}:any) => {
//đặt tên biến đúng với tên biến truyền từ màn hình khác
  const {name, obj} = route.params;
  console.log('====================================');
  console.log(name);
  console.log('====================================');
  return(
  <>
    <View style={{backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15}}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Text>Quay lại</Text>
      </TouchableOpacity>
      <Text>Chuông</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Text>Họ tên: {name}</Text>
      <Text>Họ tên: {obj.price}</Text>
     
    </View>
    </>
  )
  
}
const Stack = createNativeStackNavigator ();
const Tab = createBottomTabNavigator();


const App = () => {
  return(
   
      
    <NavigationContainer>
      {/* <Stack.Navigator>
         Định nghĩa tên màn hình 
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName:string = '';
            if (route.name === 'new') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'BMI') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>
        <Tab.Screen name="BMI" component={BMI}></Tab.Screen>
        <Tab.Screen name="new" component={HomeScreen}></Tab.Screen>
        
        
      </Tab.Navigator>


    </NavigationContainer>

  
  )
};

export default App;