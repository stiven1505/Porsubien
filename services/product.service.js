import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const productSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("product"))
);

export const productService = {
  product: productSubject.asObservable(),
  get productValue() {
    return productSubject.value;
  },
  getProduct,
  getProductByUser,
  newProduct,
  postProduct,
  DeleteProduct,
  searchProduct,
};

function getProduct(product) {
  return fetchWrapper.get(`${baseUrl}/products/${product}`).then((docs) => {
    return docs;
  });
}

function getProductByUser(user) {
  return fetchWrapper.get(`${baseUrl}/products/user/${user}`).then((docs) => {
    return docs;
  });
}
function newProduct(product){
  productSubject.next(product);
  localStorage.setItem("product", JSON.stringify(product));
  Router.push("/publicar/venta");
}
function postProduct(product){
  return fetchWrapper.postItems(`${baseUrl}/products`, product).then((docs) => {
    return docs;
  }
  ).catch((error) => {
    return error;
  }
  );
}
function DeleteProduct(product){
  localStorage.removeItem("product");
  productSubject.next(null);
}
function searchProduct(search) {
  return fetchWrapper
    .get(`${baseUrl}/products/search/${search}`)
    .then((docs) => {
      return docs;
    })
    .catch((error) => {
      return error;
    });
}