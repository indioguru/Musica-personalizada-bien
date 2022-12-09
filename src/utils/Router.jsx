import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import AboutYou from "../pages/AboutYou";
import Home from "../pages/Home";
import NamePage from "../pages/namePage/NamePage";
import Song from "../pages/Song";

const Router = () => {
  const [search, setSearch] = useState("");

  return (
    <HashRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nombre"
          element={<NamePage setSearch={setSearch} search={search} />}
        />
        <Route path="/sobre-ti" element={<AboutYou search={search} />} />
        <Route path="/descarga" element={<Song search={search} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
