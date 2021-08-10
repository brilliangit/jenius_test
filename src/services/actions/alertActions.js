import * as CONF from '../../configs/constant';

export const setAlertSuccess = (code, message) => {
    return dispatch => {
        dispatch({ type: CONF.ALERT_SUCCESS, payload: { code: code, message: message } })
    }
}
export const setAlertInfo = (code, message) => {
    return dispatch => {
        dispatch({ type: CONF.ALERT_INFO, payload: { code: code, message: message } })
    }
}
export const setAlertDanger = (code, message) => {
    return dispatch => {
        dispatch({ type: CONF.ALERT_DANGER, payload: { code: code, message: message } })
    }
}
export const resetAlert = () => {
    return dispatch => {
        dispatch({ type: CONF.ALERT_RESET })
    }
}