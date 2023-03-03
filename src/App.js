import React from "react";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/a-propos" element={<APropos />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
