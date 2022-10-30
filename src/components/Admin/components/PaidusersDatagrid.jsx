import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
// import {useDemoData}from '@mui/x-data-grid-generator'
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../configs/Firebase.config";
import { getDocs, query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { where } from "firebase/firestore";
import { collection } from "firebase/firestore";

import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function UsersData() {
  const [paidUsers, setPaidusers] = useState([]);
  const [load, setload] = useState(false);
  //   const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 5,
  //     maxColumns: 6,
  //   });
  useEffect(() => {
    setload(true);
    const colref = collection(db, "RegisteredPeople");
    onSnapshot(colref, (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log(users);
      setPaidusers(users);
      setload(false);
    });
    // const q = query(colref, where("cashPaid", "==", true));

    // onSnapshot(q, (snapshot) => {
    //   let paid = [];
    //   console.log(snapshot.docs);
    //   snapshot.docs.forEach((doc) => {
    //     paid.push({ ...doc.data(), id: doc.id });
    //   });
    //   // console.log(books)
    //   console.log(paid);
    //   setPaidusers(paid);
    //   setload(false);
    // });
  }, []);
  const users = paidUsers.map((data) => {
    return {
      id: data.id,
      col0: data.id,
      col1: data.fname,
      col2: data.email,
      col3: data.phno,
      col4: data.college,
      col5: data.regno,
      col6: data.gender,
      col7: data.cashPaid ? "paid ✅" : " not paid ❌",
    };
  });
  const rows: GridRowsProp = [...users];

  const columns: GridColDef[] = [
    { field: "col0", headerName: "id", width: 150 },
    { field: "col1", headerName: "name", width: 150 },
    { field: "col2", headerName: "email", width: 150 },
    { field: "col3", headerName: "phone no", width: 150 },
    { field: "col4", headerName: "college Name", width: 150 },
    { field: "col5", headerName: "register No", width: 150 },
    { field: "col6", headerName: "gender", width: 150 },
    { field: "col7", headerName: "paid Status", width: 150 },
  ];

  return (
    <div style={{ height: "85%", width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            loading={load}
            localeText={{
              toolbarDensity: "Size",
              toolbarDensityLabel: "Size",
              toolbarDensityCompact: "Small",
              toolbarDensityStandard: "Medium",
              toolbarDensityComfortable: "Large",
            }}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
}
