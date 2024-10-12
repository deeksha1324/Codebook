import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers";
import React from "react";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }

  function rating(products) {
    if (state.rating === "4STARABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STARABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }

  const filteredProductList = rating(
    inStock(sort(bestSeller(state.productList)))
  );

  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
