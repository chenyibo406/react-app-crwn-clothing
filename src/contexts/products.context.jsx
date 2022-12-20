import { createContext } from "react";
import { useState } from "react";
import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProducstProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
