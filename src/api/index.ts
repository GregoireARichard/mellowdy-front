import axios from "axios";
import { MellowUser } from "../decl/MellowUser.decl";

export const sendPost = async (MellowUsers : MellowUser): Promise<MellowUser> =>{
    try{
        const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/`, MellowUsers,
               { headers: {
                    'Authorization' : 'Bearer ' + window.localStorage.getItem('frontToken') ?? "",
                } }
            
          );
          return res.data;
    }catch(error){
        throw new Error('Request error')
    }
}