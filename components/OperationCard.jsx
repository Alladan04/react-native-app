import {View, Text,StyleSheet, Image, Button} from 'react-native';
import React from 'react';

export default function OperationCard(props){
     console.log("Operation Card", props)

     const handlePress = () => {
          navigation.navigate('Operation', { id: props.id });
      };
     return (
          <View style={styles.card}>
          <Image
              style={styles.image}
              source={"data:image/png;base64,"+props.image}
              resizeMode='contain'
          />
          <View style={styles.container}>
              <Text style={styles.brandTitle}>{props.name}</Text>
              <View style={styles.row}>
                  <Text style={styles.text}>{props.name}</Text>
                  <Text style={styles.text}>{props.name} р.</Text>
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