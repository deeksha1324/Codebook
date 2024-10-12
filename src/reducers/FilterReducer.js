export default function FilterReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products };

    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };

    case "RATING":
      return { ...state, rating: payload.rating };

    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };

    case "INSTOCK_ONLY":
      return { ...state, onlyInStock: payload.onlyInStock };

    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        rating: null,
      };

    default:
      throw new Error("no case found");
  }
}
