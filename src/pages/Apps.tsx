// src/pages/Apps.tsx
import * as React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Chip,
    Button,
    Stack,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PaymentsIcon from "@mui/icons-material/Payments";
import GroupsIcon from "@mui/icons-material/Groups";
import Seo from "../components/seo/Seo";
import Footer from "../components/layout/Footer";

const BLUE = "#0E4F6E";
const SAND = "#CBB294";
const BRONZE = "#A97855";

type AppCategory = "Identity" | "Governance" | "Finance" | "Community";

interface AlkebuleumApp {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: AppCategory;
    href: string;
    status: "live" | "beta" | "coming_soon";
    icon: React.ReactNode;
}

const APPS: AlkebuleumApp[] = [
    {
        id: "amvault",
        name: "Amvault",
        tagline: "Create your Alkebuleum identity",
        description:
            "Self-custodial wallet and identity hub for managing AKE, credentials, and on-chain activity.",
        category: "Identity",
        href: "https://amvault.net",
        status: "live",
        icon: <FingerprintIcon />,
    },
    {
        id: "ugov",
        name: "Alkebuleum Governance Portal",
        tagline: "Vote on proposals and upgrades",
        description:
            "Stake, delegate, and vote on Alkebuleum governance proposals using ugov.cc.",
        category: "Governance",
        href: "https://ugov.cc",
        status: "live",
        icon: <HowToVoteIcon />,
    },
    {
        id: "jollowswap",
        name: "JollowSwap DEX",
        tagline: "Swap tokens on Alkebuleum",
        description:
            "Community DEX for trading tokens and providing liquidity on the Alkebuleum network.",
        category: "Finance",
        href: "#",
        status: "coming_soon",
        icon: <PaymentsIcon />,
    },
    {
        id: "diasporapay",
        name: "DiasporaPay",
        tagline: "Cross-border payments for the diaspora",
        description:
            "Stablecoin-powered payments and remittances between African countries and the global diaspora.",
        category: "Finance",
        href: "#",
        status: "coming_soon",
        icon: <PaymentsIcon />,
    },
    {
        id: "jengo",
        name: "Jengo",
        tagline: "Escrow for remote work",
        description:
            "Escrow-based freelance marketplace for African builders and the diaspora, secured by Alkebuleum.",
        category: "Community",
        href: "#",
        status: "coming_soon",
        icon: <GroupsIcon />,
    },
];


const statusLabel: Record<AlkebuleumApp["status"], string> = {
    live: "Live",
    beta: "Beta",
    coming_soon: "Coming soon",
};

const statusColor: Record<AlkebuleumApp["status"], "success" | "warning" | "default"> = {
    live: "success",
    beta: "warning",
    coming_soon: "default",
};

export default function Apps() {
    return (
        <>
            <Seo
                title="Explore apps on Alkebuleum"
                description="Discover identity, governance, finance, and community apps built on the Alkebuleum network."
                url="https://alkebuleum.org/apps"
                canonical="https://alkebuleum.org/apps"
            />

            <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh" }}>
                <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 10 } }}>
                    {/* Header */}
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
                        <Typography
                            variant="overline"
                            sx={{
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "#6B7280",
                                fontWeight: 700,
                            }}
                        >
                            Explore
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                mt: 1,
                                fontWeight: 800,
                                color: "#0F172A",
                            }}
                        >
                            Apps on Alkebuleum
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 1.5,
                                maxWidth: 640,
                                mx: "auto",
                                color: "#4B5563",
                            }}
                        >
                            Identity, governance, finance, and community tools built for Africa
                            and the diaspora. Start with Amvault, then explore what’s launching
                            next on the network.
                        </Typography>
                    </Box>

                    {/* App grid */}
                    <Grid container spacing={3}>
                        {APPS.map((app) => (
                            <Grid item xs={12} sm={6} md={3} key={app.id}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        borderRadius: 3,
                                        border: "1px solid rgba(15,23,42,0.06)",
                                        background:
                                            "radial-gradient(circle at 0% 0%, rgba(14,79,110,0.05) 0, transparent 55%)," +
                                            "radial-gradient(circle at 100% 100%, rgba(203,178,148,0.08) 0, rgba(255,255,255,0.9) 55%)",
                                        boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                                        px: 2.5,
                                        py: 2.25,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box>
                                        {/* Icon + category */}
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                            sx={{ mb: 1.25 }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 2,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    border: "1px solid rgba(148,163,184,0.45)",
                                                    background:
                                                        "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0, rgba(248,250,252,0.98) 60%)",
                                                    color: BLUE,
                                                }}
                                            >
                                                {app.icon}
                                            </Box>
                                            <Chip
                                                label={app.category}
                                                size="small"
                                                sx={{
                                                    fontWeight: 600,
                                                    backgroundColor: "rgba(15,23,42,0.04)",
                                                    color: "#111827",
                                                }}
                                            />
                                        </Stack>

                                        {/* Title + status */}
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                            sx={{ mb: 0.5 }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 800,
                                                    color: "#0F172A",
                                                }}
                                            >
                                                {app.name}
                                            </Typography>
                                            <Chip
                                                label={statusLabel[app.status]}
                                                size="small"
                                                color={statusColor[app.status]}
                                                variant={app.status === "coming_soon" ? "outlined" : "filled"}
                                                sx={{
                                                    fontSize: "0.7rem",
                                                    height: 20,
                                                }}
                                            />
                                        </Stack>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#4B5563",
                                                mb: 0.5,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {app.tagline}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#6B7280",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {app.description}
                                        </Typography>
                                    </Box>

                                    {/* CTA */}
                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            fullWidth
                                            size="small"
                                            variant={app.status === "coming_soon" ? "outlined" : "contained"}
                                            disabled={app.status === "coming_soon"}
                                            href={app.href} // always a string
                                            target={app.href.startsWith("http") ? "_blank" : undefined}
                                            rel={app.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            sx={{
                                                borderRadius: 999,
                                                textTransform: "none",
                                                fontWeight: 700,
                                                backgroundColor:
                                                    app.status === "coming_soon" ? "transparent" : BLUE,
                                                borderColor:
                                                    app.status === "coming_soon"
                                                        ? "rgba(15,23,42,0.18)"
                                                        : "transparent",
                                                color:
                                                    app.status === "coming_soon"
                                                        ? "#4B5563"
                                                        : "#FFFFFF",
                                                "&:hover": {
                                                    backgroundColor:
                                                        app.status === "coming_soon" ? "transparent" : "#0C3E56",
                                                },
                                            }}
                                            endIcon={
                                                app.status !== "coming_soon" ? (
                                                    <LaunchIcon sx={{ fontSize: 18 }} />
                                                ) : null
                                            }
                                        >
                                            {app.status === "coming_soon"
                                                ? "Coming soon"
                                                : app.status === "beta"
                                                    ? "Open app (beta)"
                                                    : "Open app"}
                                        </Button>

                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Small note at bottom */}
                    <Box sx={{ mt: 5, textAlign: "center" }}>
                        <Typography variant="caption" sx={{ color: "#6B7280" }}>
                            Are you building on Alkebuleum and want your app listed here?{" "}
                            <Box
                                component="span"
                                sx={{ color: BRONZE, fontWeight: 600 }}
                            >
                                Reach out via the community channels.
                            </Box>
                        </Typography>
                    </Box>
                </Container>

                <Footer />
            </Box>
        </>
    );
}
