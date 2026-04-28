import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/tailwind.css";
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from './components/Loading';
// import Dashboard from "./pages/Dashboard";
// import Orders from './pages/Orders';
// import Customers from './pages/Customers';
// import NotFound from './pages/NotFound';
// import MainLayout from './layouts/MainLayouts';
// import AuthLayout from './layouts/AuthLayouts';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Forgot from './pages/auth/Forgot';

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
          </Route>
        </Routes>
        </Suspense>
  )
}

export default App
