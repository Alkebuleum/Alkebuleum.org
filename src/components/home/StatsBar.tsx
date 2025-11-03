import { Box, Container, Grid, Typography } from "@mui/material";

const stats = [
    { k: "3", v: "Core Primitives", sub: "Identity · Governance · Finance" },
    { k: "EVM", v: "Compatible", sub: "Standards-first integrations" },
    { k: "zk", v: "Roadmap", sub: "Privacy-preserving proofs" },
    { k: "Open", v: "Source", sub: "Community-led evolution" },
];

export default function StatsBar() {
    return (
        <Box sx={{ py: { xs: 5, md: 7 }, borderTop: "1px solid rgba(2,6,23,0.06)", borderBottom: "1px solid rgba(2,6,23,0.06)", background: "#fff" }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {stats.map((s) => (
                        <Grid key={s.k + s.v} item xs={6} md={3}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography sx={{ fontWeight: 900, fontSize: 28, color: "primary.main", letterSpacing: "-0.02em" }}>
                                    {s.k} <span style={{ color: "#0F172A" }}>{s.v}</span>
                                </Typography>
                                <Typography variant="caption" sx={{ color: "text.secondary" }}>{s.sub}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
