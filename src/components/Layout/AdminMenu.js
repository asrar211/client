import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <h4 className="text-xl font-bold pb-4">Admin Panel</h4>
          <div className="flex justify-around items-center bg-slate-200">
          <NavLink
            to="/dashboard/admin/create-category"
            className="bg-slate-300 p-1 font-semibold"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="bg-slate-300 p-1 font-semibold"
          >
            Create Product
          </NavLink>
          
          <NavLink
            to="/dashboard/admin/products"
            className="bg-slate-300 p-1 font-semibold"
          >Products
            </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="bg-slate-300 p-1 font-semibold"
          >
            Users
          </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;