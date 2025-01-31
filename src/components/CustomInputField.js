import React from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    View,
    Text
} from "react-native"


const CustomInputField = (props) => {
    const {text, inputErrorMessage} = props;

    return(
        <View>
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputStyle}
                    placeholder={text}
                    placeholderTextColor={"white"}
                    onChangeText={props.onChangeText}
                    cursorColor={'white'}
                />
            </View>
            <Text style={styles.textStyle}>
                {inputErrorMessage}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: '25%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1e1d24',
        borderRadius: 30,
        justifyContent: 'left',
        borderWidth: 1,
        borderColor: 'white',
        margin: '2%',
        paddingLeft: '10%',
        color: 'white'
    },
    inputStyle: {
        flex: 1,
        /*height: '7%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1e1d24',
        borderRadius: 30,
        justifyContent: 'left',
        borderWidth: 1,
        borderColor: 'white',
        margin: '2%',
        paddingLeft: '10%',*/
        color: 'white'
    },
    imageStyle: {
        flex: 1,
        height: 25,
        width: 25,
        marginTop: '5%',
        marginRight: '5%'
    },
    endImageStyle: {
        flex: 1,
        height: 25,
        width: 25,
        marginTop: '5%',
        marginRight: '5%',
        justifyContent: 'flex-end',
        
    },
    textStyle: {
        color: 'red',
        marginLeft: '5%'
    }
});

export default CustomInputField;