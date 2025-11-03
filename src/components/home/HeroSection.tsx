import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Drawer,
} from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import heroArt from "../../images/back.png";
import TerminalIcon from "@mui/icons-material/Terminal";
import { event as gaEvent } from "../../analytics/ga";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// If your image is actually in /public/back.PNG, use:  const HERO_URL = "/back.PNG";

const BLUE = "#0E4F6E";  // primary: deep sky/ocean blue
const SAND = "#CBB294";  // secondary: warm sand beige
const BRONZE = "#A97855";  // accent: soft bronze

function scrollToBuild() {
  const el = document.querySelector("#buildonalkebuleum");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // Fallback to anchor if element isn't on DOM yet
    window.location.hash = "#buildonalkebuleum";
  }
}

const HeroSection: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <Box id="herosection" sx={{ bgcolor: "#fff" }}>
      {/* Background Image on top with brand veils for legibility */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={heroArt}
          // src={HERO_URL} // <- use this line instead if your file is in /public
          alt="Hero Background"
          sx={{
            width: "100%",
            height: { xs: "320px", md: "560px" },
            objectFit: "cover",
            objectPosition: "center",
            filter: "saturate(1.02)",
            display: "block",
          }}
        />
        {/* Earth–Sky overlays (BLUE + SAND with soft contrast film) */}
        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              // deep blue glow (sky)
              "radial-gradient(65% 70% at 12% 18%, rgba(14,79,110,0.32) 0%, rgba(14,79,110,0.14) 45%, transparent 70%)," +
              // sand glow (earth)
              "radial-gradient(70% 70% at 86% 28%, rgba(203,178,148,0.38) 0%, rgba(203,178,148,0.16) 45%, transparent 75%)," +

              // subtle dark-to-light film for text contrast
              "linear-gradient(180deg, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.10) 38%, rgba(255,255,255,0.10) 100%)",
          }}
        />
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ pt: 0, pb: { xs: 6, md: 8 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9} lg={8}>
            <Box
              textAlign="center"
              sx={{
                mx: "auto",
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(14,79,110,0.18)", // blue-tinted edge
                backdropFilter: "blur(8px)",
                boxShadow: "0 14px 38px rgba(2,6,23,0.12)",
                borderRadius: 2.5,
                p: { xs: 3, md: 5 },
                mt: { xs: -8, md: -12 }, // lift into the image
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                mb={2.5}
                sx={{ color: "#0F172A", letterSpacing: "-0.3px" }}
              >
                Welcome to Alkebuleum
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 4, lineHeight: 1.85, maxWidth: 860, mx: "auto" }}
              >
                African blockchain network powering decentralized applications that address
                real-world challenges across governance, identity, finance, and transparency.
              </Typography>

              {/* Outlined primary CTA (BLUE), with tasteful hover glow */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                {/* Create Account (Identity) */}
                <Button
                  href="https://amvault.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<FingerprintOutlinedIcon />}
                  onClick={() => gaEvent("cta_click", { cta: "create_account", page: "home" })}
                  sx={{
                    borderColor: BLUE,
                    color: BLUE,
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      backgroundColor: "rgba(14,79,110,0.08)",
                      borderColor: BLUE,
                      color: BLUE,
                      boxShadow: "0 0 10px rgba(14,79,110,0.25)",
                    },
                    "&:active": { backgroundColor: "rgba(14,79,110,0.12)" },
                    "&:focus-visible": { outline: `2px solid ${BRONZE}`, outlineOffset: "2px" },
                  }}
                >
                  Create Account
                </Button>

                {/* Build on Alkebuleum (Rocket) */}
                <Button
                  href="#buildonalkebuleum"
                  variant="contained"
                  startIcon={<RocketLaunchIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    gaEvent("cta_click", { cta: "build_on_alkebuleum", page: "home" });
                    scrollToBuild();
                  }}
                  sx={{
                    backgroundColor: BLUE,
                    color: "#fff",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease",
                    "&:hover": { backgroundColor: "#0C3E56", boxShadow: "0 0 14px rgba(14,79,110,0.35)" },
                    "&:active": { backgroundColor: "#093548" },
                    "&:focus-visible": { outline: `2px solid ${SAND}`, outlineOffset: "2px" },
                  }}
                >
                  Build on Alkebuleum
                </Button>
              </Stack>


            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Drawer - AKE Info */}
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            padding: 4,
            borderTop: `1px solid ${SAND}`,
          },
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: BRONZE }} mb={2}>
            How to Get AKE Coin
          </Typography>

          <Typography variant="body1" color="textSecondary" mb={3}>
            AKE is not for sale but can be earned through contributions to the ecosystem:
          </Typography>

          <ul style={{ color: "#555", paddingLeft: "1.2rem", margin: 0 }}>
            <li>Engage in governance or community programs</li>
            <li>Contribute development or educational resources</li>
            <li>Support ecosystem projects through donations</li>
          </ul>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeroSection;
