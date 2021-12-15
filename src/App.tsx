import { FC } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ErrorBoundary from "./errorBoundary";
import appRoutes from "./appRoutes";

const App: FC = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary redirect={() => navigate(appRoutes.Home)}>
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
    </ErrorBoundary>
  );
};

export default App;
