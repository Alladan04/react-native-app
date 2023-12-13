

import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from "react";
import { axiosInstance } from "../API";
import {setOperations} from '../store/OperationListSlice';
import OperationCard from "../components/OperationCard";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import axios from "axios";
export default function OperationListScreen({navigation}){
     console.log("operation list screen")
     const dispatch = useDispatch();
     const {operations} = useSelector((store)=>store.operation);

     useEffect(()=>{
          async function getAllOperaitons(){
               console.log("in use effect")
              ///await axiosInstance.get('operation/')
               axios.get("http://192.168.152.60:8000/operation/")
               .then((response)=>{
                    //console.log(response?.data.data);
                   dispatch(setOperations(response?.data.data))})
               .catch(function(err){
                    console.log("got error", err.response.data)
               });
          }
          getAllOperaitons();
     }, [dispatch]);
     return (
          <ScrollView>
          <View>
               {!!operations && operations.map((operation)=><OperationCard key = {operation.id} {...operation}></OperationCard>)}
          </View>
               </ScrollView>
          
     )
}
const styles = StyleSheet.create({
     page: {
         display: 'flex',
         width: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#2a2a2a',
     },
 });