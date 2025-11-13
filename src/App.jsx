import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <nav style={{padding:12, borderBottom:"1px solid #eee"}}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Temporariamente, remove outras rotas até tudo aparecer */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
