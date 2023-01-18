import { authHeader } from "./auth-header";
function get(url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    credentials: "same-origin",
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function patch(url, body, multipart) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(multipart),
    body: multipart ? body : JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions
function handleResponse(response) {
  return response.text().then((text) => {
    try {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          const error = { code: response.status, detail: response.statusText };
          return Promise.reject(error);
        }
        const error = {
          code: (data && data.code) || response.status,
          detail: (data && data.detail) || response.statusText,
          data,
        };

        return Promise.reject(error);
      }

      return data;
    } catch (e) {
      const error = { code: 500, detail: "something went wrong" };
      return Promise.reject(error);
    }
  });
}

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
};
