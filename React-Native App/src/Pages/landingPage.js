import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, ListView, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { SearchBar, Avatar, Overlay, Text, Input, Button } from 'react-native-elements';
import EventComponent from '../components/event';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../Actions/actions'; 

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            addEvent: false,
        }
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.eventList);
    }

    renderRow(library, rowID) {
        return <EventComponent name={library.name} image={library.image} bio={library.bio} event={Object.values(library)[rowID]} setEvent={() => (this.props.setEvent(Object.values(library)[rowID]))} />
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.pageContainer}>
                <Overlay height={300} visible={this.state.addEvent} onBackdropPress={() => this.setState({ addEvent: false })}>
                    <ScrollView>
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Name:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='EventName'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Info:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder=''
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Location:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX Adress, Country'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Date:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX/XX/XXXX'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Tickets Availible:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Age Restriction:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX+'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Price:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX.XX'
                        />
                        <Button
                            containerStyle={styles.editBtnContainer}
                            buttonStyle={styles.editBtn}
                            title={'Post'}
                            raised={true}
                            onPress={() => { this.setState({ addEvent: false }) }}
                        />
                    </ScrollView>
                </Overlay>
                {
                    this.props.profileType === 'User'?
                        <View style={styles.headerContainer}>
                            <SearchBar
                                placeholder="Type Here..."
                                onChangeText={this.updateSearch}
                                value={search}
                                lightTheme={true}
                                inputContainerStyle={{ borderRadius: 55, height: 44 }}
                                containerStyle={{ backgroundColor: 'white', borderBottomColor: 'white', borderTopColor: 'white', flexGrow: 1 }}
                            />
                            <TouchableOpacity onPress={() => {
                                this.props.setUser('User');
                                Actions.Profile();
                            }}>
                                <Avatar
                                    size={44}
                                    rounded
                                    title={this.props.title}
                                    containerStyle={{ marginRight: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    : this.props.profileType === 'EventAdmin'?
                        <View style={styles.headerContainer}>
                                <TouchableOpacity onPress={() => {
                                    this.props.setUser('EventAdmin');
                                    Actions.Profile();
                                }}>
                                    <Avatar
                                        size={44}
                                        rounded
                                        title={this.props.title}
                                        containerStyle={{ marginLeft: 10 }}
                                    />
                                </TouchableOpacity>
                            <SearchBar
                                placeholder={"Type Here..."}
                                onChangeText={this.updateSearch}
                                value={search}
                                lightTheme={true}
                                inputContainerStyle={{ borderRadius: 55, height: 44 }}
                                containerStyle={{ backgroundColor: 'white', borderBottomColor: 'white', borderTopColor: 'white', flexGrow: 1 }}
                            />
                            <TouchableOpacity onPress={() => {
                                this.setState({ addEvent: true })
                            }}>
                            <Avatar
                                size={44}
                                rounded
                                icon={{ name: 'add', color: 'white' }}
                                overlayContainerStyle={{ backgroundColor: 'grey' }}
                                containerStyle={{ marginRight: 10 }}
                            />
                            </TouchableOpacity>
                        </View>
                    : <View></View>
                }
                <ScrollView>
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        flexGrow:1
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return { ...state.EventList, profileType: state.Profile.profileType, icon: state.Profile.profile.icon, title: state.Profile.profile.title };
};

export default connect(mapStateToProps, actions)(Home);