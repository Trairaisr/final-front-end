import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux";
import React, { useState } from "react";
import { registerAction } from "../../redux/slices/AppSlice";

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        return setName(value);

      case "lastname":
        return setLastName(value);

      case "username":
        return setUserName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);
    }
  };

  const goToLogin = () => navigate("/");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { meta } = await  dispatch(
      registerAction({ name, lastname, username, email, password })
    );

    if (meta.requestStatus === "fulfilled") {
      navigate("/Vacations");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",

        backgroundImage: "url(/images/pexels-photo-1430677.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <ConnectingAirportsIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{color:"test.main"}}>
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
        <Grid
          container
          component={Card}
          sx={{
            bgcolor: "test.main",
          }}
        >
          <Grid item xs={12} sm={6} sx={{ p: "24px" }}>
            <TextField
              color="secondary"
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={name}
              onChange={handleInputChange}
              inputProps={{ sx: { color: "test" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: "24px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "24px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="username"
              label="User name"
              name="username"
              value={username}
              onChange={handleInputChange}
              autoComplete="User name"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "24px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "24px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Button
              variant="text"
              onClick={goToLogin}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "test.main",
              }}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Register;
