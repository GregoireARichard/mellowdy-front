import axios from "axios";
import { MellowUser, MellowUsers } from "../decl/user.decl";

export const sendPost = async (): Promise<void> =>{
    try{
        const res = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/`
            //send token
          );
    }catch{

    }
}