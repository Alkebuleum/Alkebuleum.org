import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
    Chip,
    Snackbar,
    Alert,
    IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Item = { src: string; label: string };
type Section = { title: string; items: Item[] };

const BLUE = "#0E4F6E";

const BRAND_COLORS = [
    { name: "Alkebuleum Blue (Primary)", hex: "#0E4F6E" },
    { name: "Alkebuleum Sand (Secondary)", hex: "#CBB294" },
    { name: "Alkebuleum Bronze (Accent)", hex: "#A97855" },
    { name: "Alkebuleum Ivory (Neutral Light)", hex: "#FAFAF8" },
    { name: "Alkebuleum Ink (Neutral Dark)", hex: "#0F172A" },
];

export default function Assets() {
    const [sections, setSections] = useState<Section[]>([]);
    const [snack, setSnack] = useState<{ open: boolean; msg: string }>({ open: false, msg: "" });

    useEffect(() => {
        fetch("/assets-manifest.json", { cache: "no-cache" })
            .then((r) => r.json())
            .then((d) => setSections(d.sections || []))
            .catch(() => setSections([]));
    }, []);

    const copy = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
            setSnack({ open: true, msg: `Copied ${value}` });
        } catch {
            setSnack({ open: true, msg: "Unable to copy" });
        }
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, background: "linear-gradient(180deg,#FFFFFF 0%, rgba(203,178,148,0.08) 100%)" }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Stack spacing={1.25} sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
                    <Chip
                        label="Brand Assets"
                        sx={{
                            mx: "auto",
                            fontWeight: 700,
                            bgcolor: "rgba(203,178,148,0.28)",
                            color: BLUE,
                            border: "1px solid rgba(14,79,110,0.20)",
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 800, color: BLUE, letterSpacing: "-0.4px", lineHeight: 1.15 }}
                    >
                        Alkebuleum Assets
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Download official logos, favicons, covers, and brand color codes. Use respectfully and keep clear space when
                        resizing.
                    </Typography>
                </Stack>

                {/* Brand Colors */}
                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A", mb: 2 }}>
                        Brand Colors
                    </Typography>
                    <Grid container spacing={2.5}>
                        {BRAND_COLORS.map((c) => (
                            <Grid item xs={12} sm={6} md={4} key={c.hex}>
                                <Card
                                    variant="outlined"
                                    sx={{ borderRadius: 2, overflow: "hidden", display: "flex", flexDirection: "column" }}
                                >
                                    <Box
                                        sx={{
                                            height: 96,
                                            backgroundColor: c.hex,
                                            borderBottom: "1px solid rgba(14,79,110,0.12)",
                                        }}
                                    />
                                    <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                                        <Box>
                                            <Typography variant="body2" sx={{ fontWeight: 800, color: "#0F172A" }}>
                                                {c.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                                {c.hex}
                                            </Typography>
                                        </Box>
                                        <IconButton aria-label="Copy HEX" onClick={() => copy(c.hex)} size="small">
                                            <ContentCopyIcon fontSize="small" />
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Asset Sections */}
                {sections.map((sec) => (
                    <Box key={sec.title} sx={{ mb: { xs: 5, md: 7 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A", mb: 2 }}>
                            {sec.title}
                        </Typography>

                        <Grid container spacing={2.5}>
                            {sec.items.map((it) => (
                                <Grid item xs={6} sm={4} md={3} key={it.src}>
                                    <Card variant="outlined" sx={{ borderRadius: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                                        <CardMedia
                                            component="img"
                                            image={it.src}
                                            alt={it.label}
                                            sx={{ objectFit: "contain", backgroundColor: "#fff", aspectRatio: "1 / 1", p: 2 }}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 700, color: "#0F172A" }}>
                                                {it.label}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {it.src.split(".").pop()?.toUpperCase()}
                                            </Typography>
                                        </CardContent>
                                        <Stack direction="row" sx={{ p: 1.5, pt: 0 }}>
                                            <Button
                                                href={it.src}
                                                download
                                                fullWidth
                                                variant="outlined"
                                                startIcon={<DownloadIcon />}
                                                sx={{
                                                    borderColor: BLUE,
                                                    color: BLUE,
                                                    "&:hover": { backgroundColor: "rgba(14,79,110,0.06)", borderColor: BLUE },
                                                }}
                                            >
                                                Download
                                            </Button>
                                        </Stack>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>

            {/* Copy feedback */}
            <Snackbar
                open={snack.open}
                autoHideDuration={1800}
                onClose={() => setSnack({ open: false, msg: "" })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" onClose={() => setSnack({ open: false, msg: "" })} sx={{ width: "100%" }}>
                    {snack.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
}
