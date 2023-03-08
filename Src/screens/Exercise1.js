import React from "react";
import { Text,StyleSheet,FlatList,View} from "react-native";

const Exercise1 =() =>{
    const Friends=[
        {name:'Chinu',Age:'10'},
        {name:'Tony',Age:'11'},
        {name:'harvard',Age:'12'},
        {name:'Stark',Age:'13'},
        {name:'captian',Age:'14'},
        {name:'Rogers',Age:'15'},
        {name:'Winter',Age:'16'},
        {name:'Payback',Age:'17'},
    ];
    return (
        <View style={style.Exo1style}>
             <FlatList
             keyExtractor={Friends.name}
             data= {Friends}
             renderItem={(item)=>
                {
                    return <Text>Name is :{item.name}, Age is :{item.Age}</Text>
                }
            }
             />
             <Text>Id is :1</Text>
        </View>
    );
};
const style=StyleSheet.create({
    Exo1style:
    {
        fontSize:20,
        borderBottomEndRadius:15,
        borderColor:blue,
        color:blue
    }
});
export default Exercise1;