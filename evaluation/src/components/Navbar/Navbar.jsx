import { AppBar, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const { Link } = require("react-router-dom")
const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize:"20px",
      fontWeight:900,
      color:"red",
    },
    head:{
      display:"flex",
      flexDirection:"row"
    }
  }));
const Navbar = ()=>{
    const classes = useStyles();
    return(
        // <div>
        //     <div>
        //         <Link to="/">Dashboard</Link>
        //     </div>
        //     {/* <div>
        //         <Link to="/login">Login</Link>
        //     </div> */}
        //     <div>
        //         <Link to="/search">Search</Link>
        //     </div>
        // </div>

        <AppBar color="inherit" className={classes.head}>
            <Typography className={classes.title}>
            <Link to="/">Dashboard</Link>
            </Typography>
            <Typography className={classes.title}>
            <Link to="/search">Search</Link>
            </Typography>
        </AppBar>
    )
}

export default Navbar