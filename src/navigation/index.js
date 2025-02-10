import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../screens/Main";
import { createStaticNavigation } from "@react-navigation/native";
import Register from "../screens/Register";
import GetDataScreen from "../screens/GetDataScreen";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import { useSelector } from "react-redux";

//const login = useSelector(state => state.login);

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Login',
    screens: {
        Login: Login,
        CreateAccount: CreateAccount,
        Register: Register,
        Main: Main,
        GetDataScreen: GetDataScreen,
        
    }
});

const LoggedInStack = createNativeStackNavigator({
    initialRouteName: 'GetDataScreen',
    screens: {
        Register: Register,
        Main: Main,
        GetDataScreen: GetDataScreen,
        
    }
});

const LoggedOutStack = createNativeStackNavigator({
    initialRouteName: 'Login',
    screens: {
        Login: Login,
        CreateAccount: CreateAccount
        
    }
});


const Navigation = createStaticNavigation(RootStack);

const LoggedInNavigation = createStaticNavigation(LoggedInStack);
const LoggedOutNavigation = createStaticNavigation(LoggedOutStack);

export default function AppNavigation(){
    const login = useSelector(state => state.login);

    return (login.loggedIn?<LoggedInNavigation/>:<LoggedOutNavigation/>)
}