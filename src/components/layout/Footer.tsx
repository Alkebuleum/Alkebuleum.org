import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import LocationOn from "@mui/icons-material/LocationOn";
import LocalPhone from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/Email";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";



const BLUE = "#0E4F6E";
const SAND = "#CBB294";
const BRONZE = "#A97855";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: { xs: 8, md: 10 },
                color: "#0F172A",
                background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(203,178,148,0.08) 100%)",
                borderTop: `1px solid rgba(14,79,110,0.12)`,
            }}
        >
            {/* Accent line */}
            <Box
                sx={{
                    height: 3,
                    background: `linear-gradient(90deg, ${BLUE}, ${SAND})`,
                    opacity: 0.6,
                }}
            />

            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
                <Grid container spacing={{ xs: 5, md: 6 }}>
                    {/* Brand / Mission */}
                    <Grid item xs={12} md={5}>
                        <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                            Alkebuleum
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.85, color: "text.secondary" }}>
                            A decentralized network for Africa and the diaspora. Powered by blockchain, governed by people.
                            Join us to build transparent institutions and widen economic opportunity.
                        </Typography>

                        {/* Mini nav */}
                        <Box sx={{ mt: 2.5 }}>
                            <FooterLink href="#insights">Whitepaper</FooterLink>
                            <FooterLink href="#insights">Vision</FooterLink>
                            <FooterLink href="#roadmap">Roadmap</FooterLink>
                            <FooterLink href="#join">Join</FooterLink>
                        </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                            Contact
                        </Typography>

                        <InfoRow icon={<LocationOn sx={{ color: BRONZE }} />} text="Decentralized" />
                        <InfoRow icon={<LocalPhone sx={{ color: BRONZE }} />} text="+1 512 710 9124" />
                        <InfoRow icon={<Email sx={{ color: BRONZE }} />} text="info@alkebuleum.org" />

                        <Box sx={{ mt: 2 }}>

                            <FooterMeta to="/terms">Terms</FooterMeta>
                            <FooterMeta to="/privacy">Privacy</FooterMeta>
                            <FooterMeta to="/assets">Assets</FooterMeta>
                        </Box>


                    </Grid>

                    {/* Socials */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                            Connect
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap" }}>
                            <SocialIcon href="https://twitter.com/alkebuleum" label="Twitter" hover="#1DA1F2">
                                <Twitter fontSize="small" />
                            </SocialIcon>
                            <SocialIcon href="https://facebook.com/alkebuleum" label="Facebook" hover="#4267B2">
                                <Facebook fontSize="small" />
                            </SocialIcon>
                            <SocialIcon href="https://instagram.com/alkebuleum" label="Instagram" hover="#E1306C">
                                <Instagram fontSize="small" />
                            </SocialIcon>
                            {/*   <SocialIcon href="https://discord.gg/vmUY6mXG" label="Discord" hover="#7289DA">
                                <FaDiscord style={{ fontSize: 16 }} />
                            </SocialIcon> */}
                            <SocialIcon href="https://t.me/alkebuleum" label="Telegram" hover="#0088CC">
                                <Telegram fontSize="small" />
                            </SocialIcon>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom row */}
                <Box sx={{ mt: { xs: 5, md: 6 }, textAlign: "center", color: "text.secondary" }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Alkebuleum. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

/* ---------- subcomponents ---------- */

const InfoRow: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.25 }}>
        {icon}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
        </Typography>
    </Box>
);

const FooterLink: React.FC<React.ComponentProps<typeof Link>> = ({ children, ...props }) => (
    <Link
        {...props}
        underline="none"
        sx={{
            mr: 2,
            fontSize: 14,
            color: "text.secondary",
            "&:hover": { color: BLUE, textDecoration: "underline" },
        }}
    >
        {children}
    </Link>
);

type FooterMetaProps =
    | ({ to: RouterLinkProps["to"]; href?: never } & Omit<MuiLinkProps, "href" | "component">)
    | ({ href: string; to?: never } & Omit<MuiLinkProps, "component">);

export function FooterMeta(props: FooterMetaProps) {
    const { to, href, sx, ...rest } = props as any;

    const baseSx = {
        color: "text.secondary",
        fontWeight: 600,
        mx: 1,
        "&:hover": { color: "primary.main" },
        ...sx,
    };

    if (to) {
        // Internal route
        return (
            <MuiLink component={RouterLink} to={to} underline="hover" sx={baseSx} {...rest} />
        );
    }

    // External link
    return (
        <MuiLink href={href} underline="hover" sx={baseSx} {...rest} />
    );
}

const SocialIcon: React.FC<{ href: string; label: string; hover: string; children: React.ReactNode }> = ({
    href,
    label,
    hover,
    children,
}) => (
    <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#F3F4F6",
            color: BRONZE,
            border: "1px solid rgba(14,79,110,0.10)",
            transition: "all .2s ease",
            "&:hover": {
                backgroundColor: hover,
                color: "#fff",
                transform: "translateY(-1.5px)",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
            },
        }}
    >
        {children}
    </Link>
);

export default Footer;
