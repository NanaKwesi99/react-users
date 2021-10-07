import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "../ProtectedRoute/ProtectedRoute";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

function Router() {
  return (
    <BrowserRouter>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default Router;