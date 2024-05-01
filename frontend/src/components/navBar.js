import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../Assets/Images/logo.png";
import { Typography } from "@mui/material";
import theme from "../styles/theme"

export default function NavBar({ username }) {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
  return (
    <AppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Your Logo"
            style={{ marginRight: "10px", height: "30px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" component="div" color={theme.palette.text.secondary}>
            {username}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
