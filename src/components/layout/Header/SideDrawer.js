import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

const drawerWidth = 220;

const SideDrawer = ({ onClose, open, window }) => {
    const router = useLocation();
    const container = window !== undefined ? () => window().document.body : undefined;
    const menuArr = [
        { name: "Home", link: "/" },
        { name: "Use", link: "#featuressection" },
        { name: "Build", link: "#buildonalkebuleum" },
        { name: "Faq", link: "#faqsection" },
    ];

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={open}
            anchor="right"
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                zIndex: 10000,
                display: {
                    xs: "block",
                    sm: "none",
                },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    border: 0,
                    boxShadow: "none",
                },
            }}
            BackdropProps={{ style: { backgroundColor: "rgba(111, 126, 140, 0.2)", backdropFilter: "blur(2px)" } }}
        >
            <Box sx={{ overflow: "auto" }}>
                <List sx={{ maxWidth: drawerWidth }} component="nav" aria-labelledby="main-list" dense>
                    {menuArr.map((link) => (
                        <ListItemButton
                            component={Link} // Using Link from react-router-dom here
                            to={link.link}
                            key={link.name}
                            selected={router.pathname === link.link}
                            onClick={onClose}
                        >
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideDrawer;
