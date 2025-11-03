import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Paper,
    Chip,
    Button,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const BLUE = "#0E4F6E";  // primary
const SAND = "#CBB294";  // secondary
const BRONZE = "#A97855";  // accent

const items = [
    {
        icon: <VerifiedUserIcon fontSize="large" />,
        title: "Identity",
        body:
            "Portable DIDs and verifiable proofs to unlock trust for people, orgs, and services.",
        bullets: ["DIDs & claims", "Selective disclosure", "On-chain attestations"],
        cta: { label: "Explore Identity", href: "#identity" },
    },
    {
        icon: <GavelIcon fontSize="large" />,
        title: "Governance",
        body:
            "Transparent proposals, voting, and treasury—designed for communities and institutions.",
        bullets: ["Proposals → Queue → Execute", "Treasury timelock", "Snapshots"],
        cta: { label: "Explore Governance", href: "#governance" },
    },
    {
        icon: <AccountBalanceIcon fontSize="large" />,
        title: "Finance",
        body:
            "Remittance and earmarked funds with auditability—serve families, NGOs, and DAO treasuries.",
        bullets: ["Earmark by purpose", "Escrow & disputes", "Audit trails"],
        cta: { label: "Explore Finance", href: "#finance" },
    },
];

const FirstSection: React.FC = () => {
    return (
        <Box
            id="features"
            sx={{
                // subtle earth-sky wash behind the section
                background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(203,178,148,0.10) 100%)",
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                {/* Section header */}
                <Stack spacing={1.25} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Chip
                        label="Alkebuleum Primitives"
                        sx={{
                            mx: "auto",
                            fontWeight: 700,
                            bgcolor: "rgba(203,178,148,0.35)", // SAND tint
                            color: BLUE,
                            border: "1px solid rgba(14,79,110,0.20)",
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 800, letterSpacing: "-0.2px", color: "#0F172A" }}
                    >
                        Built for Trust. Designed for Reality.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 820,
                            mx: "auto",
                            color: "text.secondary",
                            lineHeight: 1.8,
                        }}
                    >
                        Three pillars—<b>Identity</b>, <b>Governance</b>, and <b>Finance</b>—compose into
                        solutions that communities, NGOs, and enterprises can use today.
                    </Typography>
                </Stack>

                {/* Cards */}
                <Grid container spacing={2.5}>
                    {items.map((card) => (
                        <Grid item xs={12} md={4} key={card.title}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: 3,
                                    border: "1px solid rgba(14,79,110,0.12)",
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 100%)",
                                    boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
                                }}
                            >
                                <Stack spacing={1.25}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 2,
                                            display: "grid",
                                            placeItems: "center",
                                            color: BLUE,
                                            border: `1px solid ${BLUE}`,
                                            backgroundColor: "rgba(14,79,110,0.06)",
                                        }}
                                        aria-hidden
                                    >
                                        {card.icon}
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 800, color: "#0F172A", mt: 0.5 }}
                                    >
                                        {card.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        {card.body}
                                    </Typography>

                                    <Stack
                                        component="ul"
                                        sx={{
                                            m: 0,
                                            pl: 2,
                                            color: "text.secondary",
                                            "& li": { mb: 0.5 },
                                        }}
                                    >
                                        {card.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </Stack>

                                    <Box sx={{ pt: 1 }}>
                                        <Button
                                            href={card.cta.href}
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderColor: BLUE,
                                                color: BLUE,
                                                fontWeight: 700,
                                                borderRadius: 2,
                                                px: 2.25,
                                                "&:hover": {
                                                    backgroundColor: "rgba(14,79,110,0.06)",
                                                    borderColor: BLUE,
                                                },
                                                "&:focusVisible": {
                                                    outline: `2px solid ${BRONZE}`,
                                                    outlineOffset: 2,
                                                },
                                            }}
                                        >
                                            {card.cta.label}
                                        </Button>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* subtle note / tagline */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 3 }}
                    justifyContent="center"
                    sx={{
                        mt: { xs: 5, md: 6 },
                        color: "text.secondary",
                        fontSize: 14,
                    }}
                >
                    <span>Open standards • EVM-compatible</span>
                    <span className="hidden sm:inline">•</span>
                    <span>zk-enabled roadmap</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Community-led</span>
                </Stack>
            </Container>
        </Box>
    );
};

export default FirstSection;
