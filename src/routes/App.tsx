import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/index";
import Register from "../pages/auth/register";
import Index from "../pages/landing/index";
import Profile from "../pages/users/profile";
import ChangePassword from "../pages/users/changePassword";
import HistoryOrder from "../pages/users/historyOrder";
import ShopProfile from "../pages/users/shopProfile";
import ListProduct from "../pages/users/listProduct";
import ProductDetail from "../pages/users/productDetail";
import ShoppingCart from "../pages/cart/shoppingCart";
import PaymentPage from "../pages/users/paymentPage";
import AdminUser from "../pages/admin/adminUser";
import AdminOrder from "../pages/admin/adminOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/history-order" element={<HistoryOrder />} />
        <Route path="/shop-profile" element={<ShopProfile />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/admin-user" element={<AdminUser />} />
        <Route path="/admin-order" element={<AdminOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
