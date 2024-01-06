import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="my-2">
        <div >
          <div >
            <AdminMenu />
          </div>
          <div className="mt-6">
            <div className="mx-2 ">
              <h3 ><b> Admin Name :</b> {auth?.user?.name}</h3>
              <h3 ><b> Admin Email :</b> {auth?.user?.email}</h3>
              <h3 ><b> Admin Contact :</b> {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;