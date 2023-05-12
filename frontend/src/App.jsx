import { Home } from "./components/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Signin } from "./components/Signin";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
