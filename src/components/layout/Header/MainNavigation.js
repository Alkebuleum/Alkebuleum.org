import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import logo from '../../../assets/images/logo-symbol1.svg';
import Navbar from "./Navbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <Fragment>
            <AppBar
                position="fixed"
                color="inherit"
                enableColorOnDark
                elevation={0}
                sx={{ backgroundImage: "linear-gradient(to right, #b79472,#f9d0ba ,#D0E9EF,#D0E9EF, #f9d0ba, #b79472)", backdropFilter: "blur(20px)" }}
            >
                <Toolbar>
                    <Box sx={{ marginRight: "auto" }}>
                        <Link to="/" style={{ marginRight: "auto" }}>
                            <img src="logo.png" alt="ELO logo" width="35" style={{ float: "left" }} />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <Navbar />
                    </Box>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideDrawer onClose={handleDrawerToggle} open={mobileDrawerOpen} />
        </Fragment>
    );
};

export default MainNavigation;
