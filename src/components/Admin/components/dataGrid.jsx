import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridCellEditStopReasons,
  GridFooter,
  useGridApiEventHandler,
  GridToolbarContainer,
  GridToolbarExport,
  useGridApiContext,
} from "@mui/x-data-grid";
import { GridCellEditStopParams } from "@mui/x-data-grid";
import { currencyPairs, randomPrice } from "@mui/x-data-grid-generator";
import { useEffect } from "react";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../configs/Firebase.config";
import { toast } from "react-toastify";
import { async, isEmpty } from "@firebase/util";
import { useMovieData } from "@mui/x-data-grid-generator";
import { doc, updateDoc } from "firebase/firestore";
import { Alert, Card } from "@mui/material";
import { display } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { type } from "@testing-library/user-event/dist/type";
import Loading from "../../../Loading";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "90vh",
  width: "100%",
  overflowX: "scroll",
  "& .MuiDataGrid-cell--editing": {
    backgroundColor: "rgb(255,215,115, 0.19)",
    color: "#006aff",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  "& .Mui-error": {
    backgroundColor: `rgb(126,10,15, ${
      theme.palette.mode === "dark" ? 0 : 0.1
    })`,
    color: theme.palette.error.main,
  },
}));

const Footer = () => {
  const [message, setMessage] = React.useState("");
  const apiRef = useGridApiContext();

  const handleRowClick = (params) => {
    setMessage(params.row.id);
  };

  useGridApiEventHandler(apiRef, "rowClick", handleRowClick);
  const handlePasteclick = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Id copied..");
  };
  return (
    <React.Fragment>
      <GridFooter />
      {message && (
        <Card
          sx={{
            padding: "10px",
            maxWidth: "350px",
          }}
        >
          {message}
          <ContentCopyIcon
            onClick={() => handlePasteclick(message)}
            sx={{
              marginLeft: "10px",
              cursor: "pointer",
            }}
          />
        </Card>
      )}
    </React.Fragment>
  );
};
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ConditionalValidationGrid() {
  const [paidUsers, setPaidusers] = useState([]);
  const [load, setload] = useState(false);
  //   const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 5,
  //     maxColumns: 6,
  //   });
  const data = useMovieData();
  useEffect(() => {
    setload(true);
    const colref = collection(db, "RegisteredPeople");
    onSnapshot(
      colref,
      (snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        //   console.log(users);
        setPaidusers(users);
        setload(false);
      },
      []
    );
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
    console.log("this ", data.EventsRegistered);
    return {
      id: data.id,
      id: data.id,
      name: data.fname,
      email: data.email,
      phno: data.phno,
      college: data.college,
      regno: data.regno,
      gender: data.gender,
      isPaid: data.cashPaid,
      IT: isEmpty(data.EventsRegistered.IT) ? " " : data.EventsRegistered.IT,
      ECE: isEmpty(data.EventsRegistered.ECE) ? " " : data.EventsRegistered.ECE,
      EEE: isEmpty(data.EventsRegistered.EEE) ? " " : data.EventsRegistered.EEE,
      CSE: isEmpty(data.EventsRegistered.CSE) ? " " : data.EventsRegistered.CSE,
      EIE: isEmpty(data.EventsRegistered.EIE) ? " " : data.EventsRegistered.EIE,
      MECH: isEmpty(data.EventsRegistered.MECH)
        ? " "
        : data.EventsRegistered.MECH,
      AI: isEmpty(data.EventsRegistered.AI) ? " " : data.EventsRegistered.AI,
      CHEM: isEmpty(data.EventsRegistered.CHEM)
        ? ""
        : data.EventsRegistered.CHEM,
      MBA: isEmpty(data.EventsRegistered.MBA) ? " " : data.EventsRegistered.MBA,
      MED: isEmpty(data.EventsRegistered.MED) ? " " : data.EventsRegistered.MED,
      AGRI: isEmpty(data.EventsRegistered.AGRI)
        ? " "
        : data.EventsRegistered.AGRI,
      CIVIL: isEmpty(data.EventsRegistered.CIVIL)
        ? " "
        : data.EventsRegistered.CIVIL,
      BME: isEmpty(data.EventsRegistered.BME) ? " " : data.EventsRegistered.BME,
      cashtobePaid: data.CashToBePaid + " ₹ ",
    };
  });
  //total =====
  let total = 0;
  let collectedcash = 0;
  const totalAmount = paidUsers.map((data) => {
    total += data.CashToBePaid;

    //  for(const key in  data.EventsRegistered){
    //     console.log(data.EventsRegistered['CSE'][0])
    //  }
    if (data.cashPaid) {
      collectedcash += data.CashToBePaid;
    }
  });

  const rows = [...users];

  const columns = [
    { editable: false, field: "id", headerName: "id", width: 100 },
    { editable: false, field: "name", headerName: "name", width: 150 },
    {
      editable: false,
      field: "email",
      type: "email",
      headerName: "email",
      width: 150,
    },
    { editable: false, field: "phno", headerName: "phone no", width: 150 },
    {
      editable: false,
      field: "college",
      headerName: "college Name",
      minWidth: 150,
    },
    { editable: false, field: "regno", headerName: "register No", width: 150 },
    { editable: false, field: "gender", headerName: "gender", width: 100 },
    {
      field: "isPaid",
      headerName: "is Paid?",
      width: 140,
      editable: true,
      type: "boolean",
    },

    { field: "IT", headerName: "IT", Width: "150", editable: false },
    { field: "CSE", headerName: "CSE", Width: "150", editable: false },
    { field: "ECE", headerName: "ECE", Width: "150", editable: false },
    { field: "EEE", headerName: "EEE", minWidth: "150", editable: false },
    { field: "EIE", headerName: "EIE", minWidth: "150", editable: false },
    { field: "MECH", headerName: "MECH", minWidth: "150", editable: false },
    { field: "AI", headerName: "AI", minWidth: "150", editable: false },
    { field: "CHEM", headerName: "CHEM", minWidth: "150", editable: false },
    { field: "MBA", headerName: "MBA", minWidth: "150", editable: false },
    { field: "MED", headerName: "MED", minWidth: "150", editable: false },
    { field: "AGRI", headerName: "AGRI", minWidth: "150", editable: false },
    { field: "CIVIL", headerName: "CIVIL", minWidth: "150", editable: false },
    { field: "BME", headerName: "BME", minWidth: "150", editable: false },

    {
      editable: false,
      field: "cashtobePaid",
      headerName: "amount",
      width: 100,
    },
  ];

  return (
    <StyledBox>
      {/* {load && <Loading/>} */}
      <DataGrid
        //  rowHeight={100}
        components={{
          Toolbar: CustomToolbar,
          Footer,
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStart={(params, event) => {
          console.log(params);
        }}
        onCellEditStop={(params, event) => {
          console.log(params);
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
        //   onRowEditStop={(e)=>{
        //     console.log(e)
        //   }}
        loading={load}
      />
      <h3
        style={{
          marginTop: "-50px",
          color: "black",
          marginLeft: "400px",
        }}
      >
        TOTAL AMOUT : {total}💸
      </h3>
      <h3
        style={{
          marginTop: "-40px",
          color: "black",
          marginLeft: "700px",
        }}
      >
        RECEIVED AMOUT : {collectedcash}💸
      </h3>
    </StyledBox>
  );
}
