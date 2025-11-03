import { Drawer, Box, Stack, Link as MLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function SideDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const linkSx = {
    color: "text.primary",
    fontWeight: 700,
    fontSize: "1.125rem",
    "&:hover": { color: "primary.main" },
    textDecoration: "none",
  } as const;

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 3 }} role="presentation" onClick={onClose}>
        <Stack spacing={2.5}>
          <MLink component={Link} to="/" sx={linkSx}>Home</MLink>
          <MLink component={Link} to="/#identity" sx={linkSx}>Identity</MLink>
          <MLink component={Link} to="/#governance" sx={linkSx}>Governance</MLink>
          <MLink component={Link} to="/#finance" sx={linkSx}>Finance</MLink>
          <MLink component={Link} to="/#community" sx={linkSx}>Community</MLink>
        </Stack>
      </Box>
    </Drawer>
  );
}
