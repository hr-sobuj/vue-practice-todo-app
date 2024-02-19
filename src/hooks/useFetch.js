import axios from "axios";

export default async function useFetch(url){
    try {
        let res=await axios.get(url);
        return res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}