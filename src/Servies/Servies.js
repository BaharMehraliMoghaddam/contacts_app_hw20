import axios from "axios";
import { baseURL } from "../Constant/Constant";

const httpService = axios.create({
    baseURL
})

export default httpService