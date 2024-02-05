import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

type GlobalContextType = {
  products: Product[];
  loading: boolean;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then((resp) => {
        setProducts(resp.data as Product[]);
        setLoading(false);
        // console.log(resp.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ products, loading, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};
