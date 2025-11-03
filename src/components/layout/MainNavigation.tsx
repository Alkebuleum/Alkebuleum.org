import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";

const BLUE = "#0E4F6E";

const MainNavigation: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setMobileDrawerOpen((v) => !v);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.72) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(14,79,110,0.12)",
        }}
      >
        <Toolbar sx={{ minHeight: 84, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mr: "auto" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <img src="/logo.png" alt="Alkebuleum" width={42} height={42} style={{ borderRadius: 10 }} />
              <span style={{ fontWeight: 800, letterSpacing: "-0.2px", color: "#0F172A" }}>
                Alkebuleum
              </span>
            </Link>
          </Box>

          {/* Desktop nav + outlined CTA */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
            <Navbar />
            <Button
              href="https://chat.whatsapp.com/E90CmkC0n2J1SUV2PgCaTJ"
              target="_blank"
              variant="outlined"
              sx={{
                ml: 1,
                fontWeight: 800,
                borderRadius: 2,
                borderColor: BLUE,
                color: BLUE,
                px: 2.5,
                "&:hover": { borderColor: BLUE, backgroundColor: "rgba(14,79,110,0.06)" },
              }}
            >
              Join
            </Button>
          </Box>

          {/* Mobile toggle */}
          <IconButton aria-label="open drawer" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideDrawer onClose={handleDrawerToggle} open={mobileDrawerOpen} />
      {/* NOTE: no spacer here -> nav overlaps the hero */}
    </Fragment>
  );
};

export default MainNavigation;
