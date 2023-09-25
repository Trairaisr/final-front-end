import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#23a8ea",
      contrastText: "#fff",
    },
    //@ts-ignore
    test: {
      main: "#f2efe7",
      secondary: "#4a6d",
    },
    dates:{
      starts:"#37FE23"
      ,ends:"#DF5D67"
    }
  },

});

export default theme;
