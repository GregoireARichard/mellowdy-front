import axios from "axios";
import { MellowUser } from "../decl/MellowUser.decl";

const route = 'http://127.0.0.1:8080/'
export const sendPost = async (MellowUsers : MellowUser): Promise<MellowUser> =>{
    try{
        const res = await axios.post(
            
            `${route}/`, MellowUsers,
               { headers: {
                    'Authorization' : 'Bearer ' + window.localStorage.getItem('frontToken') ?? "",
                } }
            
          );
          return res.data;
    }catch(error){
        throw new Error('Request error')
    }
}