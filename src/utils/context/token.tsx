import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";

interface Props {
  children: ReactNode;
}

interface Context {
  token: string;
  changeToken: (token: string) => void;
}

const contextValue = {
  token: "",
  changeToken: () => {},
};

const TokenContext = createContext<Context>(contextValue);

export function TokenProvider({ children }: Readonly<Props>) {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") ?? ""
  );

  useEffect(() => {
    setAxiosConfig(token);
  }, [token]);

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        changeToken("");
      }

      return Promise.reject(error);
    },
  );

  const changeToken = useCallback(
    (token: string) => {
      const newToken = token ?? "";
      setToken(newToken);
      if (token) {
        localStorage.setItem("token", newToken);
      } else {
        localStorage.removeItem("token");
      }
    },
    [token]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token, changeToken]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("ERROR, useTOken must be used within the TokenContext");
  }
  return context;
}
