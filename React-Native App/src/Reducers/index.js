import { combineReducers } from 'redux';
import { profile } from './profileReducer';
import { event } from './eventReducer';
import { eventList } from './eventListReducer';
import { profileList } from './profileListReducer';

export default combineReducers({
    Event: event,
    Profile: profile,
    EventList: eventList,
    ProfileList: profileList
});