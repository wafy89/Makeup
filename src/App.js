import React from "react";
import { Router, Link } from "@reach/router";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./components/layout/Home";

import Navbar from "./components/screen/Navbar";

import "./App.scss";

const App = () => (
  <>
    <Navbar />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
