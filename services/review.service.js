import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const reviewSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("review"))
);

export const reviewService = {
  review: reviewSubject.asObservable(),
  get reviewValue() {
    return reviewSubject.value;
  },
  getReviewByUser,
  postReview,
};

function getReviewByUser(rev) {
  return fetchWrapper.get(`${baseUrl}/reviews/user/${rev}`).then((docs) => {
    return docs;
  });
}
function postReview(rev) {
  return fetchWrapper.post(`${baseUrl}/reviews`, rev).then((docs) => {
    return docs;
  });
}