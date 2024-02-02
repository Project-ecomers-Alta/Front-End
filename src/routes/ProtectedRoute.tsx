import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "../utils/context/token";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { token, user } = useToken();
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/profile",
    "/change-password",
    "/history-order",
    "/shop-profile",
    "/list-product",
    "/add-product",
    "/edit-product",
    "/product-detail/:id",
    "/shopping-cart",
    "/order-page",
    "/payment-page",
    "/admin-order",
    "/admin-user",
  ];
  const adminProtected = ["/admin-order", "/admin-user"];
  const userProtected = [
    "/profile",
    "/change-password",
    "/history-order",
    "/shop-profile",
    "/list-product",
    "/add-product",
    "/edit-product",
    "/product-detail/:id",
    "/shopping-cart",
    "/order-page",
    "/payment-page",
  ];
  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }
  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (adminProtected.includes(pathname)) {
      if (user.role === "user") return <Navigate to="/" />;
    }
    if (userProtected.includes(pathname)) {
      if (user.role === "admin") return <Navigate to="/admin-user" />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
