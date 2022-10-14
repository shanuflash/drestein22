import React, { Component } from "react";
// import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "../styles/form.css";
import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import Nav from "./Nav";
import { useState } from "react";
import {
  CssVarsProvider,
  useColorScheme,
  ThemeProvider,
} from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Option from "@mui/joy/Option";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Checkbox from "@mui/joy/Checkbox";
import Alert from "@mui/joy/Alert";

function Selector() {
  return (
    <Box>
      <Typography mb={2}>Department-1</Typography>
      <Box role="group">
        <List
          row
          wrap
          sx={{
            "--List-gap": "8px",
            "--List-item-radius": "20px",
          }}
        >
          {["Event-1", "Event-2", "Event-3", "Event-3"].map((item, index) => (
            <ListItem key={item}>
              <Checkbox overlay disableIcon variant="soft" label={item} />
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
  const [formdata, setformdata] = useState({
    fname: "",
    lname: "",
    college: "",
    regno: "",
    gender: "",
    year: "",
    dept: "",
    email: "",
    phno: "",
  });
  const handleChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formdata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  // const Theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  const onchangehandle = (e) => {
    console.log(e.target.name);
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.innerHTML,
    }));
  };
  return (
    <div className="headcontainer" data-joy-color-scheme="dark">
      <Nav />
      <CssVarsProvider>
        {/* <ThemeProvider theme={Theme}> */}
        <Sheet
          sx={{
            width: "40vw",
            mx: "auto",
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
              required
              name="fname"
              value={formdata.fname}
              onChange={handleChange}
              type="text"
              placeholder="John"
              label="First Name"
              sx={{ width: "48%" }}
            />
            <TextField
              required
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
            required
            name="college"
            value={formdata.college}
            onChange={handleChange}
            type="text"
            placeholder="Your college name..."
            label="College Name"
          />
          <div className="yearno">
            <TextField
              required
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
                placeholder="Select year..."
                name="year"
                value={formdata.year}
                onChange={onchangehandle}
                // required
              >
                <Option value="I">I</Option>
                <Option value="II">II</Option>
                <Option value="III">III</Option>
                <Option value="IV">IV</Option>
              </Select>
            </FormControl>
          </div>
          <FormControl
            sx={
              {
                // width: "48%",
              }
            }
          >
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              required
              id="gender"
              name="gender"
              placeholder="Select gender..."
              value={formdata.gender}
              onChange={onchangehandle}
              indicator={<KeyboardArrowDown />}
              sx={{
                // width: 240,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="dog">Male</Option>
              <Option value="cat">Female</Option>
              <Option value="fish">Other</Option>
              <Option value="bird">Prefer Not To Say</Option>
            </Select>
          </FormControl>

          <TextField
            required
            name="phno"
            type="number"
            value={formdata.phno}
            onChange={handleChange}
            placeholder="98765*****"
            label="Phone Number"
          />
          <TextField
            required
            name="email"
            value={formdata.email}
            onChange={handleChange}
            type="email"
            placeholder="johndoe@email.com"
            label="Email"
          />
          <Selector />
          <Selector />
          <Selector />
          <Selector />
          {/* <ModeToggle /> */}
          <Alert variant="outlined" color="danger" sx={{ align: "center" }}>
            Registeration Fee of ₹150 has to be paid on the event date.
          </Alert>
          <Button sx={{ mt: 1 }} onSubmit={handleSubmit}>
            Register
          </Button>
        </Sheet>
        {/* </ThemeProvider> */}
      </CssVarsProvider>
    </div>
  );
};

export default Form;
