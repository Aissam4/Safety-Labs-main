import axios from "axios";
import { API_URL } from "./urls";

function delete_buyer(id) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token_safety_labs")}`
        }
    };

    return axios.delete(API_URL.DELETE_BUYER + id, config)
}

export default delete_buyer;