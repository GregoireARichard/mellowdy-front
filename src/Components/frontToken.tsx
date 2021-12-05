import React, { useState } from "react"
import { MellowUser } from '../decl'
import { sendPost } from "../api"
import axios from "axios"; 


function frontToken(){
    const queryParam = new URLSearchParams(window.location.search)
    const frontToken = queryParam.get('token')
    localStorage.setItem('FrontToken', frontToken == null ? "error" : frontToken)
    
    //redirect to create playlist
    async function sendToken(){
        try{
        const res =  await axios.post(
            `${process.env.REACT_APP_BASE_URL}/`,
               { headers: {
                    'Authorization' : 'Bearer ' + window.localStorage.getItem('frontToken') ?? "",
                } }
            
          );
         //return res;
    }catch(error){
        console.log(error)
    }
}
    sendToken()
    window.location.replace('http://localhost:3000/create-playlist')

    return(
        <div>There's nothing here 😳</div>
    )
}
export default frontToken  