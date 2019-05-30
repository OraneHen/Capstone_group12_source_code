import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity  } from 'react-native';
import { Card } from 'react-native-elements'

import { Actions } from 'react-native-router-flux';

export default EventComponent = (props) => {
    return (
        <TouchableOpacity onPress={() => {
            Actions.Event();
        }}>
        <View style={styles.eventContainer}>
            <Card
                imageStyle={{height:300}}
                image={props.image}>
                <Text>{props.name}</Text>
                <Text style={{ marginBottom: 10 }}>
                    {props.bio}
                </Text>
            </Card>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
})