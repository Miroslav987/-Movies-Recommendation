import { Route, Routes } from "react-router";
import { EndCards } from "./Components/Cards/EndCards/EndCards";
import { LikeCards } from "./Components/Cards/LikeCards/LikeCards";
import { NewCards } from "./Components/Cards/NewCards/NewCards";
import Login from "./pages/login/Login";

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/newcards" element={<NewCards />} />
      <Route path="/endcards" element={<EndCards />} />
      <Route path="/likecards" element={<LikeCards />} />
    </Routes>
  );
};
