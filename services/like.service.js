import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const likesSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("like"))
);
export const likeService = {
  like: likesSubject.asObservable(),
  get likeValue() {
    return likesSubject.value;
  },
  getLikeByItem,
  getifLiked,
  like,
  unlike,
};

function getLikeByItem(item) {
  return fetchWrapper.get(`${baseUrl}/likes/${item}`).then((docs) => {
    return docs;
  });
}
function getifLiked(item) {
  return fetchWrapper.get(`${baseUrl}/likes/user/${item}`).then((docs) => {
    return docs;
  });
}
function like(item) {
  return fetchWrapper.post(`${baseUrl}/likes`, item).then((docs) => {
    return docs;
  });
}

function unlike(item) {
  return fetchWrapper.delete(`${baseUrl}/likes/${item}`).then((docs) => {
    return docs;
  });
}