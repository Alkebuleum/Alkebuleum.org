import React from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    CardMedia,
    Chip,
} from "@mui/material";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import { Link as RouterLink } from "react-router-dom";


// Images
import frontpageAfricaImg from "../../images/media-frontpageafrica.png";
import visionPaperImg from "../../images/vision-paper.png";

// GA
import { event as gaEvent } from "../../analytics/ga";

const BLUE = "#0E4F6E";

const InsightsSection: React.FC = () => {
    const track = (
        action: string,
        params: Record<string, any> = {}
    ) => gaEvent(action, { page: "home", section: "insights", ...params });

    return (
        <Box
            id="insights"
            sx={{
                py: { xs: 8, md: 10 },
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(203,178,148,0.10) 100%)",
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: { xs: 5, md: 7 } }}>
                    <Chip
                        label="Network · Papers · Media"
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
                            background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(203,178,148,0.15) 100%)",
                            backdropFilter: "blur(6px)",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)",
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 800, letterSpacing: "-0.25px", color: "#0F172A", lineHeight: 1.3 }}
                    >
                        Activity & Insights
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            maxWidth: 820,
                            mx: "auto",
                            lineHeight: 1.8,
                            fontSize: { xs: 15, md: 16 },
                        }}
                    >
                        See the network in motion, read the key papers, and catch up on press.
                    </Typography>
                </Stack>

                {/* Row: Network + Papers (ALL equal height) */}
                <Grid container spacing={3}>
                    {/* Network Activity */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
                                p: 3,
                                height: "100%",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.12)",
                                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
                                transition: "transform .25s ease",
                                display: "flex",
                                flexDirection: "column",
                                "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight={800} mb={2} color="#0F172A">
                                    Network Activity
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Monitor blocks, transactions, and validator checkpoints in real time.
                                </Typography>
                            </CardContent>

                            <Box sx={{ p: 2, pt: 0, textAlign: "center" }}>
                                <Button
                                    href="https://explorer.alkebuleum.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    onClick={() => track("open_block_explorer", { link: "https://explorer.alkebuleum.com" })}
                                    sx={{
                                        fontWeight: 700,
                                        borderRadius: 2,
                                        borderColor: BLUE,
                                        color: BLUE,
                                        "&:hover": {
                                            backgroundColor: "rgba(14,79,110,0.06)",
                                            borderColor: BLUE,
                                        },
                                    }}
                                >
                                    Open Block Explorer
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Whitepaper */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.12)",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="overline" sx={{ color: "text.secondary" }}>
                                    Whitepaper · v0.4
                                </Typography>
                                <Typography variant="h6" fontWeight={800} color="#0F172A" mb={1}>
                                    Architecture & Token Mechanics
                                </Typography>
                                <Stack component="ul" sx={{ pl: 2.3, m: 0 }} spacing={0.5}>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        Identity + Governance + Finance cohesion
                                    </Typography>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        Reputation-weighted incentives (AKE / RPU / MAh)
                                    </Typography>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        On-chain accountability primitives
                                    </Typography>
                                </Stack>
                            </CardContent>

                            <Box sx={{ p: 2, pt: 0, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                                <Button
                                    component={RouterLink}
                                    to="/whitepaper"
                                    variant="contained"
                                    onClick={() => track("whitepaper_read_online")}
                                    sx={{
                                        borderRadius: 2,
                                        fontWeight: 700,
                                        bgcolor: BLUE,
                                        "&:hover": { bgcolor: "#0C3E56" },
                                    }}
                                >
                                    Read Online
                                </Button>

                                <Button
                                    href="/AlkebuleumWhitepaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    variant="outlined"
                                    startIcon={<DownloadOutlined />}
                                    onClick={() => track("whitepaper_download_pdf", { link: "/AlkebuleumWhitepaper.pdf" })}
                                    sx={{
                                        borderRadius: 2,
                                        fontWeight: 700,
                                        borderColor: BLUE,
                                        color: BLUE,
                                        "&:hover": {
                                            backgroundColor: "rgba(14,79,110,0.06)",
                                            borderColor: BLUE,
                                        },
                                    }}
                                >
                                    Download PDF
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Vision Paper */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.12)",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="overline" sx={{ color: "text.secondary" }}>
                                    Vision · 2030+
                                </Typography>
                                <Typography variant="h6" fontWeight={800} color="#0F172A" mb={1}>
                                    Trusted Infrastructure for the Continent
                                </Typography>
                                <Stack component="ul" sx={{ pl: 2.3, m: 0 }} spacing={0.5}>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        Path: PoRA → PoSR → PoWU
                                    </Typography>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        Governance that rewards verifiable contribution
                                    </Typography>
                                    <Typography component="li" variant="body2" color="text.secondary">
                                        Public accountability by design
                                    </Typography>
                                </Stack>
                            </CardContent>

                            <Box sx={{ p: 2, pt: 0, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                                <Button
                                    component={RouterLink}
                                    to="/vision"
                                    variant="contained"
                                    onClick={() => track("visionpaper_read_online")}
                                    sx={{
                                        borderRadius: 2,
                                        fontWeight: 700,
                                        bgcolor: BLUE,
                                        "&:hover": { bgcolor: "#0C3E56" },
                                    }}
                                >
                                    Read Online
                                </Button>

                                <Button
                                    href="/AlkebuleumVisionpaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    variant="outlined"
                                    startIcon={<DownloadOutlined />}
                                    onClick={() => track("visionpaper_download_pdf", { link: "/AlkebuleumVisionpaper.pdf" })}
                                    sx={{
                                        borderRadius: 2,
                                        fontWeight: 700,
                                        borderColor: BLUE,
                                        color: BLUE,
                                        "&:hover": {
                                            backgroundColor: "rgba(14,79,110,0.06)",
                                            borderColor: BLUE,
                                        },
                                    }}
                                >
                                    Download PDF
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                {/* Media & Press */}
                <Grid container spacing={3} sx={{ mt: { xs: 5, md: 6 } }}>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                            <ArticleIcon sx={{ color: BLUE }} />
                            <Typography variant="h6" fontWeight={800} color="#0F172A">
                                Media & Press
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.12)",
                                overflow: "hidden",
                                transition: "transform .25s ease",
                                "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardMedia component="img" height="180" image={frontpageAfricaImg} alt="FrontPage Africa" />
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={800} gutterBottom color="#0F172A">
                                    Alkebuleum Blockchain Launches Liberia’s First Anti-Corruption Technology Program
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    FrontPage Africa covers our initiative to bring transparent rails to public services.
                                </Typography>
                                <Button
                                    href="https://frontpageafricaonline.com/news/alkebuleum-blockchain-launches-liberias-first-anti-corruption-technology-program/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    onClick={() =>
                                        track("press_read_article", {
                                            source: "FrontPage Africa",
                                            link:
                                                "https://frontpageafricaonline.com/news/alkebuleum-blockchain-launches-liberias-first-anti-corruption-technology-program/",
                                        })
                                    }
                                    sx={{ borderColor: BLUE, color: BLUE, "&:hover": { backgroundColor: "rgba(14,79,110,0.06)" } }}
                                >
                                    Read Article
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.12)",
                                overflow: "hidden",
                                transition: "transform .25s ease",
                                "&:hover": { transform: "translateY(-4px)" },
                            }}
                        >
                            <CardMedia component="img" height="180" image={visionPaperImg} alt="Vision Paper" />
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={800} gutterBottom color="#0F172A">
                                    Alkebuleum Vision Paper Released
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    How we’ll scale trust with reputation-weighted security and AI-assisted governance.
                                </Typography>
                                <Button
                                    href="/AlkebuleumVisionpaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    startIcon={<DownloadOutlined />}
                                    onClick={() =>
                                        track("press_download_vision_pdf", { link: "/AlkebuleumVisionpaper.pdf" })
                                    }
                                    sx={{ borderColor: BLUE, color: BLUE, "&:hover": { backgroundColor: "rgba(14,79,110,0.06)" } }}
                                >
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InsightsSection;
