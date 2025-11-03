import { Stack, Link as MLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkSx = {
    color: "text.primary",
    fontWeight: 700,
    letterSpacing: 0.2,
    "&:hover": { color: "primary.main" },
    textDecoration: "none",
  } as const;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <MLink component={Link} to="/" sx={linkSx}>Home</MLink>
      <MLink href="#roadmap" sx={linkSx}>Roadmap</MLink>
      <MLink href="#join" sx={linkSx}>Community</MLink>
      <MLink href="mailto:info@alkebuleum.org" sx={linkSx}>Contact</MLink>
    </Stack>
  );
}
