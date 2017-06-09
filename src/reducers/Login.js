/**
 * Created by zll on 2017/6/7.
 */
import { loginSubmit, LOGIN_SUBMIT ,decreaseClick, DECREASE} from '../actions/Login';

const initalState = {
    param: 0,
    values: {}
};

export default function Login(state = initalState, action) {
    debugger;
    const values = state.values;
    switch (action.type) {
        case LOGIN_SUBMIT:
            return { values:action.param };
        case DECREASE:
            // return { count: count - action.param };
        default:
            return state;
    }
}