import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);

export const followService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  getItems,
  getFollows,
  getFollowers,
  followed,
  postfollow,
  unfollow,
};

function getItems() {
  return fetchWrapper.get(`${baseUrl}/follows/items`).then((docs) => {
    return docs;
  });
}
function getFollows(id) {
  return fetchWrapper.get(`${baseUrl}/follows/${id}`).then((docs) => {
    return docs;
  });
}
function getFollowers(id) {
  return fetchWrapper.get(`${baseUrl}/followers/${id}`).then((docs) => {
    return docs;
  });
}
function followed (id) {
  return fetchWrapper.get(`${baseUrl}/follows/users/${id}`).then((docs) => {
    return docs;
  });
}
function postfollow(id) {
  return fetchWrapper.post(`${baseUrl}/follows/`, id).then((docs) => {
    return docs;
  });
}
function unfollow(id) {
  return fetchWrapper.delete(`${baseUrl}/follows/${id}`).then((docs) => {
    return docs;
  });
}