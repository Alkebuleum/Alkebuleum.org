import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
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
        <Box sx={{ pt: 8, pb: 4, bgcolor: "#f9f9f9", color: "#333" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    {/* About Us Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                            About Us
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            Alkebuleum is a community-run decentralized network with a mission to tailor blockchain technology for developing nations. This website, the community, and network activities are coordinated and maintained by the Alkebuleum DAO.
                        </Typography>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <LocationOn sx={{ color: "#A97855", mr: 1 }} />
                            <Typography variant="body1">Decentralized</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <LocalPhone sx={{ color: "#A97855", mr: 1 }} />
                            <Typography variant="body1">512 710 9124</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Email sx={{ color: "#A97855", mr: 1 }} />
                            <Typography variant="body1">info@alkebuleum.org</Typography>
                        </Box>
                    </Grid>

                    {/* Social Media Links */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Link href="https://twitter.com/alkebuleum" target="_blank" underline="none" sx={{ color: "#A97855", transition: "color 0.3s", "&:hover": { color: "#1DA1F2" } }}>
                                <Twitter sx={{ fontSize: 32 }} />
                            </Link>
                            <Link href="https://Facebook.com/Alkebuleum" target="_blank" underline="none" sx={{ color: "#A97855", transition: "color 0.3s", "&:hover": { color: "#4267B2" } }}>
                                <Facebook sx={{ fontSize: 32 }} />
                            </Link>
                            <Link href="https://Instagram.com/Alkebuleum" target="_blank" underline="none" sx={{ color: "#A97855", transition: "color 0.3s", "&:hover": { color: "#E1306C" } }}>
                                <Instagram sx={{ fontSize: 32 }} />
                            </Link>
                            <Link href="https://discord.gg/vmUY6mXG" target="_blank" underline="none" sx={{ color: "#A97855", transition: "color 0.3s", "&:hover": { color: "#7289DA" } }}>
                                <FaDiscord style={{ fontSize: 32 }} />
                            </Link>
                            <Link href="https://t.me/alkebuleum" target="_blank" underline="none" sx={{ color: "#A97855", transition: "color 0.3s", "&:hover": { color: "#0088CC" } }}>
                                <Telegram sx={{ fontSize: 32 }} />
                            </Link>
                        </Box>
                    </Grid>

                    {/* Legal Links */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: { xs: "left", md: "right" }, mt: { xs: 3, md: 0 } }}>
                            <Link href="#" underline="none" sx={{ mr: 2, color: "#333", "&:hover": { textDecoration: "underline" } }}>
                                Terms
                            </Link>
                            <Link href="#" underline="none" sx={{ mr: 2, color: "#333", "&:hover": { textDecoration: "underline" } }}>
                                Privacy
                            </Link>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                ©2022 Alkebuleum, All Rights Reserved
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
