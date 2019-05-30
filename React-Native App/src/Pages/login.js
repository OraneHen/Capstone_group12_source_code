import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, SocialIcon } from 'react-native-elements';

export default Login = (props) => {
    return (
        <View style={styles.pageContainer}>
            <Input
                containerStyle={styles.inputField}
                placeholder='Username'
                leftIcon={
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
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                }
            />
            <Button
                title="Login"
            />
            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer:{

    },
    Button:{
        
    },
    inputField: {
        minWidth: "80%",
        padding: 10
    },
    font: {
        fontSize: 60,
        textAlign: 'center',
        color: '#000'
    }
})