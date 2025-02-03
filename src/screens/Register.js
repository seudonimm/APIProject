import React, { useState } from "react";
import { 
    SafeAreaView,
    StyleSheet,
    Text 
} from "react-native";
import CustomInputField from "../components/CustomInputField";
import { Formik } from "formik";
import { LoginSchema } from "../schema/LoginSchema";
import { storeLoginInfo } from "../services/APIServices";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { URL } from "../res/strings";

const Register = () => {
    const navigation = useNavigation();

    const[username, setUsername] = useState('');

    const OnLogin = (fName, lName, age, info) => {
        console.log(fName + " df " + lName);
        storeLoginInfo(fName, lName, age, info, URL+"/info");
        navigation.navigate("GetDataScreen");

    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return(
        <SafeAreaView style={styles.container}>

            <Formik style={styles.container}
                initialValues={{firstName: '', lastName: '', age: 0, info: ''}}
                validationSchema={LoginSchema}
                onSubmit={values => OnLogin(values.firstName, values.lastName, values.age, values.info)}
            >
                {({handleChange, handleSubmit, values, errors}) => (
                    <SafeAreaView style={styles.container}>
                        <Text>First Name</Text>
                        <CustomInputField
                            text={"First Name"}
                            onChangeText={handleChange('firstName')}
                            inputErrorMessage={errors.firstName}
                        />
                        <Text>Last Name</Text>
                        <CustomInputField
                            text={"Last Name"}
                            onChangeText={handleChange('lastName')}
                            inputErrorMessage={errors.lastName}
                        />                        
                        <Text>Age</Text>
                        <CustomInputField
                            text={"Age"}
                            onChangeText={handleChange('age')}
                            inputErrorMessage={errors.age}
                        />                        
                        <Text>Info</Text>
                        <CustomInputField
                            text={"Info"}
                            onChangeText={handleChange('info')}
                            inputErrorMessage={errors.info}
                        />
                        <CustomButton
                            text={"Add"}
                            onPress={() => handleSubmit(values.firstName, values.lastName, values.age, values.info)}
                        />
                    </SafeAreaView>
                )}
            </Formik>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Register;