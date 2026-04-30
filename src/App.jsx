import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./Pages/auth/Login";
import Loading from "./components/Loading";


const MainLayout = React.lazy(() => import ("./layouts/MainLayout"))
const Dashboard = React.lazy(() => import ("./Pages/Dashboard"))
const Orders = React.lazy(() => import ("./Pages/Orders"))
const Customers = React.lazy(() => import ("./Pages/Customers"))
const ErrorPage = React.lazy(() => import ("./Pages/ErrorPage"))
const Register = React.lazy(() => import ("./Pages/auth/Register"))
const Forgot = React.lazy(() => import ("./Pages/auth/Forgot"))

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
       <Suspense fallback={<Loading />}>
          <Routes>
            <Route element ={<MainLayout/>}>
           
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

export default App;
