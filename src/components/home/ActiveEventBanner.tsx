import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {
    ActiveEventConfig,
    fetchActiveEvent,
} from "../../services/activeEventService";

interface CountdownState {
    diffMs: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function computeCountdown(targetMs: number, nowMs: number): CountdownState {
    if (!Number.isFinite(targetMs)) {
        return { diffMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const diffMs = targetMs - nowMs;
    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { diffMs, days, hours, minutes, seconds };
}

function pad2(value: number) {
    return value.toString().padStart(2, "0");
}

export default function ActiveEventBanner() {
    // 🔹 Hooks (keep order stable)
    const [event, setEvent] = React.useState<ActiveEventConfig | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [now, setNow] = React.useState(() => Date.now());
    const navigate = useNavigate();

    // Fetch event once
    React.useEffect(() => {
        let cancelled = false;

        (async () => {
            const result = await fetchActiveEvent();
            if (!cancelled) {
                setEvent(result);
                setLoading(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    // Tick every second *only* if we have an event
    React.useEffect(() => {
        if (!event) return;

        const id = window.setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => {
            window.clearInterval(id);
        };
    }, [event]);

    // 🔹 No more hooks below

    if (loading || !event) return null;

    const targetMs = new Date(event.goLiveAt).getTime();
    const hideAfterMs = event.hideAfter ? new Date(event.hideAfter).getTime() : undefined;

    if (hideAfterMs && now > hideAfterMs) return null;

    const countdown = computeCountdown(targetMs, now);
    const isLive = Number.isFinite(targetMs) && now >= targetMs;
    const showCountdown = !isLive;

    const handleBannerClick = () => {
        if (!event.ctaHref) return;

        const href = event.ctaHref;

        if (href.startsWith("http://") || href.startsWith("https://")) {
            window.location.href = href;
        } else {
            navigate(href);
        }
    };

    const handleBannerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
        e,
    ) => {
        if (!event.ctaHref) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleBannerClick();
        }
    };

    // Brand colors from your Tailwind config
    const brandBlue = "#0E4F6E";
    const brandInk = "#0F172A";
    const brandBeige = "#E7D8C9";

    return (
        <Box
            role={event.ctaHref ? "button" : "banner"}
            tabIndex={event.ctaHref ? 0 : -1}
            onClick={event.ctaHref ? handleBannerClick : undefined}
            onKeyDown={event.ctaHref ? handleBannerKeyDown : undefined}
            sx={{
                bgcolor: brandBlue,
                backgroundImage: `linear-gradient(90deg, ${brandBlue}, ${brandInk})`,
                color: "#F9FAFB",
                pt: { xs: 12, md: 10 },   // 👈 more top padding
                pb: { xs: 2, md: 2.5 },
                boxShadow: "0 4px 12px rgba(2, 6, 23, 0.3)",
                position: "relative",
                zIndex: 0,
                cursor: event.ctaHref ? "pointer" : "default",
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Left: name + label (centered vertically like FUSAKA) */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                fontSize: { xs: "0.95rem", md: "1.05rem" },
                            }}
                        >
                            {event.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 700,
                                opacity: 0.9,
                                fontSize: "0.7rem",
                            }}
                        >
                            {event.label}
                        </Typography>
                    </Grid>

                    {/* Middle: description + inline Read more */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            mt: { xs: 1, md: 0 },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                maxWidth: { xs: "100%", md: 520 },
                                mx: { xs: "auto", md: 0 },
                                opacity: 0.95,
                            }}
                        >
                            {event.description}{" "}
                            {event.ctaHref && event.ctaLabel && (
                                <Link
                                    href={event.ctaHref}
                                    onClick={(e) => e.stopPropagation()}
                                    underline="always"
                                    sx={{
                                        color: brandBeige,
                                        fontWeight: 600,
                                    }}
                                >
                                    {event.ctaLabel}.
                                </Link>
                            )}
                        </Typography>
                    </Grid>

                    {/* Right: GOING LIVE IN + big countdown */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-end" },
                            mt: { xs: 1.5, md: 0 },
                        }}
                    >
                        <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.16em",
                                    fontWeight: 700,
                                    color: brandBeige,
                                }}
                            >
                                {showCountdown ? "Going live in" : "Live now"}
                            </Typography>

                            {showCountdown ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: {
                                            xs: "center",
                                            md: "flex-end",
                                        },
                                        gap: 2.5,
                                        mt: 0.75,
                                    }}
                                >
                                    {[
                                        ["Days", countdown.days],
                                        ["Hours", countdown.hours],
                                        ["Minutes", countdown.minutes],
                                    ].map(([label, value]) => (
                                        <Box
                                            key={label}
                                            sx={{ textAlign: "center" }}
                                        >
                                            <Typography
                                                component="div"
                                                sx={{
                                                    fontSize: "1.4rem",
                                                    fontWeight: 800,
                                                    lineHeight: 1.1,
                                                }}
                                            >
                                                {pad2(value as number)}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    textTransform: "uppercase",
                                                    opacity: 0.8,
                                                    fontSize: "0.65rem",
                                                }}
                                            >
                                                {label}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                event.ctaHref &&
                                event.ctaLabel && (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleBannerClick();
                                        }}
                                        sx={{
                                            mt: 1,
                                            borderRadius: 999,
                                            px: 2.5,
                                            bgcolor: brandBeige,
                                            color: brandInk,
                                            fontWeight: 700,
                                            textTransform: "none",
                                            "&:hover": {
                                                bgcolor: "#F1E3D3",
                                            },
                                        }}
                                    >
                                        View details
                                    </Button>
                                )
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
