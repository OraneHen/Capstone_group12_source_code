import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input, Text, Avatar, Button, ButtonGroup, ListItem, Overlay } from 'react-native-elements';
import Comment from '../components/comment';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../Actions/actions';

const qr = require("../static/frame.png");

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            commentVis: false,
            eventEdit: false,
            ticketVis: false,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['Info', 'Comments', 'Interested']
        const { selectedIndex } = this.state
        return (
            <ScrollView style={styles.pageContainer}>
                <Overlay height={300} visible={this.state.commentVis} onBackdropPress={() => this.setState({ commentVis: false })}>
                    <ScrollView>
                        <View style={{ minHeight: 200, flexDirection: 'column', justifyContent: 'space-between'}}> 
                        <View style={{flexGrow: 1}}>
                            <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Comment:</Text>
                            <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                                placeholder='Add Comment Here'
                            />
                        </View>
                        <Button
                            containerStyle={styles.editBtnContainer}
                            buttonStyle={styles.editBtn}
                            title={'Post'}
                            raised={true}
                            onPress={() => { this.setState({ commentVis: false }) }}
                        />
                        </View>
                    </ScrollView>
                </Overlay>
                <Overlay height={600} visible={this.state.ticketVis} onBackdropPress={() => this.setState({ ticketVis: false })}>
                    <ScrollView>
                        <View style={{ minHeight: 400, flexDirection: 'column', justifyContent: 'space-between'}}> 
                            <ImageBackground source={require("../static/frame.png")} style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '90%' }}>
                        </ImageBackground>
                        </View>
                    </ScrollView>
                </Overlay>
                <Overlay height={300} visible={this.state.eventEdit} onBackdropPress={() => this.setState({ eventEdit: false })}>
                    <ScrollView>
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
                            title={'Submit'}
                            raised={true}
                            onPress={() => { this.setState({ eventEdit: false }) }}
                        />
                    </ScrollView>
                </Overlay>
                <View style={styles.avatarContainer}>
                    <ImageBackground source={this.props.image} style={{ ...styles.avatarContainer, width: '100%', height: '100%' }}>
                        <View style={{ ...styles.eventTitle, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <View>
                                <View style={{ maxWidth: "87%" }}><Text style={{ ...styles.headerFont, color: 'white'}}>{this.props.name}</Text></View>
                                <TouchableOpacity onPress={() => {
                                    this.props.setUser('EventAdminOther')
                                    Actions.Profile();
                                }}>
                                    <Text style={{ ...styles.subHeaderFont, color: 'white'}}>{this.props.subHeader}</Text>
                                </TouchableOpacity>
                            </View>
                            {this.props.profileType=='User'?
                                <TouchableOpacity onPress={() => {

                                }}>
                                    <Avatar
                                        size="medium"
                                        rounded
                                        icon={{ name: 'thumb-up', color: 'grey' }}
                                        overlayContainerStyle={{ backgroundColor: '#F8F8F8' }}
                                    />
                                </TouchableOpacity>
                                :<View></View>
                            }
                        </View>
                    </ImageBackground>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={buttons}
                    containerStyle={{ margin: 0, padding: 0 }}
                />
                {this.state.selectedIndex == 0 ?
                    <View style={styles.contentContainer}>
                        <View>
                            <View>
                                <Text style={{ ...styles.subHeaderFont, marginTop: 30 }}>Info:</Text>
                                <View>
                                    <View style={{...styles.infoBio, testAlign:'justify'}}>
                                        <Text>{this.props.info}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Location:</Text>
                                        <Text>{this.props.location}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Date:</Text>
                                        <Text>{this.props.date}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Tickets Availible:</Text>
                                        <Text>{this.props.tickets}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Age Restriction:</Text>
                                        <Text>{this.props.ageRestriction}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Price:</Text>
                                        <Text>{this.props.price}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {this.props.profileType === 'User'? 
                            <View style={{ marginBottom: 10, marginTop: 50 }}>
                                <Button
                                    containerStyle={styles.editBtnContainer}
                                    buttonStyle={styles.editBtn}
                                    title={'Purchase'}
                                    raised={true}
                                    onPress={() => { this.setState({ ticketVis: true})}}
                                />
                            </View>
                        : this.props.profileType === 'EventAdmin'?
                            <View style={{ marginBottom: 10, marginTop: 50 }}>
                                <Button
                                    containerStyle={styles.editBtnContainer}
                                    buttonStyle={styles.editBtn}
                                    title={'Edit'}
                                    raised={true}
                                    onPress={() => { this.setState({ eventEdit: true }) }}
                                />
                            </View>
                        : <View></View>
                        }
                    </View>
                    :
                    this.state.selectedIndex == 1 ?
                        <View style={styles.contentContainer}>
                            <View>
                                {
                                    this.props.commentList.map((l, i) => (
                                        <Comment
                                            title={l.title}
                                            avatar={l.avatar_url}
                                            name={l.name}
                                            comment={l.comment}
                                            setUser = { () => (this.props.setUser('Other'))}
                                        />
                                    ))
                                }
                            </View>
                            <View style={{ marginBottom: 10, marginTop: 20 }}>
                                <Button
                                    containerStyle={styles.editBtnContainer}
                                    buttonStyle={styles.editBtn}
                                    title={'Comment'}
                                    raised={true}
                                    onPress={() => { this.setState({ commentVis: true }) }}
                                />
                            </View>
                        </View>
                        :
                        <View style={styles.contentContainer}>
                            <View>
                                {
                                    this.props.friendList.map((l, i) => (
                                        <TouchableOpacity onPress={() => {
                                            this.props.setUser('Other');
                                            Actions.Profile();
                                        }}>
                                        <ListItem
                                            key={i}
                                            leftAvatar={{ source: { uri: l.avatar_url } }}
                                            title={l.name}
                                            subtitle={l.subtitle}
                                        />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%'
    },
    avatarContainer: {
        height: 400,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: 'grey',
        width: '100%'
    },
    eventTitle:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    headerFont: {
        fontSize: 24,
        textAlign: 'left',
        marginTop: 2
    },
    subHeaderFont: {
        fontSize: 16,
        marginTop: 2
    },
    contentContainer: {
        flexGrow: 1,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    font: {
        fontSize: 60,
        textAlign: 'center',
        color: '#000'
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    interestBtn: {
        flexGrow: 1,
        flexShrink: 1,
        maxWidth: 120,
        borderRadius: 55
    },
    interestBtnSyles: {
        margin: 0,
        borderRadius: 55
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editBtn: {
        borderRadius: 4
    }
})

const mapStataeToProps = state => {
    return { ...state.Event.event, profileType: state.Profile.profileType }
}

export default connect(mapStataeToProps, actions)(Event);