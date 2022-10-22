import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Problem, Login, Register, Home,  Section } from "./pages";
import { getMe } from "./pages/store/slices/auth";
import { useSelector } from "react-redux";

const App: FC = () => {
  const { token } = useSelector(getMe);
   console.log(token)
  return (
    <div>
      <Routes>
        <Route
          path="login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        <Route
          path="section/:sectionID"
          element={token ? <Section /> : <Navigate to="/login" />}
        />
        <Route path="">
          <Route
            index
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/:languageID"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
