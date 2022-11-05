import React, { useEffect } from "react";
import "./styles/form.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { deepmerge } from "@mui/utils";
import { experimental_extendTheme as extendMuiTheme } from "@mui/material/styles";
import colors from "@mui/joy/colors";
import {
  extendTheme as extendJoyTheme,
  CssVarsProvider,
  useColorScheme,
} from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/joy/FormControl";
import FormControlM from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Option from "@mui/joy/Option";
import Divider from "@mui/joy/Divider";
import Select from "@mui/joy/Select";
import SelectM from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Checkbox from "@mui/joy/Checkbox";
import Alert from "@mui/joy/Alert";
import { isEmpty, uuidv4 } from "@firebase/util";
import { toast } from "react-toastify";
import { doc } from "firebase/firestore";
import { db } from "../../configs/Firebase.config";
import { setDoc } from "firebase/firestore";
import Loading from "../../Loading";
import ConfirmCard from "./ConfirmCard";
import Chip from "@mui/joy/Chip";
import FilledInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const muiTheme = extendMuiTheme({
  cssVarPrefix: "joy",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});

const joyTheme = extendJoyTheme();
const theme = deepmerge(muiTheme, joyTheme);
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
  const [qr, setqr] = useState("");
  const [load, setload] = useState(false);
  const [confirmMsg, setconfirmMsg] = useState(false);
  const [Project, setProject] = React.useState(false);
  const [Paper, setPaper] = React.useState(false);
  const [eventName, setEventName] = React.useState({
    CSE: [],
    IT: [],
    EEE: [],
    ECE: [],
    EIE: [],
    MECH: [],
    CIVIL: [],
    MED: [],
    CHEM: [],
    AGRI: [],
    AI: [],
    MBA: [],
    BME: [],
  });
  const handleChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setload(true);
    formdata.id = uuidv4();
    formdata.cashPaid = false;
    formdata.CashToBePaid = 0;
    for (const key in eventName) {
      console.log("thisd:", eventName[key]);
      if (!isEmpty(eventName[key])) {
        formdata.CashToBePaid = 150;
        formdata.EventsRegistered = eventName;
      }
    }
    console.log(formdata);
    const cityRef = doc(db, "RegisteredPeople", `${formdata.id}`);

    setDoc(cityRef, formdata)
      .then(async () => {
        console.log("uploaded");
        const sendqr = await fetch(
          `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://main--effulgent-horse-1b60e3.netlify.app/user/${cityRef.id}&choe=UTF-8`
        );
        const QrUrl = sendqr.url;
        console.log(QrUrl);
        if (window.Email) {
          await window.Email.send({
            SecureToken: process.env.REACT_APP_EMAILCODE_ID,
            To: formdata.email,
            From: "gleedara@gmail.com",
            Subject: "congrats on registration in Drestein Event 🎉🎉",
            Body: `<h2>name : ${formdata.fname} ${formdata.lname}</h2>
                         <h2>college : ${formdata.college}</h2>
                         <h2>Rollno : ${formdata.regno}</h2>
                       <img src="${QrUrl}" alt ='${cityRef.id}'>
                `,
          }).then(() => {
            alert("Email send to you successfully");
            setload(false);
            setconfirmMsg(true);
          });
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const handleChangeForSelect = (e) => {
    const name = e.target.getAttribute("data-name");
    setformdata((prev) => ({
      ...prev,
      [name]: e.target.innerHTML,
    }));
  };
  const [testtt, settesttt] = React.useState([]);

  useEffect(() => {
    console.log(eventName);
  }, [eventName]);
  const handleChangeT = (event) => {
    // console.log('this ',event.target.name)
    const {
      target: { value, name },
    } = event;

    // setEventName(typeof value === "string" ? value.split(",") : value);

    setEventName((pre) => ({ ...pre, [name]: [...value] }));
    // console.log('this is value :',event.target)
  };

  const test = [
    {
      name: "CSE",
      events: ["The Lost Code", "UI Design", "Blind Coding", "Ideathon"],
    },
    {
      name: "IT",
      events: ["Switcheroo", "Game of Codes", "Cipher Hunt", "Codeverse"],
    },
    {
      name: "ECE",
      events: ["eceevent1", "eceevent2"],
    },
    {
      name: "EEE",
      events: ["EEEevent1", "EEEevent2"],
    },
    {
      name: "EIE",
      events: ["Fire Tech", "Tech puzzle", "Debugging theorem", "Instantrix"],
    },
    {
      name: "AGRI",
      events: [
        "SHERLOCK HOLMES",
        "DEVILS ADVOCATE",
        "TREASURE HUNT",
        "NEURO COMBAT",
      ],
    },
    {
      name: "AI",
      events: [
        "Code and Debug",
        "Shark Tank",
        "Memesrus",
        "WEB CON",
        "Data Hunt",
      ],
    },
    {
      name: "BME",
      events: [
        "Med factory",
        "Mind Flayers",
        "Kampf geist",
        "Neurotic Expelliarmus",
      ],
    },
    {
      name: "CIVIL",
      events: ["Build-IT", "MAP THE GAP", "CADD Modeling", "Code cracking"],
    },
    {
      name: "CHEM",
      events: ["PROCESS SNIPPET", "CHEM FLUIDS", "CLASH XCAPE", "CHEM BRIDGE"],
    },
    {
      name: "MECH",
      events: [
        "Dezania",
        "Mr. Machinist",
        "Water Rocketry",
        "Cad Modelling And Stimulation",
      ],
    },
    {
      name: "MBA",
      events: ["Test", "Test2"],
    },
    {
      name: "MED",
      events: ["Test", "Test2"],
    },
  ];

  return (
    <div className="headcontainer" data-joy-color-scheme="dark">
      {load && <Loading />}
      <Nav />
      {confirmMsg ? (
        <ConfirmCard />
      ) : (
        <div
          className="main-form"
          style={{
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <CssVarsProvider theme={theme} className="formsheet">
            {/* <ThemeProvider theme={Theme}> */}
            <form onSubmit={handlesubmit} style={{ marginInline: "auto" }}>
              <Sheet
                sx={{
                  width: "80vw",
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
                    required
                    value={formdata.fname}
                    onChange={handleChange}
                    type="text"
                    placeholder="John"
                    label="First Name"
                    sx={{ width: "48%" }}
                  />
                  <TextField
                    name="lname"
                    required
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
                  required
                  value={formdata.college}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your college name..."
                  label="College Name"
                />
                <div className="yearno">
                  <TextField
                    name="regno"
                    required
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
                      required
                      data-name="year"
                      placeholder="Select year..."
                      value={formdata.year}
                      onChange={handleChangeForSelect}
                    >
                      <Option data-name="year" value="1">
                        I
                      </Option>
                      <Option data-name="year" value="2">
                        II
                      </Option>
                      <Option data-name="year" value="3">
                        III
                      </Option>
                      <Option data-name="year" value="4">
                        IV
                      </Option>
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
                      required
                      name="dept"
                      placeholder="Select department..."
                      value={formdata.dept}
                      onChange={handleChangeForSelect}
                    >
                      <Option data-name="dept" value="1">
                        IT
                      </Option>
                      <Option data-name="dept" value="2">
                        CSE
                      </Option>
                      <Option data-name="dept" value="3">
                        ECE
                      </Option>
                      <Option data-name="dept" value="4">
                        EEE
                      </Option>
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
                      required
                      name="gender"
                      placeholder="Select gender..."
                      value={formdata.gender}
                      onChange={handleChangeForSelect}
                    >
                      <Option data-name="gender" value="1">
                        Male
                      </Option>
                      <Option data-name="gender" value="2">
                        Female
                      </Option>
                      <Option data-name="gender" value="3">
                        Other
                      </Option>
                      <Option data-name="gender" value="4">
                        Prefer Not To Say
                      </Option>
                    </Select>
                  </FormControl>
                </div>

                <TextField
                  name="phno"
                  required
                  type="number"
                  value={formdata.phno}
                  onChange={handleChange}
                  placeholder="98765*****"
                  label="Phone Number"
                />
                <TextField
                  name="email"
                  required
                  value={formdata.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="johndoe@email.com"
                  label="Email"
                />
                <Divider sx={{ "--Divider-childPosition": `50%` }}>
                  Department Events
                </Divider>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {test.map((depart) => {
                    return (
                      <FormControlM
                        style={{ margin: "10px", width: "30%" }}
                        // sx={{ m: 1, width: "30%" }}
                      >
                        <InputLabel>{depart.name}</InputLabel>
                        <SelectM
                          multiple
                          value={eventName[depart.name]}
                          name={depart.name}
                          onChange={handleChangeT}
                          input={<FilledInput label={depart.name} />}
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value}>{value}</Chip>
                              ))}
                            </Box>
                          )}
                        >
                          {depart.events.map((ev) => (
                            <MenuItem key={ev} value={ev}>
                              {ev}
                            </MenuItem>
                          ))}
                        </SelectM>
                      </FormControlM>
                    );
                  })}
                </div>
                <Divider sx={{ "--Divider-childPosition": `50%` }}>
                  Other Events
                </Divider>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Checkbox
                    color="primary"
                    size="lg"
                    label="Paper Presentation"
                    onChange={(e) => {
                      console.log("target checked? - ", e.target.checked);
                      setPaper(e.target.checked);
                    }}
                  />
                  <Checkbox
                    color="primary"
                    size="lg"
                    label="Project Display"
                    onChange={(e) => {
                      console.log("target checked? - ", e.target.checked);
                      setProject(e.target.checked);
                    }}
                  />
                </div>
                <img src={qr} />
                <Alert
                  variant="outlined"
                  color="danger"
                  sx={{
                    align: "center",
                    justifyContent: "center",
                  }}
                  // style={{}}
                >
                  Registeration Fee of ₹150 has to be paid on the event date.
                </Alert>
                {load && (
                  <Alert
                    variant="outlined"
                    color="danger"
                    sx={{ align: "center" }}
                  >
                    processing your data don't reload the page
                  </Alert>
                )}
                {/* <input
                  style={{ width: "20vw", align: "center" }}
                  type="submit"
                  value={load ? "Processing" : "Register"}
                  disabled={load}
                /> */}
                <Button
                  type="submit"
                  value={load ? "Processing" : "Register"}
                  disabled={load}
                  sx={{ mt: 1 }}
                >
                  Register
                </Button>
              </Sheet>
            </form>
          </CssVarsProvider>
        </div>
      )}
    </div>
  );
};

export default Form;
