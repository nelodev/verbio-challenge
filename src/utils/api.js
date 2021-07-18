const axios = require('axios').default;

import {API_URL} from './constants';

function login({data, token}) {
  return axios
    .post(
      `http://${API_URL}/login`,
      {...data},
      {
        headers: {
          'content-type': data ? 'application/json' : undefined,
          authorization: token ? `Bearer ${token}` : undefined,
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
    .catch(error => console.log('error', error));
}

export {login, getWelcomeMessage};
