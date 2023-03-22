import React, {useState} from "react";
import {Text,View,StyleSheet,Flatlist} from "react-native";

const VerticalColorScreen = ()=>{
    const [colors,setColors]=useState([])
    return
     <View>
        <Flatlist
            data={colors}
            renderItem={(item)=>{
                return <View style={{height: 100, width: 100, backgroundColor:randomRgb()}}/> 

            }}
        />
    </View>
};

const color=()=>{

};