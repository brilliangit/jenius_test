import * as CONF from '../../configs/constant';

const initState = {
  data: [],
  dataById: {},
};

const contactReducer = (state = initState, payload = {}) => {
  switch (payload.type) {
    case CONF.GET_LIST_CONTACT:
      return {
        ...state,
        data: payload.data,
      };
    case CONF.GET_CONTACT_BY_ID:
      return {
        ...state,
        dataById: payload.dataById,
      };
    case CONF.RESET_CONTACT_BY_ID:
      return {
        ...state,
        dataById: {},
      };

    default:
      return state;
  }
};

export default contactReducer;
