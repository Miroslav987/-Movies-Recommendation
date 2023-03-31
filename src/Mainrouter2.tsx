import { Route, Routes } from "react-router";
import { Filter } from "./Components/Navbar/Filter";
import Login from "./pages/login/Login";
import ResetPasw from "./pages/resetpasw/ResetPasw";
import SignUp from "./pages/signup/SignUp";

export const Mainrouter2: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/resetpasw" element={<ResetPasw />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/newcards" element={<Filter />} />
      <Route path="/endcards" element={<Filter />} />
      <Route path="/likecards" element={<Filter />} />
    </Routes>
  );
};
