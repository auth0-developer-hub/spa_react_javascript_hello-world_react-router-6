import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route";
import { Loader } from "./components/loader";
import { Footer } from "./components/footer";
import { MobileNavBar } from "./components/mobile-nav-bar";
import { NavBar } from "./components/nav-bar";
import { AdminPage } from "./pages/admin";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { ProtectedPage } from "./pages/protected";
import { PublicPage } from "./pages/public";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="/public" element={<PublicPage />} />
          <Route
            path="/protected"
            element={<ProtectedRoute component={ProtectedPage} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute component={AdminPage} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
