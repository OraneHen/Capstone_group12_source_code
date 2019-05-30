import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default Login = (props) => {
    return (
        <View style={styles.pageContainer}>
            <Input
                containerStyle={styles.inputField}
                placeholder='Username'
                rightIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                containerStyle={styles.inputField}
                placeholder='Password'
                rightIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Button
                title="Login"
            />
            <Button
                title="Login with google"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {

    },
    inputField: {
        width: "20%"
    },
    font: {
        fontSize: 60,
        textAlign: 'center',
        color: '#000'
    }
})