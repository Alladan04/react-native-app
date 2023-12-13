import { View, Text, Button } from 'react-native';
import React from 'react';

export default function OperationScreen({ navigation }) {
     console.log("Operation list screen");
    return (
        <View>
            <Text>OperationListScreen</Text>
            <Button title='Go to Operation screen' onPress={() => navigation.navigate('Operation')} />
        </View>
    );
}
