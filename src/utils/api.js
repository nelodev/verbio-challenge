const axios = require('axios').default;

import {API_URL} from './constants';

function login(endpoint, {data, token}) {
  return axios
    .post(
      `http://${API_URL}${endpoint}`,
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

export {login};
