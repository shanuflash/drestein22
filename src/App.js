import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Form from "./components/Form/Form";
import Events from "./components/Events/Events";
import Main from "./Main";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { DisplayPopupProvider } from "./context/DisplayPopupContext";
import PrivateRoute from "./RequireAuth";
import SignIn from "./components/Admin/components/AdminSign";
import AdminMain from "./components/Admin/components/AdminMain";
import PaidUsers from "./components/Admin/components/PaidUsers";
import UnPaidUsers from "./components/Admin/components/UnpaidUsers";
import AdminPannel from "./components/Admin/components/ScanUsers";
import { UserProvider } from "./components/Admin/contexts/AdminContext";
import SingleUserPage from "./components/Admin/components/SingleUserPage";
import AdminProfile from "./components/Admin/components/AdminProfile";
import Lander from "./components/LandingPage/Lander";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Lander />
      ) : (
        <UserProvider>
          <div>
            <DisplayPopupProvider>
              <Routes>
                <Route path="/" element={<Main />} />
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
                    <Route path="profile" element={<AdminProfile />} />
                  </Route>
                </Route>
              </Routes>
              <ToastContainer />
            </DisplayPopupProvider>
          </div>
        </UserProvider>
      )}
    </>
  );
}

export default App;
