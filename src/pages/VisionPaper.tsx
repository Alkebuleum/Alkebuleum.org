import * as React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Button,
    Chip,
    Stack,
    List,
    ListItemButton,
} from "@mui/material";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import Seo from "../components/seo/seo";

const BLUE = "#0E4F6E";

const toc = [
    { id: "why", label: "Why this vision matters" },
    { id: "purpose", label: "A technology built for purpose" },
    { id: "intro", label: "Introduction" },
    { id: "zk", label: "Embracing Zero-Knowledge Technology" },
    { id: "did", label: "Decentralized Identity (DID) & Compliance" },
    { id: "subchains", label: "Subchains & Private Blockchains" },
    { id: "ai", label: "Decentralized AI & PODA" },
    { id: "foundation", label: "Outreach, Education & Advocacy" },
    { id: "roadmap", label: "Roadmap: Phased Development" },
    { id: "conclusion", label: "Conclusion" },
];

export default function VisionPaperPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jump = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 88; // offset for topbar
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <Box sx={{ py: { xs: 6, md: 8 }, background: "linear-gradient(180deg, #FFFFFF 0%, rgba(203,178,148,0.10) 100%)", }}>
            <Seo
                title="Alkebuleum Vision — PoRA → PoSR → PoWU"
                description="Long-horizon roadmap for reputation-weighted security and AI-assisted governance."
                url="https://alkebuleum.org/vision"
                image="https://alkebuleum.org/og/vision.jpg"
                canonical="https://alkebuleum.org/vision"
            />
            <Container maxWidth="lg">
                {/* Header */}
                <Stack spacing={1.5} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Chip label="Alkebuleum · Vision Paper" sx={{
                        mx: "auto", fontWeight: 700,
                        bgcolor: "rgba(203,178,148,0.30)", color: BLUE, border: "1px solid rgba(14,79,110,0.22)",
                    }} />
                    <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", letterSpacing: "-0.3px" }}>
                        Vision Paper — Charting Africa’s Decentralized Future
                    </Typography>

                </Stack>

                <Grid container spacing={4}>
                    {/* Left: TOC */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Box sx={{
                            position: { md: "sticky" }, top: { md: 96 }, border: "1px solid rgba(14,79,110,0.12)",
                            borderRadius: 2, p: 2, backgroundColor: "#fff",
                        }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                                On this page
                            </Typography>
                            <List dense disablePadding>
                                {toc.map((t) => (
                                    <ListItemButton key={t.id} onClick={() => jump(t.id)}
                                        sx={{
                                            borderRadius: 1,
                                            py: 0.75,
                                            "&:hover": { backgroundColor: "rgba(14,79,110,0.05)" },
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ color: BLUE, fontWeight: 600 }}>
                                            {t.label}
                                        </Typography>
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    {/* Right: Content */}
                    <Grid item xs={12} md={8} lg={9}>
                        {/* WHY */}
                        <Section id="why" title="Why this vision matters">
                            Africa stands at a critical juncture. This vision lays out how Alkebuleum helps
                            the continent leapfrog legacy systems and build a transparent digital economy that
                            prioritizes sovereignty, equity, and inclusion—empowering builders, regulators,
                            and communities across Africa and the diaspora.
                        </Section>

                        {/* PURPOSE */}
                        <Section id="purpose" title="A technology built for purpose">
                            Alkebuleum is designed for more than transactions. With decentralized identity
                            (DID), zero-knowledge proofs, and scalable subchains, we enable private, compliant,
                            verifiable infrastructure for governments, institutions, and individuals.
                        </Section>

                        {/* INTRO */}
                        <Section id="intro" title="Introduction">
                            This Vision Paper extends the original 2022 whitepaper. It incorporates advances
                            in ZK cryptography, DID frameworks, privacy-preserving subchains, and decentralized
                            AI to enhance the mission. The Foundation’s role in education, outreach, and
                            regulatory advocacy remains central to real adoption.
                        </Section>

                        {/* ZK */}
                        <Section id="zk" title="Embracing Zero-Knowledge Technology">
                            <Paragraph>
                                <b>Security via anchoring:</b> Alkebuleum can anchor state to a major L1 like
                                Ethereum via ZK-rollups/validiums—gaining robust security while optimizing for
                                local sovereignty.
                            </Paragraph>
                            <Paragraph>
                                <b>Privacy & sovereignty:</b> ZK proofs verify rules without revealing data,
                                enabling sensitive records (health, identity, public registries) to remain
                                confidential while still auditable.
                            </Paragraph>
                            <Paragraph>
                                <b>Rollups & validiums:</b> ZK-rollups post proofs and data to L1; validiums post
                                proofs while keeping data off-chain for stronger privacy and lower costs.
                            </Paragraph>
                        </Section>

                        {/* DID */}
                        <Section id="did" title="Decentralized Identity (DID) & Compliance">
                            <Paragraph>
                                Alkebuleum adopts standards like W3C DIDs and Verifiable Credentials. Users hold
                                credentials and disclose only what’s needed (e.g., “over 18”) via ZK proofs.
                            </Paragraph>
                            <Paragraph>
                                Compliance becomes privacy-preserving: KYC/AML attestations, residency, and
                                eligibility checks can be enforced without harvesting personal data. Sybil risks
                                drop as reputation and credentials tie to a user’s DID.
                            </Paragraph>
                        </Section>

                        {/* SUBCHAINS */}
                        <Section id="subchains" title="Subchains & Private Blockchains">
                            <Paragraph>
                                Purpose-built subchains (national, sectoral, institutional) can preserve privacy
                                and performance while submitting ZK validity proofs to the mainnet/Ethereum for
                                trust. Standardized bridges and zk-based verification enable asset and message
                                flow across chains without trusted middlemen.
                            </Paragraph>
                            <Paragraph>
                                Governance can maintain a registry of “official” subchains that meet security
                                standards (shared circuits/zkVMs), aligning flexibility with decentralized trust.
                            </Paragraph>
                        </Section>

                        {/* AI & PODA */}
                        <Section id="ai" title="Decentralized AI & PODA">
                            <Paragraph>
                                We extend “Proof of Useful Work” ideas into <b>Proof of Decentralized Agent (PODA)</b>:
                                AI agents take verifiable roles—fraud detection, optimization, or even block
                                participation—proved via redundancy or emerging ZK-ML techniques.
                            </Paragraph>
                            <Paragraph>
                                Agents can have DIDs, reputations, and transparent incentives. We start with
                                auxiliary roles (monitoring, analytics) and iterate toward cautious consensus
                                participation as tech matures.
                            </Paragraph>
                        </Section>

                        {/* FOUNDATION */}
                        <Section id="foundation" title="Outreach, Education & Advocacy">
                            <Paragraph>
                                The Foundation scales education (workshops, curricula, multi-language content),
                                builder incentives (grants, challenges), diaspora engagement, and regulatory
                                advocacy—ensuring tech progress translates to inclusive, real-world adoption.
                            </Paragraph>
                        </Section>

                        {/* ROADMAP */}
                        <Section id="roadmap" title="Roadmap: Phased Development">
                            <Bullet title="Phase 1 — Strengthen the Core (Years 1–2)">
                                POSR stability, DID basics, early ZK pilots, education & grants, regulator outreach.
                            </Bullet>
                            <Bullet title="Phase 2 — ZK Sovereignty & Subchains (Years 2–4)">
                                Anchor to Ethereum (rollup/validium), launch first subchains, verifiable credentials, interop.
                            </Bullet>
                            <Bullet title="Phase 3 — Decentralized AI Integration (Years 3–6)">
                                AI monitoring agents, ops optimization, PODA testnet, DID+AI guardrails.
                            </Bullet>
                            <Bullet title="Phase 4 — PODA & Full Decentralization (Years 5+)">
                                Hybrid PoS/PoUW/PODA direction, broad subchain self-governance, Foundation shifts advisory.
                            </Bullet>
                        </Section>

                        {/* CONCLUSION */}
                        <Section id="conclusion" title="Conclusion">
                            Alkebuleum advances a Pan-African, privacy-preserving, reputation-aware, and
                            AI-assisted blockchain future. With community, builders, and partners, we can
                            deliver transparent infrastructure that empowers Africa and its diaspora.
                        </Section>

                        <Divider sx={{ my: 4 }} />

                        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                            <Button href="/AlkebuleumVisionpaper.pdf" target="_blank" download variant="outlined"
                                startIcon={<DownloadOutlined />}
                                sx={{
                                    borderColor: BLUE, color: BLUE, borderRadius: 2,
                                    "&:hover": { backgroundColor: "rgba(14,79,110,0.06)", borderColor: BLUE }
                                }}
                            >
                                Download PDF
                            </Button>
                            <Button href="/" variant="text" sx={{ color: BLUE, fontWeight: 700 }}>
                                Back to Home
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

/** Helpers */
function Section({
    id,
    title,
    children,
}: React.PropsWithChildren<{ id: string; title: string }>) {
    return (
        <Box id={id} sx={{ mb: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                {title}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "rgba(14,79,110,0.16)" }} />
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                {children}
            </Typography>
        </Box>
    );
}

function Paragraph({ children }: React.PropsWithChildren) {
    return (
        <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2 }}>
            {children}
        </Typography>
    );
}

function Bullet({ title, children }: React.PropsWithChildren<{ title: string }>) {
    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0F172A" }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                {children}
            </Typography>
        </Box>
    );
}