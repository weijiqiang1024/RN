/**
 * Created by zll on 2017/6/7.
 */
import { loginSubmit, LOGIN_SUBMIT ,decreaseClick, DECREASE} from '../actions/Login';

const initalState = {
    param: 0,
    count: 0
};

export default function Login(state = initalState, action) {
    const count = state.count;
    switch (action.type) {
        case LOGIN_SUBMIT:
            return { count: count + action.param };
        case DECREASE:
            return { count: count - action.param };
        default:
            return state;
    }
}