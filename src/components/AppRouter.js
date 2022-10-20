import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { Container } from "react-bootstrap";

const ContainderFooterStyles = {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppHeader></AppHeader>
      </Container>
      <Routes>
        {publicRoutes.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
      <Container style={ContainderFooterStyles}>
        <AppFooter></AppFooter>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;
