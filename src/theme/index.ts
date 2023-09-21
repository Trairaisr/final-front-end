import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fe2785",
      contrastText: "#fff",
    },
    //@ts-ignore
    test: {
      main: "#02caea",
    },
  },

});

export default theme;
