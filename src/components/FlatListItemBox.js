import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const FlatListItemBox = (props) => {
    const {text, isBold} = props;

    return(
        <View style={styles.listItemContainer}>
            <Text
                style={{
                    fontWeight:(isBold ? 'bold' : 'normal')
                }}
            >
                {text}
            </Text>
            <TouchableOpacity style={styles.deleteButtonStyle}
                onPress={props.onPress1}
            >
                <Text>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButtonStyle}
                onPress={props.onPress2}
            >
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        height: 50,
        width: '90%',
        borderWidth: 1,
        color: 'black',
        borderColor: 'black',
        alignSelf: 'center',
        margin: '1%',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteButtonStyle: {
        height: '70%',
        width: '20%',
        backgroundColor: 'orange',
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
});

export default FlatListItemBox;