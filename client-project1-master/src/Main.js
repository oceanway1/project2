// import React from "react";
// import "./components/index.css";
// import { AppBar } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import Home from "./components/Home";
// import Service from "./components/Service";
// import Portfolio from "./components/Portfolio";
// import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";
// import MUIMenuItem from '@material-ui/core/MenuItem';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import { makeStyles } from '@material-ui/core/styles';


// export default function Main(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       fontSize: 'calc(15px + 1.5vw)',
//     },
//     table: {
//       minWidth: 650,
//     },
//     tooltip: {
//       position: 'absolute',
//       margin: '8px',
//       padding: '4px',
//       background: 'rgba(0, 0, 0, 0.8)',
//       color: 'white',
//       'max-width': '300px',
//       'font-size': '10px',
//       'z-index': 9,
//       'pointer-events': 'none',
//     }
//   }));
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <Router>
//         <AppBar position="static" style={{ backgroundColor: 'turquoise' }}>
//           <Toolbar>

//             <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
//               <LocalPharmacy fontSize="large" />
//             </IconButton>
//             <Typography variant="h4" className={classes.title} color="red">
//               Canadian Crescendo
//                 </Typography>
//             <div style={{ fontSize: 'calc(10px + 1.5vw)',}}>
//               Directory
//                 </div>
//             <IconButton
//               aria-label="more"
//               aria-controls="long-menu"
//               aria-haspopup="true"
//               color="secondary"
//               onClick={handleClick}
//             >
//               <AccountCircle fontSize="large" onClick={handleClose}></AccountCircle>
//             </IconButton>
//             <Menu
//               id="fade-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={open}
//               onClose={handleClose}
//             // TransitionComponent={Fade}
//             >
//               <MUIMenuItem onClick={handleClose}>
//                 <Link exact to="/">
//                   Home Page
//                     </Link>
//               </MUIMenuItem>
//               <MUIMenuItem onClick={handleClose}>
//                 <Link to="/service">
//                   Service
//                     </Link>
//               </MUIMenuItem>
//               <MUIMenuItem onClick={handleClose}>
//                 <Link to="/portfolio">
//                   Portfolio
//                     </Link>
//               </MUIMenuItem>
//             </Menu>

//           </Toolbar>

//         </AppBar>
//         <br></br>
//         {/* <div className="content"> */}
//         <Route exact path="/" component={Home} />
//         <Route path="/service" component={Service} />
//         <Route path="/portfolio" component={Portfolio} />
//         {/* </body> */}
//       </Router>
//     </React.Fragment >


//   );
// }

