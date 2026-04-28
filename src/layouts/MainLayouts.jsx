import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Sidebar ada di sisi kiri */}
      <Sidebar />
      {/* 2. Container kanan untuk Header dan Halaman Utama */}
      <div className="flex-1 flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
    );
}