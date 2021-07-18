const axios = require('axios').default;

import {API_URL} from './constants';

function login({data, token}) {
  return axios
    .post(
      `http://${API_URL}/login`,
      {...data},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(({data}) => ({success: true, ...data}))
    .catch(() => ({success: false}));
}

function getWelcomeMessage({token}) {
  return axios
    .get(`http://${API_URL}/getWelcomeMessage`, {
      data: {},
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(({data}) => data.response)
    .catch(() => null);
}

function postMessage({message, token}) {
  return axios
    .post(
      `http://${API_URL}/sendMessage`,
      {
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(({data}) => data.response)
    .catch(() => null);
}

export {login, getWelcomeMessage, postMessage};
