import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../styles/theme";
import Avatar from "@mui/material/Avatar";
import profilePic from "../Assets/Images/Avatar.png";

export default function ProfilePaper(props) {
  const {
    fullName,
    email,
    dateOfBirth,
    phoneNumber,
    address,
    city,
    state,
    zipCode,
    country,
    securityQuestion,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Avatar
        src={profilePic}
        sx={{
          width: "80px",
          height: "80px",
          marginRight: "20px",
          marginTop: "-300px",
        }}
      />
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: 400,
          p: 2,
          color: `${theme.palette.text.secondary}`,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="left"
          marginBottom={"30px"}
        >
          Profile
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Name
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {fullName}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Email
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {email}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Dateof Birth
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {dateOfBirth}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Phone Number
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Address
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {address}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              City
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {city}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              State
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {state}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Zip Code
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {zipCode}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Country
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {country}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Security Question
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {securityQuestion}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
