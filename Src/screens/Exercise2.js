import React from "react";
import {Text, StyleSheet,View, FlatList}from "react-native";

const Exercise2 =()=>{
   const ProgrammingLanguages=[
    {language:"C"},
    {language:"C++"},
    {language:"Java"},
    {language:"JavaScript"},
    {language:"Go"},
    {language:"Kotlin"},
    {language:"Swift"},
   ];
    return (
        <View style={Exo2style.List2style}>
           <FlatList
        vertical
        keyExtractor={ProgrammingLanguages.language}
        data= {ProgrammingLanguages}
        renderItem={(item)=>
            {
                return <Text>{ProgrammingLanguages.language}</Text>
            }
        }
        />  
        </View>
    );
};
const Exo2style=StyleSheet.create({
    List2style:{
        fontSize:21,
        backgroundColor:yellow,
        marginVertical:10,
    }
});
export default Exercise2;