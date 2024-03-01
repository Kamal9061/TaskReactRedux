import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Comoponent/Sidebar/Sidebar";
import Dashboard from "./Comoponent/Dashboard/Dashboard";
import Navbar from "./Comoponent/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import Management from "./Pages/Movie/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Provider store={store}>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie" element={<Management />} />
      </Routes>
      </Provider>
    </Fragment>
  );
}

export default App;
