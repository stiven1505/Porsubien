import axios from "axios";
import getConfig from "next/config";

import { userService } from "../services";

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  register,
  postItems,
  update,
};

function get(url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    credentials: "include",
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}
function register(url, body) {
  return axios({
    method: "post",
    url: url,
    data: body,
    headers: { "Content-Type": `multipart/form-data; boundary=${body._boundary}` },
  })
    .then(function (response) {
      //handle success
      return response
    })
    .catch(function (response) {
      //handle error
      return response
    });
}
function update(url, body) {
  return axios({
    method: "put",
    url: url,
    data: body,
    headers: { "Content-Type": `multipart/form-data; boundary=${body._boundary}`, ...authHeader(url) },
  })
    .then(function (response) {
      //handle success
      return response
    })
    .catch(function (response) {
      //handle error
      return response
    });
}

function postItems(url, body) {
  return axios({
    method: "post",
    url: url,
    data: body,
    headers: { "Content-Type": `multipart/form-data; boundary=${body._boundary}`, ...authHeader(url) },
    credentials: "include",
  })
    .then(function (response) {
      //handle success
      return response
    })
    .catch(function (response) {
      //handle error
      return response
    });
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.jwt;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.jwt}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
