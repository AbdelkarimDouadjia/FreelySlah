// src/components/Settings.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Settings = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg px-6">
        <h1 className="text-5xl font-medium mb-6">Settings</h1>
        <div className="flex">
          <Sidebar />
          <div className="w-3/4 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
