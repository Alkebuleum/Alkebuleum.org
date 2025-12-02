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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const quickActions = [
    {
      id: "create-account",
      label: "Create account",
      subtitle: "Set up your Alkebuleum identity.",
      color: BLUE,
      icon: <FingerprintOutlinedIcon fontSize="medium" />,
      onClick: () => {
        gaEvent("cta_click", { cta: "create_account", page: "home_quickactions" });
        window.open("https://amvault.net", "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "get-ake",
      label: "Get AKE",
      subtitle: "Be first to know when AKE launches.",
      color: BRONZE,
      icon: <AppRegistrationIcon fontSize="medium" />,
      onClick: () => {
        gaEvent("cta_click", { cta: "get_ake", page: "home_quickactions" });
        setDrawerOpen(true); // open bottom drawer with details + form link
      },
    },
    {
      id: "explore-apps",
      label: "Explore apps",
      subtitle: "Governance, identity, finance tools.",
      color: "#047857", // emerald accent
      icon: <RocketLaunchIcon fontSize="medium" />,
      onClick: () => {
        gaEvent("cta_click", { cta: "explore_apps", page: "home_quickactions" });
        navigate("/apps");
      },
    },

    {
      id: "start-building",
      label: "Start building",
      subtitle: "Spin up your first dApp.",
      color: "#C026D3", // magenta accent
      icon: <TerminalIcon fontSize="medium" />,
      onClick: () => {
        gaEvent("cta_click", { cta: "start_building", page: "home_quickactions" });
        scrollToBuild();
      },
    },
  ];


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

              {/* Quick start actions (ethereum.org-style tiles) */}
              <Grid
                container
                spacing={2.5}
                sx={{ mt: { xs: 2.5, md: 3 } }}
              >
                {quickActions.map((action) => (
                  <Grid item xs={6} sm={6} md={3} key={action.id}>
                    <Box
                      onClick={action.onClick}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          action.onClick();
                        }
                      }}
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(15,23,42,0.06)",
                        background:
                          "radial-gradient(circle at 0% 0%, rgba(14,79,110,0.05) 0, transparent 55%)," +
                          "radial-gradient(circle at 100% 100%, rgba(203,178,148,0.08) 0, rgba(255,255,255,0.85) 55%)",
                        boxShadow: "0 10px 24px rgba(15,23,42,0.08)",
                        px: 2.5,
                        py: 2.25,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: 1.5,
                        cursor: "pointer",
                        transition:
                          "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background-color 160ms ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 16px 36px rgba(15,23,42,0.16)",
                          borderColor: "rgba(14,79,110,0.24)",
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${BLUE}`,
                          outlineOffset: "3px",
                        },
                      }}
                    >
                      {/* Icon pill */}
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(148,163,184,0.35)",
                          background:
                            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.85) 0, rgba(248,250,252,0.9) 60%)",
                          boxShadow: "0 8px 20px rgba(15,23,42,0.12)",
                          color: action.color,
                          mb: 0.5,
                        }}
                      >
                        {action.icon}
                      </Box>

                      {/* Text */}
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 800,
                            mb: 0.5,
                            color: action.color,
                          }}
                        >
                          {action.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#4B5563",
                            lineHeight: 1.7,
                          }}
                        >
                          {action.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>



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
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: BRONZE }}
            mb={1.5}
          >
            Get notified about AKE
          </Typography>

          <Typography variant="body1" color="textSecondary" mb={2}>
            AKE is not available yet on public exchanges. We’re rolling it out
            carefully with the community first.
          </Typography>

          <Typography variant="body1" color="textSecondary" mb={3}>
            Be the first to know when AKE becomes available and where you can get it.
            Join the early access list and share a few details so we can understand
            where our community is based.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="https://forms.gle/8kYHUWsN2DKWZo7S7" // 👈 replace with your real Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              gaEvent("cta_click", { cta: "ake_waitlist_form", page: "home_quickactions" })
            }
            sx={{
              mt: 1,
              borderRadius: "999px",
              px: 3.5,
              py: 1.2,
              backgroundColor: BLUE,
              textTransform: "none",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#0C3E56",
              },
            }}
          >
            Join the AKE waitlist
          </Button>

          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ display: "block", mt: 1.5 }}
          >
            The form will ask for your name, email, and location so we can share
            region-specific updates. We’ll only use this information for AKE
            announcements.
          </Typography>
        </Box>

      </Drawer>
    </Box>
  );
};

export default HeroSection;
