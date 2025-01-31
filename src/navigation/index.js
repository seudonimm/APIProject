import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../screens/Main";
import { createStaticNavigation } from "@react-navigation/native";
import Register from "../screens/Register";

const RootStack = createNativeStackNavigator({
    screens: {
        Register: Register,
        Main: Main
    }
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigation(){
    return <Navigation/>
}