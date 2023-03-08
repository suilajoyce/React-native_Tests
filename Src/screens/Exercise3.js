import React from "react";
import {Text, StyleSheet,View, FlatList}from "react-native";

const Exercise3 =()=>{
    const cities=[
        {name:'Mumbai'},
        {name:'New York'},
        {name:'Los Angeles'},
        {name:'Chicago'},
        {name:'Houston'},
        {name:'Phoenix'},
        {name:'Philadelphia'},
        {name:'London'},
        {name:'Birmingham'},
    ];
    return(
        <View style={stles.Exo3style}>
          <FlatList
        keyExtractor={(cities)=>cities.name}
        data = {cities}
        renderItem={(item)=>{
            return <Text>{cities.name}</Text>
        }
        }
        />   
        </View>
    );
};
const stles=StyleSheet.create({
    Exo3style:
    {
        fontSize:20,
        backgroundColor:navy,
        color:yellow,
        borderBottomEndRadius:20,
        marginVertical:20,
    }
});
export default Exercise3;