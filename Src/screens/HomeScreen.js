import React from "react";
import { Button } from "react-native";
import { Text, StyleSheet,View, Button } from "react-native/types";
import Exercise1 from "./Exercise1";
 const HomeScreen =()=>{
    return <View>
        <Button
        title="Exercise1"
        onPress={()=>navigation.navigate("Exercise1")}
        />
        <Button
        title="Exercise2"
        onPress={()=>navigation.navigate("Exercise2")}
        />
        <Button
        title="Exercise3"
        onPress={()=>navigation.navigate("Exercise3")}
        />
    </View>
 };
 const style=StyleSheet.create({
    Homestyle:{
        fontSize:20,

    }
 });
 export default HomeScreen;
