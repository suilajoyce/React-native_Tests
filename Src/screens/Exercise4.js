import React ,{useState, useCallback} from "react";
import {Text,View,Button,} from "react-native";
import Exercise3 from "./Exercise3";
const Hide_show =() =>{
    const [isShow, setIsShow]= React.useState(true);
    const handleClick = ()=>{
        setIsShow(!isShow);
    };
    return (
        <>
         <Exercise3>
          Show/Hide Exercise3
         </Exercise3>
         <button onClick={handleClick}></button>
        </>
    );
};