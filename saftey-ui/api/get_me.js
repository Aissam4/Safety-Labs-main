import { API_URL } from "./urls";
import axios from "axios";

function get_me() {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token_safety_labs")}`
        }
    };

    return axios.get(API_URL.GET_ME, config)
}

export default get_me;