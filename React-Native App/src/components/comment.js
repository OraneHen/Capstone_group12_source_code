import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements'

import { Actions } from 'react-native-router-flux';

export default CommentComponent = (props) => {
    return (
        <View style={styles.eventContainer}>
            <Card containerStyle={styles.cardContainer}>
                <View style={styles.commentContainer}>
                    <TouchableOpacity onPress={() => {
                        props.setUser('Other');
                        Actions.Profile();
                    }}> 
                        <Avatar
                            size={40}
                            rounded
                            title={props.title}
                            containerStyle={{ marginRight: 10 }}
                            source={{ uri: props.avatar }}
                        />
                    </TouchableOpacity>
                    <View style={{ flexShrink: 1 }}>
                        <Text>{props.name}</Text>
                        <Text style={{ marginBottom: 10, textAlign: 'left'}}>
                            {props.comment}
                    </Text>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    eventContainer:{
        width:'100%',
    },
    cardContainer:{
        marginRight: 0,
        marginLeft: 0
    },
    commentContainer:{
        flexDirection:'row',
        width: '100%',
    }
})