import Home from "./pages/home/home.js";
import Clientes from "./pages/clientes/clientes.js";
import Produtos from "./pages/produtos/produtos.js";
import Login from "./pages/login/login.js";
import Menu from "./components/menu/menu.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      {/* aqui poderia ter por exemplo um menu personalizado...  */}
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/clientes" element={<Clientes />} />
        {/*<Route path="/produtos" element={<Produtos />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
