import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/index";
import Register from "../pages/auth/register";
import Profile from "../pages/users/profile";
import ChangePassword from "../pages/users/changePassword";
import HistoryOrder from "../pages/users/historyOrder";
import ShopProfile from "../pages/users/shopProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/history-order" element={<HistoryOrder />} />
        <Route path="/shop-profile" element={<ShopProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
