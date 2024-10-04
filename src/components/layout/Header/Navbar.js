import { useState, Fragment } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

//const Navbar = ({mainLinks, presaleLink, bridgeLink, moreMenuLinks, comingSoonLink, handleClickContracts}) => {
const Navbar = (props) => {
    const [anchorMoreEl, setAnchorMoreEl] = useState(null);
    const menuArr = [{ name: "Home", link: "#" }, { name: "Use", link: "#featuressection" }, { name: "Build", link: "#buildonalkebuleum" }, { name: "Faq", link: "#faqsection" }];

    const handleCloseMoreMenu = () => {
        setAnchorMoreEl(null);
    };

    return (
        <Fragment>
            <Stack direction="row" spacing={3} alignItems="center">
                {menuArr.map((ele) => {
                    return (
                        <Button key={ele.name} component="a" href={ele.link} color="inherit" size="large" sx={{ fontWeight: "bold", color: "#363636" }} >
                            {ele.name}
                        </Button>
                    );
                })}
            </Stack>
        </Fragment>
    );
};

export default Navbar;
