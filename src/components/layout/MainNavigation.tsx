import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.72) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(14,79,110,0.12)",
        }}
      >
        <Toolbar sx={{ minHeight: 84, gap: 2 }}>
          {/* Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mr: "auto" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <img
                src="/logo.png"
                alt="Alkebuleum"
                width={42}
                height={42}
                style={{ borderRadius: 10 }}
              />
              <span
                style={{
                  fontWeight: 800,
                  letterSpacing: "-0.2px",
                  color: "#0F172A",
                }}
              >
                Alkebuleum
              </span>
            </Link>
          </Box>

          {/* Nav (all breakpoints) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Navbar onOpenMenu={handleDrawerToggle} />

            {/* Desktop Join */}
            <Button
              href="https://chat.whatsapp.com/E90CmkC0n2J1SUV2PgCaTJ"
              target="_blank"
              variant="outlined"
              startIcon={<WhatsAppIcon sx={{ fontSize: 20 }} />}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                ml: 1,
                fontWeight: 800,
                borderRadius: 2,
                borderColor: BLUE,
                color: BLUE,
                px: 2.5,
                "&:hover": {
                  borderColor: BLUE,
                  backgroundColor: "rgba(14,79,110,0.06)",
                },
              }}
            >
              Join
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer onClose={handleDrawerToggle} open={mobileDrawerOpen} />
    </Fragment>
  );
};

export default MainNavigation;
