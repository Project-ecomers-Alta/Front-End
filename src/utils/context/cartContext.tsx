import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import {  ProductCart } from "../apis/products/types";
  import { getCart } from "../apis/products/api";
  import { useToken } from "./token";
  
  interface Context {
    carts: ProductCart[];
    changeCart: () => void;
  }
  
  interface Props {
    children: ReactNode;
  }
  
  const contextValue = {
    carts: [],
    changeCart: () => {},
  };
  
  const DataContext = createContext<Context>(contextValue);
  
  export const DataProvider = ({ children }: Readonly<Props>) => {
    const { token } = useToken();
    const [carts, setCarts] = useState<ProductCart[]>([]);
  
    useEffect(() => {
      token !== "" && changeCart();
    }, [setCarts, token]);
  
    const changeCart = async () => {
      try {
        const response = await getCart();
        setCarts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const dataContextValue = {
      carts,
      changeCart,
    };
  
    return (
      <DataContext.Provider value={dataContextValue}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
      throw new Error("ERROR: useData must be used within DataContext");
    }
    return context;
  };