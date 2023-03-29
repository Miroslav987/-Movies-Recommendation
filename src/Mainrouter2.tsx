import { Route, Routes } from "react-router";
import { Filter } from "./Components/Navbar/Filter";

export const Mainrouter2: React.FC = () => {
  return (
    <Routes>
      <Route path="/newcards" element={<Filter />} />
      <Route path="/endcards" element={<Filter />} />
      <Route path="/likecards" element={<Filter />} />
    </Routes>
  );
};