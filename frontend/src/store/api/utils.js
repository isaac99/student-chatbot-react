// import { groupBy, keyBy } from 'lodash';
// import { store } from '../../containers/Store';
import { authInstance } from '../..';

//NOTE:  urlExtension can be set to /api/ but it works with :3010/ in the container
// const urlExtension = process.env.API_EXTENSION ? process.env.API_EXTENSION : ':3010/';

const isLocalApi = process.env.REACT_APP_API_DEV === 'true' ? true : false;

const urlExtension = '/api/';
const apiProdUrl = `${window.location.protocol}//${window.location.hostname}${urlExtension}`;
const apiDevUrl = 'http://localhost:3010/';
/**
 * @template T
 * @typedef {Object} Success
 * @property {Object<T>} response - The error message thrown
 */

/**
 * @typedef {Object} Error
 * @property {string} error - The error message thrown
 */

/**
 * @function
 * @template T
 * @param  {string} endpoint - the endpoint of /api/
 * @param  {Object} [params={}] - Optional query string params (like date)
 * @param  {string} [API_ROOT=http://localhost/api/] - the root url of the call
 * @returns {(Object.<T>|Error)}
 */

const apiUrl = isLocalApi ? apiDevUrl : apiProdUrl;

export async function callApi(endpoint, params = {}, API_ROOT = apiUrl) {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
  const queryStringIfAny = new URLSearchParams(params); // it's ok for this to be empty.
//   const state = store.getState();
  const IS_AUTH_ENABLED = 'true';
  const redirectUrl = isLocalApi
    ? 'http://localhost:3000/login'
    : `${window.location.protocol}//${window.location.hostname}/login`;

  if (!IS_AUTH_ENABLED || endpoint === 'flags') {
    try {
      const response = await fetch(`${fullUrl}?${queryStringIfAny}`, {});
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return { response: await response.json() };
    } catch (err) {
      return { error: err.message || `Something bad happend trying to fetch ${endpoint}` };
    }
  } else {
    if (!authInstance.authenticated) {
      console.error('Keycloak not authenticated!');
      return;
    }
    try {
      await authInstance.updateToken(30);
    } catch (error) {
      console.error('Failed to refresh token:', error);
    }

    const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
    const queryStringIfAny = new URLSearchParams(params); // it's ok for this to be empty.
    const accessToken = authInstance.token;
    try {
      const response = await fetch(`${fullUrl}?${queryStringIfAny}`, {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return { response: await response.json() };
    } catch (error) {
      return { error: error.message || `Something bad happend trying to fetch ${endpoint}` };
    }
  }
}

export async function postToApi(endpoint, data, API_ROOT = apiUrl) {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
  try {
    const response = await fetch(`${fullUrl}`, {
      method: 'POST',
      body: data && JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return { response: await response.json() };
  } catch (err) {
    return { error: err.message || `Something bad happend trying to fetch ${endpoint}` };
  }
}