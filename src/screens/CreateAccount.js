import React, { useState } from "react";
import CustomInputField from "../components/CustomInputField";
import { SafeAreaView, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import store from "../store/Store";

const CreateAccount = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitPress = (email, pass) => {
        console.log("pressed")
 
        store.dispatch({type:'CREATE_ACCOUNT', email, pass});
        console.log("pressed")
    };
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
                onPress={() => onSubmitPress(email, password)}
            />
        </SafeAreaView>
    );
};

export default CreateAccount;