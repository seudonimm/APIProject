import React, { useState } from "react";
import { 
    SafeAreaView,
    Text 
} from "react-native";
import CustomInputField from "../components/CustomInputField";
import { Formik } from "formik";
import { LoginSchema } from "../schema/LoginSchema";
import { storeLoginInfo } from "../services/APIServices";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const Register = () => {
    const navigation = useNavigation();

    const[username, setUsername] = useState('');

    const OnLogin = (user, pass) => {
        console.log(user + " df " + pass);
        storeLoginInfo(user, pass);
        navigation.navigate("Main");

    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return(
        <SafeAreaView>

            <Formik 
                initialValues={{username: '', password: ''}}
                validationSchema={LoginSchema}
                onSubmit={values => OnLogin(values.username, values.password)}
            >
                {({handleChange, handleSubmit, values, errors}) => (
                    <SafeAreaView>
                        <Text>Username</Text>
                        <CustomInputField
                            text={"Username"}
                            onChangeText={handleChange('username')}
                            inputErrorMessage={errors.username}
                        />
                        <Text>Password</Text>
                        <CustomInputField
                            text={"Password"}
                            onChangeText={handleChange('password')}
                            inputErrorMessage={errors.password}
                        />
                        <CustomButton
                            text={"Register"}
                            onPress={() => handleSubmit(values.username, values.password)}
                        />
                    </SafeAreaView>
                )}
            </Formik>

        </SafeAreaView>

    );
};

export default Register;