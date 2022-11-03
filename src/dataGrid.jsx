import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DataGrid ,GridCellEditStopReasons} from '@mui/x-data-grid';
import { randomPrice } from '@mui/x-data-grid-generator';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection,onSnapshot } from 'firebase/firestore';
import { db } from './configs/Firebase.config';
const StyledBox = styled(Box)(({ theme }) => ({
  height: '90vh',
  width: '100%',
  '& .MuiDataGrid-cell--editing': {
    backgroundColor: 'rgb(255,215,115, 0.19)',
    color: '#1a3e72',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .Mui-error': {
    backgroundColor: `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: theme.palette.error.main,
  },
}));

// const rows = [
//   {
//     id: 1,
//     expense: 'Light bill',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 6, 8),
//     isPaid: false,
//     paymentMethod: '',
//   },
//   {
//     id: 2,
//     expense: 'Rent',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 7, 1),
//     isPaid: false,
//     paymentMethod: '',
//   },
//   {
//     id: 3,
//     expense: 'Car insurance',
//     price: randomPrice(0, 1000),
//     dueAt: new Date(2021, 7, 4),
//     isPaid: true,
//     paymentMethod: 'Wire transfer',
//   },
// ];

export default function ConditionalValidationGrid() {
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
      onSnapshot(colref,(snapshot)=>{
          let users = []
          snapshot.docs.forEach(doc=>{
            users.push({...doc.data(),id:doc.id})
          })
          console.log(users);
        setPaidusers(users);
        setload(false);
      })
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
   const users = paidUsers.map(data=>{
     return {
      id:data.id,
      id:data.id,
      name:data.fname,
      email:data.email,
      phno:data.phno,
      college:data.college,
      regno:data.regno,
      gender:data.gender,
      isPaid:data.cashPaid ,
      paymentMethod:''
      
  
  
  }

   })

   const rows=[
    ...users
  ];

  
    
    const columns= [
      { field: 'id', headerName: 'id', width: 100 },
      { field: 'name', headerName: 'name', width: 150 },
      { field: 'email', headerName: 'email', width: 150 },
      {field:'phno',headerName:'phone no',width:150},
      {field:'college',headerName:'college Name',width:150},
      {field:'regno',headerName:'register No',width:150},
      {field:'gender',headerName:'gender',width:100},
      {field:'isPaid',headerName:'is Paid?',width:140,editable:true,type:'boolean',color:"red"},
          {
      field: 'paymentMethod',
      headerName: 'Payment method',
      type: 'singleSelect',
      valueOptions: ['Wire transfer', 'Cash'],
      width: 160,
      editable: true,
      preProcessEditCellProps: (params) => {
        const isPaidProps = params.otherFieldsProps.isPaid;
        const hasError = isPaidProps.value && !params.props.value;
        // console.log('this :',isPaidProps)
        if(isPaidProps.value && isPaidProps.error===false && isPaidProps.isProcessingProps===false){
           console.log(isPaidProps)

        }
        return { ...params.props, error: hasError };
      },
    },
  
      
      
    ];
  
//   const columns = [
//     { field: 'expense', headerName: 'Expense', width: 160, editable: true },
//     {
//       field: 'price',
//       headerName: 'Price',
//       type: 'number',
//       width: 120,
//       editable: false
//     },
//     {
//       field: 'dueAt',
//       headerName: 'Due at',
//       type: 'date',
//       width: 120,
//       editable: true,
//     },
//     {
//       field: 'isPaid',
//       headerName: 'Is paid?',
//       type: 'boolean',
//       width: 140,
//       editable: true,
//     },
//     {
//       field: 'paymentMethod',
//       headerName: 'Payment method',
//       type: 'singleSelect',
//       valueOptions: ['Credit card', 'Wire transfer', 'Cash'],
//       width: 160,
//       editable: true,
//       preProcessEditCellProps: (params) => {
//         const isPaidProps = params.otherFieldsProps.isPaid;
//         const hasError = isPaidProps.value && !params.props.value;
//         console.log(isPaidProps)
//         return { ...params.props, error: hasError };
//       },
//     },
//   ];

  return (
    <StyledBox>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
            if (params.reason === GridCellEditStopReasons.cellFocusOut) {
              event.defaultMuiPrevented = true;
            }
          }}
        loading={load}
      />
    </StyledBox>
  );
}
