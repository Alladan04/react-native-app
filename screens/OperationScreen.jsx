import { View, Text, Button } from 'react-native';
//import React from 'react';

import { useDispatch,  useSelector} from 'react-redux';
import { setOperation,resetOperation } from '../store/OperationListSlice';

import { useEffect } from 'react';
import axios from 'axios';
export default function OperationScreen({ route}) {
    const dispatch = useDispatch();
    const { id } = route.params;
     console.log("Operation screen");
     const {operation} = useSelector((store)=>store.operation);
   
     useEffect(()=>{
        function getOperaiton(){
             console.log("in use 1 operation effect")
            ///await axiosInstance.get('operation/')
            axios.get(`http://192.168.152.60:8000/operation/${id}`)
             .then((response)=>{
                  console.log("got 1 operattion data");
                 dispatch(setOperation(response?.data.data))})
             .catch(function(err){
                  console.log("got error in 1 operation useeffect", err)
             });
        }
        getOperaiton();
        return ()=>{
        dispatch(resetOperation());
        };
    }, [dispatch]);

    return (
        <View>
            <Text>1 Operation Screen</Text>
           <Text>Operation  {operation.name}</Text>
        </View>
    );
}

