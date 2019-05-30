export const event = (state = {
    event: {
        name: '38th Annual Mill Valley Wine, Beer & Gourmet Food Tasting Festival ',
        subHeader: 'Dragon Lounge',
        image: require('../static/image3.jpg'),
        info: 'the 38th Annual Mill Valley Wine, Beer and Gourmet Food Tasting returns to the Downtown Plaza, with proceeds going to Kiddo!, the Mill Valley Schools Community Foundation and the Mill Valley Chamber.',
        location: '85 Throckmorton Avenue, Kingston, Jamaica',
        date: '12/6/2019',
        tickets: '150',
        ageRestriction: '18+',
        price: '1500.00',
        friendList: [
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
            },
        ],
        commentList: [
            {
                title: 'AF',
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                comment: 'North Bay events brings together all the best aspects of Throckmorton',
                likes: 6
            },
            {
                title: 'CJ',
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                comment: 'Literally can\'t wait' ,
                likes: 0
            },
        ]

    }
}, action) => {
    switch (action.type) {
        case "UPDATE_EVENT":
            return {
                ...state,
                event: {
                    ...state.event,
                    ...action.value
                }
            }
        case 'SET_EVENT':
            return {
                ...state,
                event: value
            }
        default:
            return state
    }
}