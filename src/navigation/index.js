import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../screens/Main";
import { createStaticNavigation } from "@react-navigation/native";
import Register from "../screens/Register";
import GetDataScreen from "../screens/GetDataScreen";

const RootStack = createNativeStackNavigator({
    screens: {
        Register: Register,
        Main: Main,
        GetDataScreen: GetDataScreen,
        
    }
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigation(){
    return <Navigation/>
}