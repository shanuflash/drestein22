import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ResponsiveAppBar from "./AdminNav";
import { useState } from "react";
import AdminPannel from "./ScanUsers";
import { Outlet } from "react-router";
import styled from "styled-components";

const Admin = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;
function AdminMain() {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(auth.currentUser)
    navigate("/Admin/scanusers");
  }, []);
  // const [fromData,setFromData] =useState({
  // name:auth?.currentUser?.displayName,
  // email:auth?.currentUser?.email
  // })
  return (
    <Admin>
      <ResponsiveAppBar />
      <Outlet />
    </Admin>
  );
}

export default AdminMain;
