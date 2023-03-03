import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Home, FicheLogement, APropos, Page404 } from ".";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default Router;
