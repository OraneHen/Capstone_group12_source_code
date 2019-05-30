export const profile = (state = {
    //profileType:'EventAdmin',
    profileType:'User',
    type:'',
    id:0,
    profile:{
        name:'Amy Farha',

        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contactInfo: [
            {
                type:'Digicel',
                number: '876-123-4567'
            },
            {
                type: 'Lime',
                number: '876-987-7654'
            },
            {
                type: 'WhatsApp',
                number: '876-234-6752'
            },
        ],
        email: 'event@hoster.com',

        title: 'AF',
        background: require('../static/image.jpg'),
        icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        age: 25,
        location: 'Rivinia 5, Kingston, Jamaica',
        paymentInfo: 'XXXX-XXXX-XXXX-2536',
        eventlist: [
            {
                name: 'Event 1',
                subtitle: '982537886152134'
            },
            {
                name: 'Event 2',
                subtitle: '162434571726354'
            },
            {
                name: 'Event 3',
                subtitle: '982537886152134'
            },
            {
                name: 'Event 4',
                subtitle: '162434571726354'
            },
            {
                name: 'Event 5',
                subtitle: '982537886152134'
            },
            {
                name: 'Event 6',
                subtitle: '162434571726354'
            },
            {
                name: 'Event 7',
                subtitle: '982537886152134'
            },
            {
                name: 'Event 8',
                subtitle: '162434571726354'
            },
            {
                name: 'Event 9',
                subtitle: '982537886152134'
            },
            {
                name: 'Event 10',
                subtitle: '162434571726354'
            }
        ],
        friendlist: [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }
        ],
        interests: [
            'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
        ],
    }
}, action) => {
    switch(action.type){
        case 'UPDATE_PROFILE':
        return{
            ...state,
            profile:{
                ...state.profile,
                ...action.value
            }
        }
        case 'SET_USER_TYPE':
        return{
            ...state,
            type: action.value
        }
        default:
            return state
    }
}