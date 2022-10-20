import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Problem, Login, Register, Home, Warmup } from "./pages";
import Layout from "./pages/layout";

const App: FC = () => (
  <div>
    <Routes>
      <Route path="" element={<Layout />} />
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="/:id" element={<Warmup />} />
      <Route path="problem" element={<Problem />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </div>
);

export default App;
