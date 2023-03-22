import React from "react";
import { StyleSheet, View,text } from "react-native";

 const Exercise8 =({text}) => (
    <View style={styles.Square}>
        <Text style={{color: "#fff"}}> {text}</Text>
    </View>
 );

 
    return (
        <View>
        <view style={styles.container}/>
        <view styles={styles.row}>
            <Square text="A"/>
            <Square text="B"/>
            <Square text="C"/>   
        </view>
        <view styles={styles.row}>
             <Square text="D"/>
             <Square text="E"/>
             <Square text="F"/>
        </view>
        <view styles={styles.row}>
            <Square text="H"/>
            <Square text="H"/>
            <Square text="I"/>
        </view>
    </View>
    );


 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#7CA1B4",
        alignItems: "center",
        justifyContent:"center"

    },
    Square:{
        width: 100,
        height:100,
        borderWidth:1,
        borderColor: '#fff',
        justifyContent: "center",
        alignItems:"center"
    },
    row:{
        flexDirection: 'row',
    }
 });