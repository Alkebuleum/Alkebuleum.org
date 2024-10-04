import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Button, Drawer } from "@mui/material";

const HeroSection = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // Function to handle opening and closing of the drawer
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ py: 8, position: "relative" }} id="herosection">
            {/* Background Image */}
            <Box
                component="img"
                src="/back.png"  // Path to the public folder image
                alt="Hero Background"
                sx={{
                    width: "100%",
                    height: { xs: "300px", sm: "500px" },
                    objectFit: "cover",
                    objectPosition: "center",
                    mb: 4,
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center" justifyContent="center">
                    {/* Right Side: Content */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: "bold", mb: 3, color: "#363636", textAlign: { xs: "center" } }}
                        >
                            Welcome to Alkebuleum
                        </Typography>

                        {/* Description Content */}
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center" } }}
                        >
                            Pan-African Blockchain network powering decentralized applications that address real-world challenges.
                        </Typography>

                        {/* List of Square Buttons with Hover Effect */}
                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                            {/* Button 1: Get AKE */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    borderRadius: "16px",
                                    border: "2px solid #D0E9EF", // Outline color (beige-brown)
                                    padding: 2,
                                    width: 120, // Reduced size
                                    height: 120, // Reduced size
                                    textAlign: "center",
                                    backgroundColor: "transparent", // No background color
                                    transition: "all 0.3s ease", // Smooth transition
                                    "&:hover": {
                                        backgroundColor: "#f9d0ba", // Change background on hover
                                        color: "#fff", // Change text color on hover
                                    },
                                }}
                                onClick={toggleDrawer(true)}  // Opens the drawer
                            >
                                {/* Embedded SVG for AKE Logo */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 651.000000 938.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                    width="35"
                                    height="35"
                                    fill="#A97855"  // Apply color here
                                    style={{ marginBottom: "8px" }}
                                >
                                    <g transform="translate(0.000000,938.000000) scale(0.100000,-0.100000)">
                                        <path d="M3810 9220 c-272 -92 -540 -184 -595 -204 -55 -21 -242 -87 -415
-147 -173 -61 -389 -138 -480 -171 -91 -33 -208 -75 -260 -94 -318 -111 -1027
-386 -1110 -430 -80 -42 -124 -87 -139 -141 -7 -25 -11 -276 -11 -724 l0 -686
23 -34 c14 -20 86 -77 182 -142 171 -116 330 -217 1010 -645 127 -80 302 -191
390 -247 272 -174 392 -247 828 -509 436 -261 647 -393 647 -404 -2 -19 -558
-366 -1195 -746 -242 -144 -480 -289 -530 -321 -49 -32 -175 -111 -280 -175
-241 -149 -857 -537 -973 -614 -109 -72 -102 -16 -102 -782 l0 -660 23 -44
c14 -28 39 -56 68 -76 45 -30 366 -141 1044 -359 149 -48 367 -120 485 -160
118 -40 312 -104 430 -143 118 -38 483 -158 810 -266 327 -108 610 -199 630
-202 28 -4 135 29 515 157 264 89 712 239 995 334 283 96 601 203 705 240 105
36 377 129 605 207 228 77 438 151 466 164 64 30 131 100 139 146 3 18 5 335
3 705 l-3 672 -40 41 c-37 38 -109 86 -590 395 -104 67 -264 170 -355 228 -91
58 -266 171 -390 251 -124 80 -250 161 -280 179 -253 154 -373 226 -555 329
-328 188 -799 490 -793 509 2 7 28 25 58 42 30 16 122 71 204 121 82 50 209
127 282 171 373 224 440 265 574 348 80 50 181 113 225 142 44 29 127 81 185
117 268 165 1298 851 1397 930 46 36 66 59 73 86 8 25 10 257 8 729 l-3 691
-30 44 c-17 23 -54 57 -83 74 -46 28 -298 132 -602 249 -52 20 -113 45 -135
55 -22 9 -51 21 -65 25 -14 4 -38 13 -55 20 -16 7 -57 23 -90 35 -33 13 -80
30 -105 40 -58 22 -327 125 -405 155 -33 12 -150 57 -260 100 -782 303 -1511
566 -1560 564 -11 -1 -243 -76 -515 -169z"/>
                                        <path d="M1155 5764 c-73 -38 -115 -103 -115 -178 0 -123 44 -165 440 -418
354 -227 755 -490 777 -511 17 -15 20 -24 12 -33 -18 -21 -405 -276 -524 -344
-181 -104 -529 -330 -613 -397 -70 -57 -98 -132 -80 -217 21 -97 134 -170 235
-151 57 10 97 34 423 250 385 255 545 359 692 451 154 97 513 308 610 359 43
22 78 45 78 52 0 14 -54 52 -160 113 -231 133 -567 346 -1110 704 -234 154
-449 293 -479 308 -62 32 -138 37 -186 12z"/>
                                        <path d="M7221 5764 c-19 -8 -266 -169 -550 -358 -495 -329 -810 -532 -971
-626 -117 -68 -210 -130 -210 -140 0 -5 28 -24 63 -41 212 -107 727 -434 1286
-817 338 -231 375 -252 451 -252 66 0 112 22 154 74 25 30 31 48 34 101 5 82
-19 136 -91 201 -29 26 -218 157 -422 292 -344 228 -572 384 -638 438 l-27 23
56 42 c31 22 158 109 282 192 820 545 788 521 827 601 52 106 21 217 -75 266
-46 24 -120 26 -169 4z"/>
                                        <path d="M7201 4804 c-112 -81 -205 -154 -209 -162 -7 -19 29 -50 168 -145 58
-39 132 -91 164 -114 33 -24 63 -40 67 -36 5 6 19 603 13 603 0 0 -92 -66
-203 -146z"/>
                                        <path d="M1141 4669 c0 -149 3 -278 6 -285 3 -8 10 -14 17 -14 22 0 386 250
386 265 0 17 -374 305 -395 305 -13 0 -15 -38 -14 -271z"/>
                                    </g>
                                </svg>
                                <Typography variant="body2" fontWeight="bold" color="#A97855">
                                    Get AKE
                                </Typography>
                            </Box>

                            {/* Button 2: Block Explorer */}
                            <a href="https://explorer.alkebuleum.com" style={{ textDecoration: 'none' }}> {/* Replace with actual link */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        borderRadius: "16px",
                                        border: "2px solid #D0E9EF", // Outline color (beige-brown)
                                        padding: 2,
                                        width: 120, // Reduced size
                                        height: 120, // Reduced size
                                        textAlign: "center",
                                        backgroundColor: "transparent", // No background color
                                        transition: "all 0.3s ease", // Smooth transition
                                        "&:hover": {
                                            backgroundColor: "#f9d0ba", // Change background on hover
                                            color: "#fff", // Change text color on hover
                                        },
                                    }}
                                >
                                    <TravelExploreIcon sx={{ fontSize: 35, color: "#A97855", mb: 1 }} /> {/* Dark brown color */}
                                    <Typography variant="body2" fontWeight="bold" color="#A97855">
                                        Block Explorer
                                    </Typography>
                                </Box>
                            </a>

                            {/* Button 3: Try Apps */}
                            <a href="https://openbookdapp.com" style={{ textDecoration: 'none' }}> {/* Replace with actual link */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        borderRadius: "16px",
                                        border: "2px solid #D0E9EF", // Outline color (beige-brown)
                                        padding: 2,
                                        width: 120, // Reduced size
                                        height: 120, // Reduced size
                                        textAlign: "center",
                                        backgroundColor: "transparent", // No background color
                                        transition: "all 0.3s ease", // Smooth transition
                                        "&:hover": {
                                            backgroundColor: "#f9d0ba", // Change background on hover
                                            color: "#fff", // Change text color on hover
                                        },
                                    }}
                                >
                                    <AppRegistrationIcon sx={{ fontSize: 35, color: "#A97855", mb: 1 }} /> {/* Dark brown color */}
                                    <Typography variant="body2" fontWeight="bold" color="#A97855">
                                        Try Apps
                                    </Typography>
                                </Box>
                            </a>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom Sheet Drawer */}
            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    ".MuiDrawer-paper": {
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        padding: 3,
                        backgroundColor: "#fff", // White background for minimalistic look
                    }
                }}
            >
                <Box sx={{ padding: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#A97855", mb: 2 }}>
                        How to Get AKE Coin
                    </Typography>

                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                        AKE is not for sale but can be earned or rewarded for positive contributions to the Alkebuleum ecosystem.
                    </Typography>

                    <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                        Here are some ways to earn AKE:
                    </Typography>

                    <ul>
                        <li>
                            <Button component="a" href="/signup" sx={{ color: "#A97855", textTransform: "none" }}>
                                Create an account in Openbook and get free AKE.
                            </Button>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                Participation and engagement in the app can also lead to rewards in AKE.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                Donating to the Alkebuleum foundation or other projects in the ecosystem can reward you with AKE.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Drawer>
        </Box>
    );
};

export default HeroSection;
