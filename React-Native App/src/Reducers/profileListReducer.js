export const profileList = (state = {
    profileList: [
        {
            name: 'John Doe',
            profileType: 'EventAdmin',
            subtitle: 'Vice President',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contactInfo: [
                {
                    type: 'Digicel',
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
            title: 'JD',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            location: 'Rivinia 5, Kingston, Jamaica',
        },
        {
            name: 'Alex Johnson',
            profileType: 'EventAdmin',
            subtitle: 'Vice President',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contactInfo: [
                {
                    type: 'Digicel',
                    number: '876-543-4567'
                },
                {
                    type: 'Lime',
                    number: '876-987-7361'
                },
                {
                    type: 'WhatsApp',
                    number: '876-993-6752'
                },
            ],
            email: 'alexH@hoster.com',
            title: 'AH',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
            location: 'Northbond 8, Kingston, Jamaica',
        },
        {
            name: 'John Doe',
            profileType: 'User',
            subtitle: 'Vice President',
            title: 'JD',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            age: 25,
            location: 'Bestlane 5, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-1723',
            eventlist: [2,4],
            friendlist: [0,2,3],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Alex Johnson',
            profileType: 'User',
            subtitle: 'Vice President',
            title: 'AJ',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
            age: 28,
            location: 'Bestlane 5, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-1723',
            eventlist: [2,4],
            friendlist: [0,2,3],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Jane Doe',
            profileType: 'User',
            subtitle: 'Vice President',
            title: 'JD',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            age: 25,
            location: 'Bestlane 5, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-1723',
            eventlist: [2,4],
            friendlist: [0,2,3],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Nina Park',
            profileType: 'User',
            subtitle: 'President',
            title: 'NP',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
            age: 18,
            location: 'SmithVille 67, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-2334',
            eventlist: [1,4,5],
            friendlist: [2,4,5],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Nathan Grey',
            profileType: 'User',
            subtitle: 'Instructor',
            title: 'NG',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
            age: 14,
            location: 'Nappytown 12, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-5422',
            eventlist: [2,4,5],
            friendlist: [2,4,5],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Bob Newman',
            profileType: 'User',
            subtitle: 'Baker',
            title: 'BN',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
            age: 35,
            location: 'Greatspan 15, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-1345',
            eventlist: [2,4],
            friendlist: [2,3,4],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
        {
            name: 'Robert Doe',
            profileType: 'User',
            subtitle: 'Planner',
            title: 'RD',
            background: require('../static/image.jpg'),
            icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
            age: 25,
            location: 'Bestlane 5, Kingston, Jamaica',
            paymentInfo: 'XXXX-XXXX-XXXX-9862',
            eventlist: [2,7],
            friendlist: [2,3,4,5],
            interests: [
                'Music', 'Parties', 'Outdoor', 'Gaming', 'Sports', 'Educational'
            ],
        },
    ],
}, action) => {
    switch (action.type) {
        case "UPDATE_PROFILELIST":
            return {
                ...state,
                ...action.value
            }
        default:
            return state
    }
}