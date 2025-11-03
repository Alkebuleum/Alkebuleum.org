import React from "react";
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Button,
    Paper,
    Chip,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import CampaignIcon from "@mui/icons-material/Campaign";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { event as gaEvent } from "../../analytics/ga"; // <-- make sure this path matches your project

const BLUE = "#0E4F6E";
const SAND = "#CBB294";
const BRONZE = "#A97855";

type Option = {
    icon: React.ReactNode;
    title: string;
    desc: string;
    href: string;
};

const options: Option[] = [
    {
        icon: <GroupsIcon fontSize="large" />,
        title: "Join the Builders Hub",
        desc:
            "Connect with innovators, developers, and thinkers driving Africa’s decentralized future.",
        href: "https://forms.gle/nyfYY3inDLdtiU1g6",
    },
    {
        icon: <CampaignIcon fontSize="large" />,
        title: "Join Community Calls",
        desc:
            "Tune in to monthly sessions featuring ecosystem updates, demos, and live discussions with the team.",
        href: "https://forms.gle/XTMHX4SESrRKbzKs5",
    },
    {
        icon: <RecordVoiceOverIcon fontSize="large" />,
        title: "Feature on Alkebuleum Podcast",
        desc:
            "Share your vision or project on our Community Spotlight series — your story can inspire the next innovator.",
        href: "https://forms.gle/TCHtghspAAeCJ8vy9",
    },
    {
        icon: <VideoLibraryOutlinedIcon fontSize="large" />,
        title: "Become a Content Creator",
        desc:
            "Help us tell the story of Africa’s digital transformation. Create videos, blogs, or social content that inspires builders and communities.",
        href: "https://forms.gle/WJniHcx4tVFUPBgL9",
    },
    {
        icon: <EmojiEventsOutlinedIcon fontSize="large" />,
        title: "Become an Ambassador",
        desc:
            "Represent Alkebuleum in your region — lead outreach, grow the community, and earn recognition for your impact.",
        href: "https://forms.gle/7o5owDJBG6WaGTMP8",
    },
    {
        icon: <SchoolOutlinedIcon fontSize="large" />,
        title: "Teach at Alkebuleum Academy",
        desc:
            "Empower others through blockchain education — help us train Africa’s next generation of builders.",
        href: "https://forms.gle/w9HJSKP5JATAiBt29",
    },
];

const JoinSection: React.FC = () => {
    const trackClick = (label: string, href: string) => {
        // Fire GA event (safe no-op if GA not loaded)
        gaEvent("join_option_click", {
            label,           // e.g., "Join the Builders Hub"
            href,            // the form link
            section: "join", // page section
            page: "home",    // page name
        });
    };

    return (
        <Box
            id="join"
            sx={{
                py: { xs: 8, md: 10 },
                background:
                    "linear-gradient(180deg, rgba(14,79,110,0.05) 0%, rgba(203,178,148,0.12) 100%)",
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
                    <Chip
                        label="Get Involved"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 13, md: 14 },
                            px: 1.8,
                            py: 0.4,
                            textTransform: "uppercase",
                            letterSpacing: "0.3px",
                            borderRadius: "8px",
                            color: BLUE,
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
                            color: "#0F172A",
                            letterSpacing: "-0.25px",
                            lineHeight: 1.3,
                            maxWidth: 820,
                        }}
                    >
                        Join the Effort
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            maxWidth: 740,
                            mx: "auto",
                            lineHeight: 1.8,
                            fontSize: { xs: 15, md: 16 },
                        }}
                    >
                        Alkebuleum’s progress is powered by contributors, thinkers,
                        educators, and dreamers like you. Choose how you’d like to be
                        involved.
                    </Typography>
                </Stack>

                {/* Options */}
                <Grid container spacing={3}>
                    {options.map((opt) => (
                        <Grid item xs={12} sm={6} md={4} key={opt.title}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    background: "#fff",
                                    border: "1px solid rgba(14,79,110,0.12)",
                                    transition: "all 0.25s ease",
                                    "&:hover": {
                                        borderColor: BLUE,
                                        boxShadow: "0 8px 20px rgba(14,79,110,0.15)",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <Stack spacing={2} alignItems="center" textAlign="center">
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: "50%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "rgba(14,79,110,0.08)",
                                            color: BLUE,
                                        }}
                                        aria-hidden
                                    >
                                        {opt.icon}
                                    </Box>

                                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A" }}>
                                        {opt.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ color: "text.secondary", lineHeight: 1.6, minHeight: 48 }}
                                    >
                                        {opt.desc}
                                    </Typography>

                                    <Button
                                        href={opt.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        onClick={() => trackClick(opt.title, opt.href)}
                                        sx={{
                                            borderColor: BRONZE,
                                            color: BRONZE,
                                            fontWeight: 700,
                                            borderRadius: 2,
                                            mt: 1,
                                            "&:hover": {
                                                borderColor: BLUE,
                                                color: BLUE,
                                                backgroundColor: "rgba(14,79,110,0.06)",
                                            },
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default JoinSection;
