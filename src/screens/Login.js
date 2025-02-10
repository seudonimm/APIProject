import React, { useEffect, useState } from "react";
import CustomInputField from "../components/CustomInputField";
import { SafeAreaView, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import store from "../store/Store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    const login = useSelector(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitPress = (email, password) => {
        console.log("pressed")
 
        store.dispatch({type:'LOG_IN', payload: {email, password}});
        console.log("pressed")

    };

    useEffect(
        () => {
            if (login.loggedIn){
                navigation.replace('GetDataScreen');
            }
        },[login]
    );
    return(
        <SafeAreaView style={{flex: 1}}>
            <Text>Email</Text>
            <CustomInputField
                text={'Enter Email'}
                onChangeText={t => setEmail(t)}
            />
            <Text>Password</Text>
            <CustomInputField
                text={'Enter Password'}
                onChangeText={t => setPassword(t)}
            />
            <CustomButton
                text={"Log In"}
                onPress={() => onSubmitPress(email, password)}
            />
            <CustomButton
                text={"Create Account"}
                onPress={() => navigation.navigate('CreateAccount')}
            />
        </SafeAreaView>
    );
};

export default Login;