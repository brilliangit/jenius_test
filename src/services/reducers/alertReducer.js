import * as CONFIG from '../../configs/constant';
const initialState = {
    type: 'reset',
    code: null,
    message: ''
}

const alertReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case CONFIG.ALERT_SUCCESS:
            return {
                type: 'success',
                code: payload.code,
                message: payload.message
            }
        case CONFIG.ALERT_INFO:
            return {
                type: 'info',
                code: payload.code,
                message: payload.message
            }
        case CONFIG.ALERT_DANGER:
            return {
                type: 'danger',
                code: payload.code,
                message: payload.message
            }
        case CONFIG.ALERT_RESET:
            return {
                type: 'reset',
                code: null,
                message: ''
            }

        default:
            return state
    }
}

export default alertReducer
