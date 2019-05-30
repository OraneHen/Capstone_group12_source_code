import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input, Text, Avatar, Button, ButtonGroup, ListItem, Overlay } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../Actions/actions';

class Profile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            adminEdit:false,
            userEdit:false,
            addfriend: false,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['Events', 'Friends', 'Profile']
        const { selectedIndex } = this.state
        return (
            <ScrollView style={styles.pageContainer}>
                <Overlay height={300} visible={this.state.adminEdit} onBackdropPress={() => this.setState({ adminEdit: false })}>
                    <ScrollView>
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Location:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX Adress, Country'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Email:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='example@email.com'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Digicel:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='876-XXX-XXXX'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>FLOW:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='876-XXX-XXXX'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>WhatsApp:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='876-XXX-XXXX'
                        />
                        <Button
                            containerStyle={styles.editBtnContainer}
                            buttonStyle={styles.editBtn}
                            title={'Submit'}
                            raised={true}
                            onPress={() => { this.setState({ adminEdit: false }) }}
                        />
                    </ScrollView>
                </Overlay>
                <Overlay height={300} visible={this.state.userEdit} onBackdropPress={() => this.setState({ userEdit: false })}>
                    <ScrollView>
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Age:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Location:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XX Adress, Country'
                        />
                        <Text style={{ ...styles.subHeaderFont, marginBottom: 4, marginLeft: 14 }}>Payment Info:</Text>
                        <Input inputContainerStyle={{ marginBottom: 20, height: 40 }}
                            placeholder='XXXX-XXXX-XXXX-XXXX'
                        />
                        <Button
                            containerStyle={styles.editBtnContainer}
                            buttonStyle={styles.editBtn}
                            title={'Submit'}
                            raised={true}
                            onPress={() => { this.setState({ userEdit: false }) }}
                        />
                    </ScrollView>
                </Overlay>
                <View style={styles.avatarContainer}>
                    <ImageBackground source={this.props.image} style={{ width: '100%', height: '100%' }}>
                        <View style={{ ...styles.avatarContainer, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <Avatar
                                size="large"
                                rounded
                                title={this.props.title}
                                source={{ uri: this.props.avatar }}
                            />
                            <Text style={{...styles.headerFont, color: "white"}}>{this.props.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
                {this.props.type === 'EventAdmin' || this.props.type === 'EventAdminOther'?
                    <View style={styles.contentContainer}>
                        <View>
                            <View>
                                <Text style={styles.subHeaderFont}>Bio:</Text>
                                <View style={styles.infoBio}>
                                    <Text>{this.props.bio}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ ...styles.subHeaderFont, marginTop: 30 }}>Info:</Text>
                                <View>
                                    <View style={styles.infoItem}>
                                        <Text>Location:</Text>
                                        <Text>{this.props.location}</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text>Email:</Text>
                                        <Text>{this.props.email}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ ...styles.subHeaderFont, marginTop: 30 }}>Contact:</Text>
                                <View>
                                    {
                                        this.props.contactInfo.map((l,i) => (
                                            <View key={i} style={styles.infoItem}>
                                                <Text>{l.type + ':'}</Text>
                                                <Text>{l.number}</Text>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                        
                        <View style={{ marginBottom: 10, marginTop: 50 }}>
                            {
                                this.props.type === 'EventAdmin' ?
                                    <Button
                                        containerStyle={styles.editBtnContainer}
                                        buttonStyle={styles.editBtn}
                                        title={'Edit'}
                                        raised={true}
                                        onPress={()=>{ this.setState({ adminEdit: true})}}
                                    />
                                    :
                                    <View></View>
                            }
                        </View>
                    </View> 
                    : this.props.type === 'User' || this.props.type === 'Other' ?
                    <View>
                            <ButtonGroup
                                onPress={this.updateIndex}
                                selectedIndex={this.state.selectedIndex}
                                buttons={buttons}
                                containerStyle={{ margin: 0, padding: 0 }}
                            />
                            {this.state.selectedIndex == 0 ?
                                <View style={styles.contentContainer}>
                                    <View>
                                        {
                                            this.props.eventlist.map((l, i) => (
                                                <TouchableOpacity onPress={() => {
                                                    Actions.Event();
                                                }}>
                                                    <ListItem
                                                        key={i}
                                                        leftIcon={
                                                            <Icon
                                                                name='payment'
                                                            />
                                                        }
                                                        title={l.name}
                                                        subtitle={l.subtitle}
                                                        chevron={
                                                            <Icon
                                                                name='keyboard-arrow-right'
                                                            />
                                                        }
                                                    />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </View>
                                :
                                this.state.selectedIndex == 1 ?
                                    <View style={styles.contentContainer}>
                                        <View>
                                            {
                                                this.props.friendlist.map((l, i) => (
                                                    <TouchableOpacity onPress={() => {
                                                        Actions.Profile();
                                                    }}>
                                                        <ListItem
                                                            key={i}
                                                            leftAvatar={{ source: { uri: l.avatar_url } }}
                                                            title={l.name}
                                                            subtitle={l.subtitle}
                                                            chevron={
                                                                <Icon
                                                                    name='keyboard-arrow-right'
                                                                />
                                                            }
                                                        />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                        <View style={{ marginBottom: 10, marginTop: 20 }}>
                                            { 
                                                this.props.type === 'User'?
                                                    <Button
                                                        containerStyle={styles.editBtnContainer}
                                                        buttonStyle={styles.editBtn}
                                                        title={'Add'}
                                                        raised={true}
                                                        onPress={() => { this.setState({ addfriend: true }) }}
                                                    />
                                                    :
                                                    <View></View>
                                            }
                                        </View>
                                    </View>
                                    :
                                    <View style={styles.contentContainer}>
                                        <View>
                                            <View>
                                                <Text style={styles.subHeaderFont}>Interests:</Text>
                                                <ScrollView horizontal={true}>
                                                    <View style={styles.btnRow}>
                                                        {
                                                            this.props.interests.map((l, i) => (
                                                                <Button
                                                                    key={i}
                                                                    containerStyle={styles.interestBtn}
                                                                    buttonStyle={styles.interestBtnSyles}
                                                                    title={l}
                                                                    raised={true}
                                                                />
                                                            ))
                                                        }
                                                    </View>
                                                </ScrollView>
                                            </View>
                                            <View >
                                                <Text style={{ ...styles.subHeaderFont, marginTop: 30 }}>Info:</Text>
                                                <View>
                                                    <View style={styles.infoItem}>
                                                        <Text>Age:</Text>
                                                        <Text>{this.props.age}</Text>
                                                    </View>
                                                    <View style={styles.infoItem}>
                                                        <Text>Location:</Text>
                                                        <Text>{this.props.location}</Text>
                                                    </View>
                                                    <View style={styles.infoItem}>
                                                        <Text>Payment Info:</Text>
                                                        <Text>{this.props.paymentInfo}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                            <View style={{ marginBottom: 10, marginTop: 50 }}>
                                                {
                                                    this.props.type === 'User' ?
                                                        <Button
                                                            containerStyle={styles.editBtnContainer}
                                                            buttonStyle={styles.editBtn}
                                                            title={'Edit'}
                                                            raised={true}
                                                            onPress={() => { this.setState({ userEdit: true }) }}
                                                        />
                                                    :
                                                    <View></View>
                                                }
                                            </View>
                                    </View>
                            }
                    </View>
                    : <View></View>
                    }   
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width:'100%',
        height: '100%',
    },
    avatarContainer:{
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        width: '100%'
    },
    headerFont:{
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10
    },
    subHeaderFont:{
        fontSize: 16,
        marginTop: 10
    },  
    contentContainer:{
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
    btnRow:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    interestBtn:{
        flexGrow: 1,
        flexShrink: 1,
        width: 120,
        borderRadius: 55,
        marginRight: 5
    },
    interestBtnSyles:{
        margin: 0,
        borderRadius: 55
    },
    infoItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editBtn:{
        borderRadius: 4
    }
})

const mapStateToProps = state => {
    return { ...state.Profile.profile, type: state.Profile.type };
};

export default connect(mapStateToProps, actions)(Profile);