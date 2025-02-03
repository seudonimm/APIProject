import React from "react";
import { 
    SafeAreaView 
} from "react-native";
import CustomButton from "../components/CustomButton";
import { retrieveAllUserData } from "../services/APIServices";


const Main = () => {

    return(
        
        <SafeAreaView>
            <CustomButton
                onPress={retrieveAllUserData}
            />
        </SafeAreaView>
    );
};

export default Main;