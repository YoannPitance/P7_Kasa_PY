import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Home, Page404, Appartment, About } from "./index";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/appartment/:id" element={<Appartment />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default Router;
