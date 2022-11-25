import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, Button, Link } from "@mui/material";
import Countdown from "react-countdown";
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";
import LocationOn from "@mui/icons-material/LocationOn";
import LocalPhone from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/Email";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Reddit from "@mui/icons-material/Reddit";
import Telegram from "@mui/icons-material/Telegram";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
    return (
        <Box sx={{ pt: 4, mb: 3, border: "none", bgcolor: "#e6be9a" }}>
            <Grid container spacing={4} sx={{ width: "100%", mx: 0 }}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ fontWeight: "bold", mb: 1, color: "#6d8d6e", typography: { sm: "h5", xs: "h6" } }} component="div">
                        About us
                    </Box>
                    Alkebuleum is a community-run decentralized network with a mission to tailor blockchain technology for developing nations. This
                    website, the community and network activities are coordinated and maintained by the Alkebuleum DAO.
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ fontWeight: "bold", mb: 1, color: "#6d8d6e", typography: { sm: "h5", xs: "h6" } }} component="div">
                        Contacts
                    </Box>
                    <Box sx={{ display: "flex", mb: 1 }}>
                        <LocationOn sx={{ color: "#6d8d6e", mr: 1 }} /> decentralized
                    </Box>
                   {/**  <Box sx={{ display: "flex", mb: 1 }}>
                        <LocalPhone sx={{ color: "#6d8d6e", mr: 1 }} /> 512 710 9124
                    </Box>*/}
                    <Box sx={{ display: "flex", mb: 1 }}>
                        <Email sx={{ color: "#6d8d6e", mr: 1 }} /> info@alkebuleum.org
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Link href="https://twitter.com/alkebuleum" target="_blank" underline="none" className="socialLink">
                            <Twitter />
                        </Link>
                        <Link href="https://Facebook.com/Alkebuleum" target="_blank" underline="none" className="socialLink">
                            <Facebook />
                        </Link>
                        <Link href="https://Instagram.com/Alkebuleum" target="_blank" underline="none" className="socialLink">
                            <Instagram />
                        </Link>
                        <Link href="https://discord.gg/hY6JRtVJ" underline="none" target="_blank" className="socialLink">
                            <FaDiscord style={{ fontSize: "larger" }} />
                        </Link>
                        <Link href="https://t.me/alkebuleum" underline="none" target="_blank" className="socialLink">
                            <Telegram />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", justifyContent: { sm: "flex-end", xs: "flex-start" }, pr: 4 }}>
                        Terms | Privacy <br />
                        @2022 Alkebuleum, All Rights Reserved
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
