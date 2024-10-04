import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//const Navbar = ({mainLinks, presaleLink, bridgeLink, moreMenuLinks, comingSoonLink, handleClickContracts}) => {
const Navbar = () => {

    const menuArr = [{ name: "Home", link: "#" }, { name: "Use", link: "#featuressection" }, { name: "Build", link: "#buildonalkebuleum" }, { name: "Faq", link: "#faqsection" }];

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
