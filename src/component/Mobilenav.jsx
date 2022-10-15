import * as React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import "../styles/HambBurger.css";
import { positions } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";

const pages = [
  { name: "Home", link: "#Main" },
  { name: "Departments", link: "#Departments" },
  { name: "Home", link: "#Main" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const AncherLink = styled.a`
 text-decoration: none;
 color: black;


`;

  const NavAll = styled.div`
display: none;
@media screen and (max-width:600px) {
  display: block;
}
`;
  return (
    <Box className="onlyshow">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon
          sx={{
            color: "white",
            fontSize: "1.5em",
          }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography textAlign="center" fontSize="1.5em">
              <AncherLink href={page.link}>{page.name}</AncherLink>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default ResponsiveAppBar;
