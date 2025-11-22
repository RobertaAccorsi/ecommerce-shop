import { ShoppingCart, Heart, Package, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartSidebar } from "./cart-sidebar";

export function Header() {
    const navigate = useNavigate();

    function goToFavoritos() {
        navigate('/favoritos');
    }

    function goToPedidos() {
        navigate('/orders');
    }

    function handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
       <header className="w-full bg-white shadow p-4">
  <div className="w-full flex items-center justify-between">

    {/* Logo / Marca */}
    <div className="flex items-center gap-3">
      <div className="bg-black text-white flex w-9 h-9 items-center justify-center rounded-xl shadow-sm">
        <ShoppingCart className="w-4 h-4" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-semibold text-sm">E-commerce SHOP</span>
        <span className="text-xs text-gray-500">Bem-vindo!</span>
      </div>
    </div>

    {/* Ações */}
    <div className="flex items-center gap-4">

      <button
        onClick={goToFavoritos}
        className="p-2 rounded-lg hover:bg-red-50 hover:text-red-500 transition"
        title="Favoritos"
      >
        <Heart className="w-5 h-5" />
      </button>

      <button
        onClick={goToPedidos}
        className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
        title="Pedidos"
      >
        <Package className="w-5 h-5" />
      </button>

      <CartSidebar />

      <button
        onClick={handleLogout}
        className="p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
        title="Sair"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  </div>
</header>
    );
}