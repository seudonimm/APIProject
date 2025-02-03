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
    const list = useSelector(state => state.list);

    const getListData = () => {
        store.dispatch(retrieveData());
        console.log("done");
    }
    const onPressDeleteItem = (id) => {
        deleteData(id, URL+`/info?id=${id}`);
        getListData();
    }
    const onItemViewPress =(i) => {
        setUpdateModalVisible(true);
        setCurrentIndex(i);
        console.log(list.value.data.data.data[i])
        setCurrentIndexItem(list.value.data.data.data[i])
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
            {/* <CustomModal
                field1={list.value.data.data.data[i].firstName}
            /> */}
        </View>
        )
    }
    useEffect(
        () =>{
            //console.log("in gsd before" + JSON.stringify(list.value.data.data.data));
            getListData();

            // if(list.value.data){
            //     console.log("in gsd" + JSON.stringify(list.value.data.data.data));
            // }
        },[]
    );
    return(
        <SafeAreaView style={styles.container}>
            {(list.value!=null)?
            <FlatList style={styles.flatlistStyle}
                data={(list.value.data.data.data)}
                renderItem={({item, index}) => (renderListItem(JSON.stringify(item.firstName + " " + item.lastName), index))}
                keyExtractor={(item, index)=>index}
            />:<ActivityIndicator/>
            }
            <CustomButton
                text={"Refresh List"}
                onPress={() => getListData()}
            />
            {(list.value!=null)?
            <CustomModal
                visible={updateModalVisible}
                field1={list.value.data.data.data[currentIndex].firstName}
                onChangeText1={t => setCurrentIndexItem({...currentIndexItem, firstName: t})}
                field2={list.value.data.data.data[currentIndex].lastName}
                onChangeText2={t => setCurrentIndexItem({...currentIndexItem, lastName: t})}
                field3={list.value.data.data.data[currentIndex].age}
                onChangeText3={t => setCurrentIndexItem({...currentIndexItem, age: t})}
                field4={list.value.data.data.data[currentIndex].info}
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