import * as CONFIG from '../../configs/constant';

export const getListContact = () => async dispatch => {
  await fetch('https://simple-contact-crud.herokuapp.com/contact')
    .then(response => response.json())
    .then(res => {
      dispatch({ type: CONFIG.GET_LIST_CONTACT, data: res.data });
    })
    .catch(err => console.log('error', err));
};

export const getListContactById = payload => async dispatch => {
  await fetch(`https://simple-contact-crud.herokuapp.com/contact/${payload}`)
    .then(response => response.json())
    .then(res => {
      dispatch({ type: CONFIG.GET_CONTACT_BY_ID, dataById: res.data });
    })
    .catch(err => {
      dispatch({ type: CONFIG.ALERT_DANGER, payload: { code: 500, message: err } })
    });
};

export const resetDetail = () => {
  return dispatch => {
    dispatch({ type: CONFIG.RESET_CONTACT_BY_ID })
  }
}

export const createContact = (payload) => async dispatch => {
  await fetch('https://simple-contact-crud.herokuapp.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: CONFIG.ALERT_SUCCESS, payload: { code: 201, message: data.message } })
    })
    .catch((error) => {
      dispatch({ type: CONFIG.ALERT_DANGER, payload: { code: 500, message: error } })
    });
};

export const updateContact = (id, payload) => async dispatch => {
  await fetch('https://simple-contact-crud.herokuapp.com/contact/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: CONFIG.ALERT_SUCCESS, payload: { code: 201, message: data.message } })
    })
    .catch((error) => {
      dispatch({ type: CONFIG.ALERT_DANGER, payload: { code: 500, message: error } })
    });
};
export const deleteContact = (id) => async dispatch => {
  fetch('https://simple-contact-crud.herokuapp.com/contact/' + id, {
    method: 'DELETE',
  })
    .then(res => res.json()) // or res.json()
    .then(res => {
      dispatch({ type: CONFIG.ALERT_SUCCESS, payload: { code: 201, message: res.message } })
    })
    .catch((error) => {
      dispatch({ type: CONFIG.ALERT_DANGER, payload: { code: 500, message: error } })
    });
};
