import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import EscolherLinguagem from "./pages/EscolherLinguagem.jsx";
import ComoDescobriu from "./pages/ComoDescobriu.jsx";
import MetaDiaria from "./pages/MetaDiaria.jsx";
import RecuperarSenha from "./pages/RecuperarSenha.jsx";
import Principal from "./pages/Principal.jsx";
import Licao from "./pages/Licao.jsx";
import Perfil from "./pages/Perfil";


export default function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cadastro" element={<Cadastro />} />
  <Route path="/linguagens" element={<EscolherLinguagem />} />
  <Route path="/como-descobriu" element={<ComoDescobriu />} />
  <Route path="/meta-diaria" element={<MetaDiaria />} />
  <Route path="/recuperar" element={<RecuperarSenha />} />
  <Route path="/principal/:linguagem" element={<Principal />} />
  <Route path="/principal/:linguagem/licao/:id" element={<Licao />} />
  <Route path="/perfil" element={<Perfil />} />
  <Route path="*" element={<Home />} />
</Routes>
  );
}



