import axios from "axios";

export const storeLoginInfo = async (username, password) => {
    try {
        let id = await axios.post('https://earthy-gelatinous-prawn.glitch.me/info', {
            username: username,
            password: password
        })   
        console.log(id);
        return {success: true, data: id}
    } catch (error) {
        return {success: false, data: error}

    }
}