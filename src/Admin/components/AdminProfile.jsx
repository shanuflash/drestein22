import React from 'react'
import { getAuth } from 'firebase/auth'
import styled from 'styled-components';
const AdminProfleMain = styled.div`
    color: black;
`
function AdminProfile() {
    const auth  = getAuth();
    console.log(auth)
    

  return (
    <AdminProfleMain>
        
        <h1> Admin User  : {auth.currentUser.email}</h1>

    </AdminProfleMain>
  )
}

export default AdminProfile