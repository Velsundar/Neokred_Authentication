import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    grey: {
        '500': '#757575',
      },
    primary: {
      main: "#1976d2",
      button: "#2979ff"
    },
    text: {
      secondary: "#4D5E80",
    },
  },
});

export default theme;
