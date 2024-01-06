import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="">
          <h4 className="text-xl font-bold my-2">Dashboard</h4>
          <div className="flex justify-around items-center bg-slate-200 mx-[-30px]">
          <NavLink
            to="/dashboard/user/profile"
            className="bg-slate-300 p-1"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="bg-slate-300 p-1"
          >
            Orders
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;