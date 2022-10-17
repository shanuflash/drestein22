import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import Events from "./pages/Events";
import "./App.css";
import AppMain from "./AppMain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./RequireAuth";
import SignIn from "../src/Admin/components/AdminSign";
import AdminMain from "../src/Admin/components/AdminMain";
import PaidUsers from "../src/Admin/components/PaidUsers";
import UnPaidUsers from "../src/Admin/components/UnpaidUsers";
import AdminPannel from "./Admin/components/ScanUsers";
import { UserProvider } from "./Admin/contexts/AdminContext";
import SingleUserPage from "../src/Admin/components/SingleUserPage";
import AdminProfile from "./Admin/components/AdminProfile";
function App() {
  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path="/" element={<AppMain />} />
          <Route path="form" element={<Form />} />
          <Route path="events" element={<Events />} />
          <Route path="Admin/login" element={<SignIn />} />
          <Route path="*" element={<h1>page not found</h1>} />
          <Route path="user/:userid" element={<SingleUserPage />} />

          <Route path="/Admin" element={<PrivateRoute />}>
            <Route path="/Admin" element={<AdminMain />}>
              <Route path="paid" element={<PaidUsers />} />
              <Route path="unpaid" element={<UnPaidUsers />} />
              <Route path="scanusers" element={<AdminPannel />} />
              <Route path='profile' element={<AdminProfile/>}/>
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;
