import {View, Text,StyleSheet, Image, Button} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function OperationCard({navigation,...props}){
     console.log("Operation Card")

     const handlePress = () => {
          navigation.navigate('Operation', { id: props.pk });
          console.log ("operation id from handlePress in Operation card",props.pk)
      };
      b64img= "data:image/png;base64,"+ props.image
     return (
          <View style={styles.card}>
          <Image
              style={styles.image}
              source={{uri: b64img}}
              resizeMode='contain'
          />
          <View style={styles.container}>
              <Text style={styles.brandTitle}>{props.name}</Text>
              <View style={styles.row}>
                  <Text style={styles.text}>{props.description}</Text>
              </View>
          </View>
          <Button title='View details' onPress={handlePress} />
      </View>
     );
}


const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});