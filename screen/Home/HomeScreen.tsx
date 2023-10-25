import React from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";
import Header from "../components/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";

const HomeScreen = () => {
    return(
    <>
        <View style={{paddingHorizontal:15, }}>
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"}></StatusBar>
            <Header />
            <ScrollView>
                <ListCategory/>
                <ListProduct/>
            </ScrollView>
            
        </View>
    </>
    )
};

export default HomeScreen;