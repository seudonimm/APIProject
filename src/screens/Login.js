import React from "react";
import CustomInputField from "../components/CustomInputField";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {


    return(
        <SafeAreaView>
            <Text>Email</Text>
            <CustomInputField/>
            <Text>Password</Text>
            <CustomInputField/>
        </SafeAreaView>
    );
};