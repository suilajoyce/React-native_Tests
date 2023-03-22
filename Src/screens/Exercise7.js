import React from "react";
import { StyleSheet,View, Text } from "react-native";

const Exercise7=()=>{
    return <View>
        <>
            <view style={StyleSheet.container}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
            <view style={styles.Square}/>
        </>
    </View>
};
const styles=StyleSheet.create({
    container:{
        backgroundColor:"blue",
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    Square:{
        backgroundColor: "blue",
        width: 100,
        height: 100,
        margin: 4
    }
});