import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const blogSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("blog"))
);

export const blogService = {
  blog: blogSubject.asObservable(),
  get blogValue() {
    return blogSubject.value;
  },
  getBlogByUser,
  newBlog,
  postBlog,
  deleteBlog,
  searchBlog,
  updateBlog,
};

function getBlogByUser(user) {
  return fetchWrapper.get(`${baseUrl}/blogs/user/${user}`).then((docs) => {
    return docs;
  });
}
function newBlog(blog) {
  blogSubject.next(blog);
  localStorage.setItem("blog", JSON.stringify(blog));
}

function postBlog(blog) {
  return fetchWrapper
    .postItems(`${baseUrl}/blogs`, blog)
    .then((docs) => {
      return docs;
    })
    .catch((error) => {
      return error;
    });
}

function deleteBlog(blog) {
  localStorage.removeItem("blog");
  blogSubject.next(null);
}
function searchBlog(search) {
  return fetchWrapper
    .get(`${baseUrl}/blogs/search/${search}`)
    .then((docs) => {
      return docs;
    })
    .catch((error) => {
      return error;
    });
}
function updateBlog(blog, id) {
  return fetchWrapper
    .update(`${baseUrl}/blogs/${id}`, blog)
    .then((docs) => {
      return docs;
    })
    .catch((error) => {
      return error;
    });
}
