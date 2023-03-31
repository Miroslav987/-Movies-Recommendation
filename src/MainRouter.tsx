import { Route, Routes } from "react-router";
import { EndCards } from "./Components/Cards/EndCards/EndCards";
import { LikeCards } from "./Components/Cards/LikeCards/LikeCards";
import { NewCards } from "./Components/Cards/NewCards/NewCards";
import { MyFilm } from "./Components/MyFilm/MyFilm";
import { Recommendation } from "./Components/Recommendation/Recommendation";
import { Login } from "./Components/login/Login";
import ResetPasw from "./Components/resetpasw/ResetPasw";
import SignUp from "./Components/signup/SignUp";

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Recommendation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset/password" element={<ResetPasw />} />
      <Route path="/auth" element={<SignUp />} />
      <Route path="/newcards" element={<NewCards />} />
      <Route path="/endcards" element={<EndCards />} />
      <Route path="/likecards" element={<LikeCards />} />
      <Route path="/myFilm" element={<MyFilm />} />
    </Routes>
  );
};
