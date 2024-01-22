

import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { axiosInstance } from "../API";
import {setOperations, setText} from '../store/OperationListSlice';
import OperationCard from "../components/OperationCard";

import { ScrollView, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import axios from "axios";
import { Feather, Entypo } from "@expo/vector-icons";

const HOST = "http://192.168.0.114:8000"
export default function OperationListScreen({navigation}){
     console.log("operation list screen")
     const dispatch = useDispatch();
     const {operations} = useSelector((store)=>store.operation);
     const {text} = useSelector((store)=>store.operation);
     const [input, setInput] = useState("");
    
     //console.log(text)
     useEffect(()=>{
          async function getAllOperaitons(){
               console.log("in use effect, searching for", text)
              ///await axiosInstance.get('operation/')
               axios.get(HOST+ "/operation/?text="+text)
               .then((response)=>{
                    console.log("got data");
                   dispatch(setOperations(response?.data.data))})
               .catch(function(err){
                    console.log("got error", err)
               });
          }
          getAllOperaitons();
     }, [dispatch,text]);

     
     //const [submit_text, setSubmit] = useState("");
     
     //console.log("input text is", input)
     const SubmitFunc = ()=>{
          console.log ("SUBMITTED!")
          dispatch(setText(input))};

     return (
          <ScrollView style = {styles.scrollv}>
                <View style = {styles.container}>
           {/* search Icon */}
           <Feather
             name="search"
             size={20}
             color="black"
             style={{ marginLeft: 1 }}
           />
           {/* Input field */}
           <TextInput
             style={styles.input}
             placeholder="Поиск"
             value={input} 
             onChangeText={(text)=>setInput(text)} 
             onSubmitEditing={SubmitFunc}
           />
         </View>
         
          <View style= {styles.page}>
               {!!operations && operations.map((operation)=><OperationCard key = {operation.id} {...operation} navigation = {navigation}></OperationCard>)}
          </View>
               </ScrollView>
          
     )
}
const styles = StyleSheet.create({
     scrollv:{
          backgroundColor:'#ffff',
     },
     page: {
         display: 'flex',
         width: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'white',
     },
     container: {
          color:'white',
          backgroundColor:'white',
          margin: 15,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
      
        },
        searchBar__unclicked: {
          padding: 10,
          flexDirection: "row",
          width: "95%",
          backgroundColor: "#d9dbda",
          borderRadius: 15,
          alignItems: "center",
        },
        searchBar__clicked: {
          padding: 10,
          flexDirection: "row",
          width: "80%",
          backgroundColor: "#d9dbda",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "space-evenly",
        },
        input: {
          fontSize: 20,
          marginLeft: 10,
          width: "90%",
        },
 });