import axios from "axios";

export const note= axios.create({
    baseURL:'http://localhost:5000'
})