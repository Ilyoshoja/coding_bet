import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Section, Problem, Login, Register, Home } from "./pages";
import Layout from "./pages/layout";

const App: FC = () => (
  <div>
    <Routes>
    <Route path='/' element={<Layout/>} />
      <Route index element={<Home />} />
      <Route path='section' element={<Section />} />
      <Route path='problem' element={<Problem />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  </div>
);

export default App;
