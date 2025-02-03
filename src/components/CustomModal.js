import React from "react";
import { 
    Modal, 
    StyleSheet, 
    TouchableOpacity,
    Text,
    View,
    ScrollView
 } from "react-native";
import CustomInputField from "./CustomInputField";

const CustomModal = props => {

    const {field1, field2, field3, field4, button1, button2} = props;

    return(

    <Modal style={{backgroundColor: '#FFFFFF00'}}
        visible={props.visible}
    >
        <ScrollView
            style={styles.container}
        >
            <Text>First Name</Text>
            <CustomInputField
                text={field1}  
                onChangeText={props.onChangeText1}
            />            
            <Text>Last Name</Text>
            <CustomInputField
                text={field2}  
                onChangeText={props.onChangeText2}
            />
            <Text>Age</Text>
            <CustomInputField
                text={field3}  
                onChangeText={props.onChangeText3}
            />
            <Text>Info</Text>
            <CustomInputField
                text={field4}  
                onChangeText={props.onChangeText4}
            />
            <TouchableOpacity style={styles.buttonStyle}
                onPress={props.onPress1}
            >
                <Text>
                    {button1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={props.onPress2}
            >
                <Text>
                    {button2}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '70%',
        width: '80%',
        borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: '25%',
        marginVertical: '40%',
        alignSelf: 'center'
    },
    buttonStyle: {
        height: '10%',
        width: '30%',
        backgroundColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
})

export default CustomModal;