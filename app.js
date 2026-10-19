import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";


function PasswordGenerator(){

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(5);
    const [numberchanged, setNumberchanged] = useState(false);
    const [symbolchanged, setSymbolchanged] = useState(false);


    const generatePassword = useCallback(() => {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberchanged){
            characters += "0123456789";
        }
        if(symbolchanged){
            characters += "!@#$%^&*()_+";
        }

    let newPassword = "";
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
},[length, numberchanged, symbolchanged]);

    useEffect(()=>{
        generatePassword();
    }, [generatePassword]);


    return(
        <>
        <h1>Password: {password}</h1>
        <div>
            <input type="range" min="5" max="50" value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length ({length})</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setNumberchanged(!numberchanged)}></input>
            <label>Number</label>

                <input type="checkbox" defaultChecked={symbolchanged} onChange={()=>setSymbolchanged(!symbolchanged)}></input>
            <label>Symbol</label>
        </div>
        </>
    )
}



const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<PasswordGenerator/>);