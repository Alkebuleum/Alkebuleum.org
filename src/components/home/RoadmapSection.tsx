import React from "react";
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Paper,
    Chip,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import VerifiedIcon from "@mui/icons-material/Verified";
import PsychologyIcon from "@mui/icons-material/Psychology";

const BLUE = "#0E4F6E";  // primary
const SAND = "#CBB294";  // secondary
const BRONZE = "#A97855";  // accent

type Stage = {
    key: string;
    title: string;
    label: string;
    icon: React.ReactNode;
};

const stages: Stage[] = [
    {
        key: "afina",
        title: "Afina Beta",
        label: "Early Builders & Contributors",
        icon: <RocketLaunchIcon />,
    },
    {
        key: "pora",
        title: "Mainnet — PoRA",
        label: "Proof of Reputation",
        icon: <VerifiedIcon />,
    },
    {
        key: "posr",
        title: "Mainnet — PoSR",
        label: "Proof of Staked Reputation",
        icon: <MilitaryTechIcon />,
    },
    {
        key: "powu",
        title: "PoWU",
        label: "AI Governance Era",
        icon: <PsychologyIcon />,
    },
];

// Current index in the roadmap (0-based)
const CURRENT_INDEX = 0; // Afina Beta is current

const RoadmapSection: React.FC = () => {
    return (
        <Box
            id="roadmap"
            sx={{
                py: { xs: 6, md: 8 },
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(203,178,148,0.10) 100%)",
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Stack
                    spacing={1.5}
                    alignItems="center"
                    textAlign="center"
                    sx={{ mb: { xs: 5, md: 7 } }}
                >
                    {/* <Chip
                        label="Alkebuleum Roadmap"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 13, md: 14 },
                            px: 1.5,
                            py: 0.25,
                            letterSpacing: "0.2px",
                            bgcolor: "rgba(203,178,148,0.28)", // soft sand tint
                            color: "#0E4F6E", // brand blue
                            border: "1px solid rgba(14,79,110,0.18)",
                            borderRadius: "6px",
                            textTransform: "uppercase",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                        }}
                    /> */}
                    <Chip
                        label="Alkebuleum Roadmap"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 13, md: 14 },
                            px: 1.8,
                            py: 0.4,
                            textTransform: "uppercase",
                            letterSpacing: "0.3px",
                            borderRadius: "8px",
                            color: "#0E4F6E",
                            border: "1px solid rgba(14,79,110,0.3)",
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(203,178,148,0.15) 100%)",
                            backdropFilter: "blur(6px)",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)",
                        }}
                    />





                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.25px",
                            color: "#0F172A",
                            lineHeight: 1.3,
                            maxWidth: 820,
                        }}
                    >
                        Afina Beta is Live
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 740,
                            color: "text.secondary",
                            lineHeight: 1.8,
                            fontSize: { xs: 15, md: 16 },
                        }}
                    >
                        From Afina to a fully autonomous future — start building early on Afina.
                    </Typography>
                </Stack>


                {/* Timeline wrapper */}
                <Box sx={{ position: "relative" }}>
                    {/* Connector line (horizontal on md+, vertical on xs) */}
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 0,
                            left: { xs: 24, md: 0 },
                            right: { xs: 0, md: 0 },
                            top: { xs: 16, md: 64 },
                            bottom: { xs: 16, md: "auto" },
                            height: { xs: "calc(100% - 32px)", md: 4 },
                            width: { xs: 4, md: "100%" },
                            mx: { md: 0 },
                            bgcolor: "transparent",
                            background: {
                                md: `linear-gradient(90deg, ${BLUE} 0%, ${SAND} 60%, rgba(169,120,85,0.6) 100%)`,
                                xs: `linear-gradient(180deg, ${BLUE} 0%, ${SAND} 60%, rgba(169,120,85,0.6) 100%)`,
                            },
                            opacity: 0.25,
                            borderRadius: 999,
                        }}
                    />

                    {/* Stages */}
                    <Grid container spacing={{ xs: 3, md: 2.5 }} sx={{ position: "relative", zIndex: 1 }}>
                        {stages.map((stage, i) => {
                            const isCurrent = i === CURRENT_INDEX;
                            const isDone = i < CURRENT_INDEX;
                            const tone = isCurrent ? BLUE : isDone ? BRONZE : "#94A3B8"; // current blue, done bronze, future slate

                            return (
                                <Grid key={stage.key} item xs={12} md={3}>
                                    <Stack
                                        direction={{ xs: "row", md: "column" }}
                                        spacing={{ xs: 2, md: 1.25 }}
                                        alignItems={{ xs: "center", md: "stretch" }}
                                    >
                                        {/* Node */}
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2,
                                                display: "grid",
                                                placeItems: "center",
                                                color: tone,
                                                border: `2px solid ${tone}`,
                                                backgroundColor: isCurrent
                                                    ? "rgba(14,79,110,0.10)"
                                                    : isDone
                                                        ? "rgba(169,120,85,0.10)"
                                                        : "rgba(148,163,184,0.10)",
                                                boxShadow: isCurrent ? `0 0 0 6px rgba(14,79,110,0.08)` : "none",
                                                flexShrink: 0,
                                                ml: { xs: 2.5, md: 0 },
                                            }}
                                            aria-hidden
                                        >
                                            {stage.icon}
                                        </Box>

                                        {/* Card */}
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                flex: 1,
                                                p: { xs: 2, md: 2.5 },
                                                borderRadius: 3,
                                                border: `1px solid ${isCurrent ? "rgba(14,79,110,0.30)" : "rgba(14,79,110,0.12)"}`,
                                                background:
                                                    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 100%)",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: 800,
                                                    letterSpacing: "-0.1px",
                                                    color: isCurrent ? BLUE : "#0F172A",
                                                }}
                                            >
                                                {stage.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                                                {stage.label}
                                            </Typography>

                                            {/* Progress hint bar at the bottom edge for current/done */}
                                            <Box
                                                sx={{
                                                    mt: 1.5,
                                                    height: 3,
                                                    borderRadius: 999,
                                                    backgroundColor: isDone || isCurrent ? "rgba(14,79,110,0.18)" : "rgba(148,163,184,0.20)",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {isCurrent && (
                                                    <Box
                                                        sx={{
                                                            width: "55%",
                                                            height: "100%",
                                                            background: `linear-gradient(90deg, ${BLUE} 0%, ${SAND} 100%)`,
                                                        }}
                                                    />
                                                )}
                                                {isDone && (
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                            background: `linear-gradient(90deg, ${BRONZE} 0%, ${SAND} 100%)`,
                                                        }}
                                                    />
                                                )}
                                            </Box>

                                            {/* micro copy for each stage (optional, simple definitions) */}
                                            <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 1 }}>
                                                {i === 0 && "Testnet proving ground. Contributors onboard, primitives stabilized."}
                                                {i === 1 && "Reputation-weighted security. Actions earn standing; standing secures network."}
                                                {i === 2 && "Stake reputation to validate. Economic skin amplifies social trust."}
                                                {i === 3 && "AI-assisted governance. Policy simulation, safer defaults, human oversight."}
                                            </Typography>
                                        </Paper>
                                    </Stack>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default RoadmapSection;
