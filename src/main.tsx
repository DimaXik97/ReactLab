import { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";

import appRoutes from "./appRoutes";

import "./styles/main.scss";

class AppContainer extends Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path={appRoutes.Home} element={<Home />} />
            <Route path={appRoutes.Products} element={<Products />} />
            <Route path={appRoutes.About} element={<About />} />
            <Route path="*" element={<Navigate to={appRoutes.Home} />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
