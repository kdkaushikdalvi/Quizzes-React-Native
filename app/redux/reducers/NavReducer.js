import { SET_NAVIGATION } from '../actions/Constants';

const INITIAL_STATE = {
    rootNavigation: {},
}

export default (state = INITIAL_STATE, action = {}) => {

    switch (action.type) {
        case SET_NAVIGATION:
            let newState = {...state, [action.data.navigationType]: action.data.navigationRoute}
            return newState;

        default:
            return state;
    }
}