import React, { useEffect } from "react";
import clsx from "clsx";
import { CssBaseline } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CalendarComponent from "./calendar/calendar";
import Room from "./Room/room";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reservationAction } from "../redux/Actions/reservationAction";
import Sidebar from "./sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "auto",
  },
  toolbar: {
    paddingRight: 0,
    height: "64px",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingTop: 0,
    paddingRight: 0,
    position: "fixed",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingRight: 0,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    paddingLeft: theme.spacing(35),
    paddingTop: theme.spacing(10),
    paddingBottom: 0,
  },

  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    paddingRight: 0,
  },
  paper: {
    padding: theme.spacing(0),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    paddingRight: 0,
  },
  fixedHeight: {
    height: 40,
  },
}));

const customStyles = `
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function Dashboard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fetchReservations = async () => {
    try {
      const userToken = localStorage.getItem("userToken");

      if (!userToken) {
        console.error("Token not found in local storage.");
        return;
      }

      const config = {
        headers: {
          "User-Auth-Token": userToken,
        },
      };

      const response = await axios.get(
        "http://localhost:5000/reservation/reservations",
        config
      );

      const data = response.data;
      dispatch(reservationAction(data));
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };
  useEffect(() => {
    fetchReservations();
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <style>{customStyles}</style>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Accueil
            </Typography>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <Sidebar />
        </Drawer>
      </div>
      <main className={classes.content}>
        <CalendarComponent />
      </main>
    </ThemeProvider>
  );
}
