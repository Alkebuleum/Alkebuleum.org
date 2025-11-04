import * as React from "react";
import { Stack, Link as MLink, IconButton, Button } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

type Props = {
  onOpenMenu?: () => void;
};

const BLUE = "#0E4F6E";

export default function Navbar({ onOpenMenu }: Props) {
  const linkSx = {
    color: "text.primary",
    fontWeight: 700,
    letterSpacing: 0.2,
    textDecoration: "none",
    "&:hover": { color: "primary.main" },
  } as const;

  return (
    <>
      {/* Desktop / tablet links */}
      <Stack
        direction="row"
        spacing={{ xs: 1.25, sm: 2, md: 3 }}
        alignItems="center"
        sx={{
          display: { xs: "none", md: "flex" },
          minWidth: 0,
          "& a": { whiteSpace: "nowrap" },
        }}
      >
        <MLink component={Link} to="/" sx={linkSx}>
          Home
        </MLink>
        <MLink href="#roadmap" sx={linkSx}>
          Roadmap
        </MLink>
        <MLink href="#join" sx={linkSx}>
          Community
        </MLink>
        <MLink href="mailto:info@alkebuleum.org" sx={linkSx}>
          Contact
        </MLink>
      </Stack>

      {/* Mobile: hamburger + persistent Join */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <IconButton aria-label="Open menu" onClick={onOpenMenu} sx={{ color: "text.primary" }}>
          <MenuRoundedIcon />
        </IconButton>

        <Button
          href="https://chat.whatsapp.com/E90CmkC0n2J1SUV2PgCaTJ"
          target="_blank"
          variant="outlined"
          size="small"
          startIcon={<WhatsAppIcon sx={{ fontSize: 18 }} />}
          sx={{
            fontWeight: 800,
            borderRadius: 2,
            borderColor: BLUE,
            color: BLUE,
            px: 1.75,
            py: 0.5,
            lineHeight: 1.2,
            "&:hover": {
              borderColor: BLUE,
              backgroundColor: "rgba(14,79,110,0.06)",
            },
          }}
        >
          Join
        </Button>
      </Stack>
    </>
  );
}
