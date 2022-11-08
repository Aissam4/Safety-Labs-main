import axios from "axios";
import { API_URL } from "./urls";

function ChangePassword({password, NewPassword}, id) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token_safety_labs")}`
        }
    };
    return axios.post(API_URL.CHANGEPASSWORD, {
        id: id,
        password: password,
        NewPassword: NewPassword
    }, config)
}

export default ChangePassword;