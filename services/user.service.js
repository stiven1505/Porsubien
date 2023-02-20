 import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);
const registerSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("register"))
);
const userPutSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("userPut"))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  userPut: userPutSubject.asObservable(),
  get userPutValue() {
    return userPutSubject.value;
  },
  register: registerSubject.asObservable(),
  get registerValue() {
    return registerSubject.value;
  },
  login,
  logout,
  getAll,
  getUser,
  getUserById,
  register1,
  register,
  DeleteRegister,
  searchUser,
  updateUser,
  updateSave,
  DeleteUpdate,
};

function login(userName,password) {
  console.log("metodo "+userName+"--"+password);
  return fetchWrapper
    .post(`${baseUrl}/sessions`, {userName,password})
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/sesion");
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}
function getUser(user) {
  return fetchWrapper.get(`${baseUrl}/users/${user}`).then((docs) => {
    return docs;
  });
}
function getUserById(user) {
  return fetchWrapper.get(`${baseUrl}/users/id/${user}`).then((docs) => {
    return docs;
  });
}
function register1(register) {
  registerSubject.next(register);
  localStorage.setItem("register", JSON.stringify(register));
  Router.push("/registro/pasos");
}
function register(data) {
  return fetchWrapper.register(`${baseUrl}/users`, data).then((user) => {
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    return user;
  });
}
function DeleteRegister() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("register");
  registerSubject.next(null);
}
function updateSave(user) {
  userPutSubject.next(user);
  localStorage.setItem("userPut", JSON.stringify(user));
}
function DeleteUpdate() {
  localStorage.removeItem("userPut");
  userPutSubject.next(null);
}

function updateUser(user, slug) {
  return fetchWrapper.update(`${baseUrl}/users/${slug}`, user).then((docs) => {
    return docs;
  });
}
function searchUser(search) {
  return fetchWrapper
    .get(`${baseUrl}/users/search/${search}`)
    .then((docs) => {
      return docs;
    })
    .catch((error) => {
      return error;
    });
}
