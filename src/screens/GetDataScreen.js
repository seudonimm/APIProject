import React, { useEffect, useState } from "react";
import { 
    ActivityIndicator,
    FlatList,
    SafeAreaView, 
    SectionList,
    StyleSheet,
    Text,
    View
} from "react-native";
import store from "../store/Store";
import CustomButton from "../components/CustomButton";
import { addToList, refreshList, retrieveData } from "../store/ListSlice";
import { useSelector } from "react-redux";
import FlatListItemBox from "../components/FlatListItemBox";
import { deleteData, updateData } from "../services/APIServices";
import CustomModal from "../components/CustomModal";
import { URL } from "../res/strings";

const GetDataScreen = () => {

    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexItem, setCurrentIndexItem] = useState({})
    const [loading, setLoading] = useState(true);

    const list = useSelector(state => state.list);

    const getListData = () => {
        store.dispatch({type: 'GET_LIST_DATA'});
        console.log("done");
    }
    const onPressDeleteItem = (id) => {
        deleteData(id, URL+`/info?id=${id}`);
        setTimeout(() => {
            getListData();
        }, 500);
    }
    const onItemViewPress =(i) => {
        setUpdateModalVisible(true);
        setCurrentIndex(i);
        console.log(list.value.payload.data.data[i])
        setCurrentIndexItem(list.value.payload.data.data[i])
    }
    const updateListItem = (id, fName, lName, age, info) => {
        updateData(id, fName, lName, age, info, URL+"/updateinfo");
        setUpdateModalVisible(false);
        console.log(currentIndexItem);
        getListData();

    }
    const renderListItem = (item, i) => {
        console.log((item + "lkj"));
        return(
        <View>
            <FlatListItemBox
                text={(item)}
                onPress1={() => onItemViewPress(i)}
                onPress2={() => onPressDeleteItem(i)}

            />
        </View>
        )
    }

    useEffect(
        () =>{
            //console.log("in gsd before" + JSON.stringify(list.value.data.data.data));
            getListData();
            setTimeout(() => {
                console.log("checking " +JSON.stringify(list));
                setLoading(list.success)
            }, 1000);
            // if(list.value.data){
            //     console.log("in gsd" + JSON.stringify(list.value.data.data.data));
            // }
        },[]
    );
    return(
        <SafeAreaView style={styles.container}>
            {(!loading)?
            <FlatList style={styles.flatlistStyle}
                data={(list.value.payload.data.data)}
                renderItem={({item, index}) => (renderListItem(JSON.stringify(item.firstName + " " + item.lastName), index))}
                keyExtractor={(item, index)=>index}
            />:<ActivityIndicator/>
            }
            <CustomButton
                text={"Refresh List"}
                onPress={() => getListData()}
            />
            {(!loading)?
            <CustomModal
                visible={updateModalVisible}
                field1={list.value.payload.data.data[currentIndex].firstName}
                onChangeText1={t => setCurrentIndexItem({...currentIndexItem, firstName: t})}
                field2={list.value.payload.data.data[currentIndex].lastName}
                onChangeText2={t => setCurrentIndexItem({...currentIndexItem, lastName: t})}
                field3={list.value.payload.data.data[currentIndex].age}
                onChangeText3={t => setCurrentIndexItem({...currentIndexItem, age: t})}
                field4={list.value.payload.data.data[currentIndex].info}
                onChangeText4={t => setCurrentIndexItem({...currentIndexItem, info: t})}
                button1={"Update"}
                onPress1={() => updateListItem(
                    currentIndex, 
                    currentIndexItem.firstName,
                    currentIndexItem.lastName,
                    currentIndexItem.age,
                    currentIndexItem.info
                    
                )}
                button2={"Cancel"}
                onPress2={() => setUpdateModalVisible(false)}
            />:
            <ActivityIndicator/>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlistStyle: {
        flex: 1
    }
})
export default GetDataScreen;