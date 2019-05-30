import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default navBar = (props) => {
    return (
        <View style={styles.navContainer}>
            <Text>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8%',
        alignSelf: 'flex-start',
        backgroundColor: '#F5FCFF',
        shadowColor:'#000',
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.5,
        elevation: 2
    },
    font:{
        fontSize: 60,
        textAlign: 'center',
        color: '#000'
    }
})