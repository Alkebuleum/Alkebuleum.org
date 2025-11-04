// src/components/layout/SideDrawer.tsx
import * as React from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BLUE = "#0E4F6E";

export default function SideDrawer({ open, onClose }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Smoothly go to a section on the home page from any route
  const goToSection = async (sectionId?: "roadmap" | "join") => {
    // If we aren't already on the home route, go there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a tick for the home DOM to mount, then scroll
      setTimeout(() => {
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
        },
      }}
    >
      <Box role="presentation" sx={{ p: 1 }}>
        <List>
          {/* Home */}
          <ListItemButton
            component={RouterLink}
            to="/"
            onClick={onClose}
          >
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>

          {/* Roadmap (scroll to #roadmap on home) */}
          <ListItemButton onClick={() => goToSection("roadmap")}>
            <ListItemText
              primary="Roadmap"
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>

          {/* Community (scroll to #join on home) */}
          <ListItemButton onClick={() => goToSection("join")}>
            <ListItemText
              primary="Community"
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>

          {/* Contact (mailto) */}
          <ListItemButton
            component="a"
            href="mailto:info@alkebuleum.org"
            onClick={onClose}
          >
            <ListItemText
              primary="Contact"
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>
        </List>

        <Divider sx={{ my: 1.5 }} />

        {/* Persistent Join CTA (same as desktop tone) */}
        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            href="https://chat.whatsapp.com/E90CmkC0n2J1SUV2PgCaTJ"
            target="_blank"
            startIcon={<WhatsAppIcon />}
            variant="outlined"
            sx={{
              fontWeight: 800,
              borderRadius: 2,
              borderColor: BLUE,
              color: BLUE,
              "&:hover": {
                borderColor: BLUE,
                backgroundColor: "rgba(14,79,110,0.06)",
              },
            }}
            onClick={onClose}
          >
            Join
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
