import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Platform, StyleSheet, Text, View } from 'react-native';

import NavBar from './src/components/navBar';
import Login from './src/Pages/login';
import Profile from './src/Pages/profile';
import Event from './src/Pages/event';
import login from './src/Pages/login';
import LandingPage from './src/Pages/landingPage';
import Comment from './src/components/comment';

const RouterComponent = () => {
    return(
        <Router sceneStyle={styles.container}>
            <Stack key="Root">
                <Scene key="Home" component={LandingPage} hideNavBar={true} title="Home" initial />
                <Scene key="Profile" component={Profile} hideNavBar={true} title="Profile" />
                <Scene key="Event" component={Event} hideNavBar={true} title="Event" />
                <Scene key="Login" component={Login} hideNavBar={true} title="Login" />
            </Stack>
        </Router>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default RouterComponent;