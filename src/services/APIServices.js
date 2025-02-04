import axios from "axios";

export const storeLoginInfo = async (firstName, lastName, age, info, url) => {
    try {
        let res = await axios.post('/info', {
            data:{
                firstName: firstName,
                lastName: lastName,
                age: age,
                info: info
            }
        });   
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: error};

    }
}

export const retrieveAllUserData = async(url) => {
    try {
        let res = await axios.get('/getinfo')

        console.log(res);
        return {success: true, data: res}

    } catch (error) {
        console.log(error)
        return {success: false, data: error}

    }
}

export const deleteData = async(id, url) => {
    try {
        let res = await axios.delete(`/info?id=${id}`);
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: null};

    }
}

export const updateData = async(id, firstName, lastName, age, info, url) => {
    try {
        let res = await axios.put('/updateinfo', {
            id:id,
            newData:{
                firstName: firstName,
                lastName: lastName,
                age: age,
                info: info
            }
        });   
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: error};

    }

}





//-----------
export const storeLoginInfoFetch = async (firstName, lastName, age, info) => {
    try {
        let res = await fetch('https://earthy-gelatinous-prawn.glitch.me/info', {
            method: 'POST',
            body:{
                data:{
                    firstName: firstName,
                    lastName: lastName,
                    age: age,
                    info: info
                }
            }
        });   
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: error};

    }
}

export const retrieveAllUserDataFetch = async() => {
    try {
        let res = await fetch('https://earthy-gelatinous-prawn.glitch.me/getinfo')

        console.log(res);
        return {success: true, data: res}

    } catch (error) {
        console.log(error)
        return {success: false, data: error}

    }
}

export const deleteDataFetch = async(id) => {
    try {
        let res = await axios.delete(`https://earthy-gelatinous-prawn.glitch.me/info?id=${id}`)
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: null};

    }
}

export const updateDataFetch = async(id, firstName, lastName, age, info) => {
    try {
        let res = await axios.put(`https://earthy-gelatinous-prawn.glitch.me/updateinfo`, {
            id:id,
            newData:{
                firstName: firstName,
                lastName: lastName,
                age: age,
                info: info
            }
        });   
        console.log(res);
        return {success: true, data: res};
    } catch (error) {
        console.log(error);
        return {success: false, data: error};

    }

}