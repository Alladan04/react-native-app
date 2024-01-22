import { View, Text, Button } from 'react-native';
//import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch,  useSelector} from 'react-redux';
import { setOperation,resetOperation } from '../store/OperationListSlice';
import { ScreenContainer} from 'react-native-screens';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { ImageBackground, Image, TouchableOpacity, Feather, FontAwesome} from 'react-native';
import axios from 'axios';


const HOST = "http://192.168.0.114:8000"
export  default function OperationScreen({ route}) {
    const dispatch = useDispatch();
    const { id } = route.params;
    console.log(id);
     console.log("Operation screen");
     const {operation} = useSelector((store)=>store.operation);
     //console.log(operation)
     useEffect(()=>{
        function getOperaiton(){
             console.log("in use 1 operation effect")
            ///await axiosInstance.get('operation/')
            const url = HOST+"/operation/"+id+"/";
             axios.get(url)
             .then((response)=>{
                //console.log(response.data)
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
    b64img= "data:image/png;base64,"+ operation.image;
    //console.log(operation);
    //console.log ("Image",operation.image);
    //console.log(operation.data)
    //const operation_data = operation.data;
    //console.log(operation_data)
    return (
        <View style={styles.container}>
         <View style={styles.header}>
         </View>
        
            <Image style={styles.myimage}
              source={{uri: b64img}}
              resizeMode='contain'>
            </Image>
       
          <ScrollView style={styles.cont3}>
            <Text style={styles.title}>Операция</Text>
            <Text style={styles.subtitle}>{operation.name}</Text>
            <Text style={styles.text}>
            {operation.description}
            </Text>
            <View style={styles.cont1}>
            <TouchableOpacity
            style={styles.btn}
            
          >
            <Text style={styles.btnText}>Добавить в заявку</Text>
          </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
}


const styles = StyleSheet.create({
 
    container: {
        flexWrap:'no-wrap',
        flex: 1,
        backgroundColor:'#303030',
        alignItems:'center',
        justifyContent:'center',
        
      },
    title: {
      fontSize: 25,
      marginTop: 30,
      color:'white',
    },
    subtitle: {
      fontSize: 20,
      color: "#474747",
      marginTop: 10,
      color:'white',
      
    },
    text: {
       
      fontSize: 18,
      paddingRight:2,
      lineHeight: 25,
      color:'white',
    },
    btn: {
      backgroundColor: '#fb09b2',
      paddingHorizontal: 60,
      paddingVertical: 12,
      borderRadius: 30,
      margin: 10
    },
    btnText: {
      
      fontSize: 20,
      color: "#FFF",
    },
    cont1: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 40,
    },

    selected: {
      borderColor: "#E2443B",
      height: 30,
      width: 30,
      borderRadius: 24,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    cont2: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginVertical: 25,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: 20,
      paddingTop: 50,
      backgroundColor:'#fb09b2',
    },
 
    img: {
      height: "45%",
      width: "50%",
    },
    cont3: {
      
      flex: 1,
      backgroundColor: "#303030",
      width: "100%",
      paddingHorizontal: 20,
    },
    myimage: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
       backgroundColor:"#fb09b2",
        alignSelf: 'stretch',
      },
  });
/*
const styles = StyleSheet.create({
    container: {
        flexWrap:'no-wrap',
        flex: 1,
        backgroundColor:'#303030',
        alignItems:'center',
        justifyContent:'center',
      },
      image: {
       
        width:'100%',
        flex: 1,
        justifyContent: 'center',
       
        alignSelf: 'stretch',
      },
      text: {
        color: 'white',
        backgroundColor:'#fb09b2',
        width:'100%',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
       
      },
    
      descriptionText: {
        marginHorizontal:'2%',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify'
       
      },
});

  return (
        <View style = {styles.container}>
          
        <Text style = {styles.text}> Операция {operation.name}</Text>
     
        <ImageBackground source={operation.image} resizeMode="contain" style={styles.image}>
            <Image style={styles.image}
              source={{uri: b64img}}
              resizeMode='contain'>
            </Image>
        </ImageBackground>
       
        <Text style = {styles.descriptionText}>{operation.description}</Text>
        </View>
    );
*/