import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Paper,
    Stack,
    Chip,
    Drawer,
    Snackbar,
    Alert,
    Tabs,
    Tab,
    IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TerminalIcon from "@mui/icons-material/Terminal";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SchoolIcon from "@mui/icons-material/School";
import LinkIcon from "@mui/icons-material/Link";
import StorageIcon from "@mui/icons-material/Storage";
import coverImage from "../../images/developerCover.png";

// Brand tokens (keep in sync with theme)
const BLUE = "#0E4F6E";
const SAND = "#CBB294";
const BRONZE = "#A97855";

// Network details (use what you shared; change here if needed)
const CHAIN_ID = 237422; // You mentioned 223724 in your previous copy
const RPC_URL = "https://rpc.alkebuleum.com";

const BuildOnAlkebuleum: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [proceedLink, setProceedLink] = useState<string>("");
    const [snack, setSnack] = useState<{ open: boolean; msg: string; type?: "success" | "info" | "error" }>({
        open: false,
        msg: "",
        type: "success",
    });
    const [tab, setTab] = useState<0 | 1>(0);

    const openDrawer = (link: string) => {
        setProceedLink(link);
        setDrawerOpen(true);
    };
    const closeDrawer = () => {
        setDrawerOpen(false);
        setProceedLink("");
    };

    const copy = async (text: string, label?: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setSnack({ open: true, msg: `${label ?? "Copied"} to clipboard`, type: "success" });
        } catch {
            setSnack({ open: true, msg: "Unable to copy", type: "error" });
        }
    };

    const codeHardhat = `// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    alkebuleum: {
      url: "${RPC_URL}",
      chainId: ${CHAIN_ID},
      // accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  solidity: "0.8.24",
};

export default config;`;

    const codeEthers = `// provider.ts
import { ethers } from "ethers";

export const provider = new ethers.JsonRpcProvider("${RPC_URL}", ${CHAIN_ID});

// example:
async function ping() {
  const block = await provider.getBlockNumber();
  console.log("Alkebuleum block:", block);
}
ping();`;

    return (
        <Box id="buildonalkebuleum" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center" justifyContent="center">
                    {/* Left: Visual */}
                    <Grid item xs={12} md={5}>
                        <Box
                            component="img"
                            src={coverImage}
                            alt="Build on Alkebuleum"
                            sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 3,
                                border: "1px solid rgba(14,79,110,0.10)",
                                boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                            }}
                        />
                    </Grid>

                    {/* Right: Content (fix: allow shrink with minWidth:0) */}
                    <Grid item xs={12} md={7} sx={{ minWidth: 0 }}>
                        <Stack spacing={1.75} alignItems="flex-start" sx={{ textAlign: "left", mb: { xs: 1, md: 0 } }}>
                            <Chip
                                label="Developers"
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
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(203,178,148,0.15) 100%)",
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
                                    maxWidth: 680,
                                }}
                            >
                                Build on Alkebuleum
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: { xs: 15, md: 16 },
                                    maxWidth: 720,
                                }}
                            >
                                Alkebuleum is <b>EVM-compatible</b>. Bring your Solidity, your tools, and your flow. Point your RPC to
                                Alkebuleum and deploy with zero friction.
                            </Typography>

                            {/* Value bullets */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ color: "text.secondary" }}>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <IntegrationInstructionsIcon sx={{ color: BLUE }} />
                                    <span>Hardhat, Foundry, wagmi, ethers</span>
                                </Stack>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <StorageIcon sx={{ color: BLUE }} />
                                    <span>Deterministic factories, proofs roadmap</span>
                                </Stack>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <SchoolIcon sx={{ color: BLUE }} />
                                    <span>Docs & community support</span>
                                </Stack>
                            </Stack>

                            {/* Quick actions */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                <Button
                                    onClick={() => openDrawer("https://ethereum.org/en/developers/")}
                                    variant="contained"
                                    startIcon={<TerminalIcon />}
                                    sx={{
                                        bgcolor: BLUE,
                                        "&:hover": { bgcolor: "#0C3E56", boxShadow: "0 0 10px rgba(14,79,110,0.25)" },
                                    }}
                                >
                                    Developer Portal
                                </Button>
                                <Button
                                    onClick={() => openDrawer("https://ethereum.org/en/developers/docs/")}
                                    variant="outlined"
                                    startIcon={<LinkIcon />}
                                    sx={{
                                        borderColor: BLUE,
                                        color: BLUE,
                                        "&:hover": { backgroundColor: "rgba(14,79,110,0.06)", borderColor: BLUE },
                                    }}
                                >
                                    Documentation
                                </Button>
                            </Stack>

                            {/* Network card + copy */}
                            <Paper
                                elevation={0}
                                sx={{
                                    mt: 1,
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: 3,
                                    border: "1px solid rgba(14,79,110,0.12)",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 100%)",
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                                    Network Settings
                                </Typography>

                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                            RPC URL
                                        </Typography>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            {/* fix: allow long URL to wrap on mobile */}
                                            <Typography variant="body2" sx={{ color: "#0F172A", wordBreak: "break-all" }}>
                                                {RPC_URL}
                                            </Typography>
                                            <IconButton size="small" onClick={() => copy(RPC_URL, "RPC URL")}>
                                                <ContentCopyIcon fontSize="small" />
                                            </IconButton>
                                        </Stack>
                                    </Box>

                                    <Box sx={{ width: { xs: "100%", sm: 160 } }}>
                                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                            Chain ID
                                        </Typography>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography variant="body2" sx={{ color: "#0F172A" }}>
                                                {CHAIN_ID}
                                            </Typography>
                                            <IconButton size="small" onClick={() => copy(String(CHAIN_ID), "Chain ID")}>
                                                <ContentCopyIcon fontSize="small" />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Paper>

                            {/* Code tabs */}
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, md: 2.5 },
                                    borderRadius: 3,
                                    border: "1px solid rgba(14,79,110,0.12)",
                                    background: "#fff",
                                }}
                            >
                                <Tabs
                                    value={tab}
                                    onChange={(_, v) => setTab(v)}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    sx={{
                                        "& .MuiTab-root": { textTransform: "none", fontWeight: 700, minHeight: 0 },
                                    }}
                                >
                                    <Tab label="Hardhat" />
                                    <Tab label="Ethers.js" />
                                </Tabs>

                                <Box
                                    component="pre"
                                    sx={{
                                        mt: 1.5,
                                        p: 2,
                                        borderRadius: 2,
                                        overflowX: "auto",
                                        maxWidth: "100%",            // fix: prevent horizontal stretching
                                        whiteSpace: "pre",           // fix: keep monospace flow without wrapping
                                        wordBreak: "normal",         // fix: don't break words inside code
                                        WebkitOverflowScrolling: "touch", // smoother mobile scroll
                                        fontFamily:
                                            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                        border: "1px solid rgba(14,79,110,0.12)",
                                        background:
                                            "linear-gradient(180deg, rgba(245,246,248,0.65) 0%, rgba(255,255,255,0.85) 100%)",
                                    }}
                                >
                                    {tab === 0 ? codeHardhat : codeEthers}
                                </Box>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom Drawer (kept from your flow, now styled) */}
            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={closeDrawer}
                sx={{
                    ".MuiDrawer-paper": {
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        padding: 3,
                        borderTop: `1px solid ${SAND}`,
                        backgroundColor: "#fff",
                    },
                }}
            >
                <Box sx={{ p: { xs: 2, md: 3 }, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: BRONZE, mb: 1.5 }}>
                        Important Information for Developers
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2.25 }}>
                        Alkebuleum is fully <b>EVM-compatible</b> but uses its own network parameters. Confirm you’re connected to
                        Alkebuleum before deploying.
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        <strong>Chain ID:</strong> {CHAIN_ID}
                        <br />
                        <strong>RPC URL:</strong> {RPC_URL}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        After exploring Ethereum resources, you can deploy your dApps on Alkebuleum with the same tools.
                    </Typography>

                    <Button
                        component="a"
                        href={proceedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        sx={{
                            bgcolor: BLUE,
                            px: 3,
                            "&:hover": { bgcolor: "#0C3E56", boxShadow: "0 0 10px rgba(14,79,110,0.25)" },
                        }}
                    >
                        Proceed
                    </Button>
                </Box>
            </Drawer>

            {/* Copy feedback */}
            <Snackbar
                open={snack.open}
                autoHideDuration={2000}
                onClose={() => setSnack((s) => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    severity={snack.type ?? "success"}
                    onClose={() => setSnack((s) => ({ ...s, open: false }))}
                    sx={{ width: "100%" }}
                >
                    {snack.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default BuildOnAlkebuleum;
