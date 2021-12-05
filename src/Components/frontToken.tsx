import React, { useState } from "react"

function frontToken(){
    const queryParam = new URLSearchParams(window.location.search)
    const frontToken = queryParam.get('token')
    localStorage.setItem('FrontToken', frontToken == null ? "error" : frontToken)
    
    //redirect to create playlist
    window.location.replace('http://localhost:3000/create-playlist');

    return(
        <div>There's nothing here 😳</div>
    )
}
export default frontToken  