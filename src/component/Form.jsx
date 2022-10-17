import React, { Component } from "react";
import "../styles/form.css";
import Nav from "./Nav";
import { useState } from "react";
import {
  CssVarsProvider,
  useColorScheme,

} from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";

import Box from "@mui/material/Box";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import Option from "@mui/joy/Option";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Checkbox from "@mui/joy/Checkbox";
import Alert from "@mui/joy/Alert";
import lock from "../assets/earth.png";
import {uuidv4 } from '@firebase/util'
import { toast } from "react-toastify";
import {doc} from 'firebase/firestore'
import { db } from "../configsFiles/Firebase.config";
import QRcode from 'qrcode'
import { setDoc } from "firebase/firestore";

function Selector({name,events,setformdata,formdata}) {

  console.log();
  const [Eventarr,setevents] = useState([])
 const language= formdata.name ? formdata.name : [];
  
  const handleClick = (e) => {

    console.log(e.target.value)
    const { value, checked } = e.target;

      

     
    // Case 1 : The user checks the box
    if (checked) {

       language.push(value)
       setformdata(pre=>({...pre,[name]:language}))

      // setformdata(pre=>({...pre,[name]:languages}))
    }else{
      language.pop(value)
      setformdata(pre=>({...pre,[name]:language}))
    }
  
    // Case 2  : The user unchecks the box

      // setUserInfo({
      //   languages: languages.filter((e) => e !== value),

      // });
      // setformdata(pre=>({...pre,[name]:languages}))

console.log(language)
  };
  return (
    <Box>
      <Typography mb={2}>{name}</Typography>
      <Box role="group">
        <List
          row
          wrap
          sx={{
            "--List-gap": "8px",
            "--List-item-radius": "20px",
          }}
        >
          {events.map((item, index) => (
            <ListItem key={uuidv4()}>
              <Checkbox  onClick={handleClick} onBlur={()=>console.log(formdata)} overlay disableIcon variant="soft" label={item} value={item}/>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  
  return (
    <Button variant="outlined" color="neutral" onClick={() => setMode("dark")}>
      Test
    </Button>
  );
}

const Form = () => {

  const [formdata, setformdata] = useState({});
  const [qr,setqr]  = useState('')
  const [load,setload] = useState(false)


  const handleChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async(e)=>{
    e.preventDefault()
    setload(true)
    formdata.id = uuidv4()
    formdata.cashPaid = false

    // const colref = collection(db,'RegisteredPeople');

    // addDoc(colref,formData).then(()=>{
    //     console.log('uploaded')
    // }).catch((e)=>{
    //     toast.error(e)
    // })      
    const cityRef = doc(db, 'RegisteredPeople', `${formdata.id}`);
    
    setDoc(cityRef, formdata).then(async()=>{
    console.log('uploaded')
        // const response= await QRcode.toDataURL(`${cityRef.id}`)
        const sendqr = await fetch(`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://main--effulgent-horse-1b60e3.netlify.app/user/${cityRef.id}&choe=UTF-8`)
        const QrUrl = sendqr.url
        console.log(QrUrl)
        // setqr(response)
        // sending mail --
        const config = {
            SecureToken :'1a7e3de3-b657-4c1b-bcec-42c3389c810c',
            To : formdata.Email,
            From : 'saveethadrestein2022@gmail.com',
            Subject : "congrats on registration in Drestein Event 🎉🎉",
            Body : `<h1>${formdata.name}</h1>`
        }
        if(window.Email){
           await window.Email.send({
                // Host : "smtp.elasticemail.com",
                // Username : "saveethadrestein2022@gmail.com",
                // Password : "7ED0253E9D150A7B3718C8FF2710B33F3612",

                SecureToken :'59afb50e-33bb-41ff-a752-87a4bcf5ce88',
                To : formdata.email,
                From : "saveethadrestein2022@gmail.com",
                Subject : "congrats on registration in Drestein Event 🎉🎉",
                Body :  `<h2>name : ${formdata.fname} ${formdata.lname}</h2>
                         <h2>college : ${formdata.college}</h2>
                         <h2>Rollno : ${formdata.regno}</h2>
                       <img src="${QrUrl}" alt ='${cityRef.id}'>
                `

            }).then(()=>{
                alert('Email send to you successfully')
                setload(false)
            })
        }
        
    }).catch((e)=>{
        toast.error(e)
    })
    // console.log(colref)
}


  const handleChangeForSelect = (e) => {
    console.log(e)
    const name = e.target.getAttribute('data-name')
    console.log(name)
    setformdata((prev) => ({
      ...prev,
      [name]: e.target.innerHTML,
    }));
  };
  const handleChangeGender = (e) => {
    setformdata((prev) => ({
      ...prev,
      gender: e.target.innerHTML,
    }));
  };

  const handleChangeDept = (e) => {
    setformdata((prev) => ({
      ...prev,
      dept: e.target.innerHTML,
    }));
  };

  
  console.log(formdata)
  return (
    <div className="headcontainer" data-joy-color-scheme="dark">
      <Nav />
      <div className="main-form">
        <CssVarsProvider className="formsheet">
          {/* <ThemeProvider theme={Theme}> */}
          <Sheet
            sx={{
              width: "90vw",
              mx: 2,
              my: 4,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
            className="formcontainer"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Register!</b>
              </Typography>
              <Typography level="body2">
                Register now to take part in events.
              </Typography>
            </div>
            <Divider />
            <div className="Name">
              <TextField
                name="fname"
                value={formdata.fname}
                onChange={handleChange}
                type="text"
                placeholder="John"
                label="First Name"
                sx={{ width: "48%" }}
              />
              <TextField
                name="lname"
                value={formdata.lname}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
                label="Last Name"
                sx={{ width: "48%" }}
              />
            </div>
            <TextField
              name="college"
              value={formdata.college}
              onChange={handleChange}
              type="text"
              placeholder="Your college name..."
              label="College Name"
            />
            <div className="yearno">
              <TextField
                name="regno"
                value={formdata.regno}
                onChange={handleChange}
                type="number"
                placeholder="Your roll number..."
                label="Roll Number"
                sx={{ width: "48%" }}
              />
              <FormControl
                sx={{
                  width: "48%",
                }}
              >
                <FormLabel htmlFor="year">Year</FormLabel>
                <Select
                  id="year"
                  data-name="year"
                  placeholder="Select year..."
                  value={formdata.year}
                  onChange={handleChangeForSelect}
                  

                >
                  <Option data-name="year" value="1">I</Option>
                  <Option data-name="year" value="2">II</Option>
                  <Option data-name="year" value="3">III</Option>
                  <Option data-name="year" value="4">IV</Option>
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormControl
                sx={{
                  width: "48%",
                }}
              >
                <FormLabel htmlFor="dept">Department</FormLabel>
                <Select
                  id="dept"
                  name="dept"
                  placeholder="Select department..."
                  value={formdata.dept}
                  onChange={handleChangeForSelect}
                >
                  <Option data-name="dept" value="1">IT</Option>
                  <Option data-name="dept"  value="2">CSE</Option>
                  <Option data-name="dept"  value="3">ECE</Option>
                  <Option data-name="dept"  value="4">EEE</Option>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: "48%",
                }}
              >
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Select
                  id="gender"
                  name="gender"
                  placeholder="Select gender..."
                  value={formdata.gender}
                  onChange={handleChangeForSelect}

                >
                  <Option data-name="gender"  value="1">Male</Option>
                  <Option data-name="gender"  value="2">Female</Option>
                  <Option data-name="gender"  value="3">Other</Option>
                  <Option data-name="gender"  value="4">Prefer Not To Say</Option>
                </Select>
              </FormControl>
            </div>

            <TextField
              name="phno"
              type="number"
              value={formdata.phno}
              onChange={handleChange}
              placeholder="98765*****"
              label="Phone Number"
            />
            <TextField
              name="email"
              value={formdata.email}
              onChange={handleChange}
              type="email"
              placeholder="johndoe@email.com"
              label="Email"
            />
            <img src={qr} />
            {/* <Selector name='IT EVENTS' events={["Event-1", "Event-2", "Event-3", "Event-4"]}  setformdata={setformdata} formdata={formdata}/>
            <Selector name='CSE EVENTS' events={["Event-1", "Event-2", "Event-3", "Event-4"]} setformdata={setformdata} formdata={formdata}/>
            <Selector name='EEE EVENTS' events={["Event-1", "Event-2", "Event-3", "Event-4"]} setformdata={setformdata} formdata={formdata}/>
     */}
            {/* <ModeToggle /> */}
            <Alert variant="outlined" color="danger" sx={{ align: "center" }}>
              Registeration Fee of ₹150 has to be paid on the event date.
            </Alert>
            {load && <Alert variant="outlined" color="danger" sx={{ align: "center" }}>
              processing your data don't reload the page 
            </Alert>}
            <Button sx={{ mt: 1 }} onClick={handlesubmit}>
              Register
            </Button>
          </Sheet>
          {/* </ThemeProvider> */}
        </CssVarsProvider>
        <img src={lock} className="loginimage"></img>
      </div>
    </div>
  );
};

export default Form;
