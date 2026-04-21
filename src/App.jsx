import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/tailwind.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/SideBar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Sidebar ada di sisi kiri */}
      <Sidebar />
      {/* 2. Container kanan untuk Header dan Halaman Utama */}
      <div className="flex-1 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>

      {/* Area konten utama (Dashboard) */}
      
    </div>
  )
}

export default App
