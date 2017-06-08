/**
 * Created by zll on 2017/6/7.
 */
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const DECREASE = 'DECREASE';


export function loginSubmit(param) {
    return {
        type: LOGIN_SUBMIT,
        param:param
    }
}

export function decreaseClick(param) {
    return {
        type: DECREASE,
        param:param
    }
}