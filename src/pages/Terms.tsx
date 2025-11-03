import { Box, Container, Typography, Link } from "@mui/material";
import Seo from "../components/seo/seo";

export default function Terms() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            <Seo
                title="Terms — Alkebuleum"
                description="Terms of use for alkebuleum.org."
                url="https://alkebuleum.org/terms"
                canonical="https://alkebuleum.org/terms"
            />
            <Typography variant="h3" fontWeight={800} gutterBottom>
                Terms of Use
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                Last updated: {new Date().toLocaleDateString()}
            </Typography>

            <Box sx={{ "& h5": { mt: 4, mb: 1.5, fontWeight: 700 }, "& p": { mb: 2, lineHeight: 1.8 } }}>
                <Typography variant="h5">1. Overview</Typography>
                <Typography>
                    Welcome to <b>Alkebuleum.org</b>, an informational platform maintained by the Alkebuleum Foundation Inc.
                    (“Foundation”, “we”, “us”, or “our”). By accessing or using this website, you agree to these Terms of Use.
                    Please read them carefully. If you do not agree, do not use the site.
                </Typography>

                <Typography variant="h5">2. Purpose of the Website</Typography>
                <Typography>
                    This website is designed to provide information about the Alkebuleum blockchain ecosystem, its mission,
                    open-source projects, educational resources, and community initiatives. It does not offer financial,
                    investment, or legal advice.
                </Typography>

                <Typography variant="h5">3. No Financial Services</Typography>
                <Typography>
                    Alkebuleum.org does not provide, broker, or facilitate the sale or purchase of any digital assets or
                    financial products. Any references to tokens (such as AKE, MAh, or RPU) are purely informational and relate
                    to open-source blockchain functionality. Use of such tokens occurs at your own risk and through third-party
                    networks outside this website.
                </Typography>

                <Typography variant="h5">4. Intellectual Property</Typography>
                <Typography>
                    Unless otherwise stated, content published on Alkebuleum.org—including text, graphics, logos, and design
                    elements—is owned by the Alkebuleum Foundation or contributors under applicable licenses. Open-source code
                    repositories and documentation may be subject to separate license terms, such as MIT or Apache 2.0.
                </Typography>

                <Typography variant="h5">5. Community Contributions</Typography>
                <Typography>
                    You may submit feedback, proposals, or educational materials through community forms or links. By submitting,
                    you grant the Foundation a non-exclusive, royalty-free, and worldwide license to use, display, and
                    redistribute your content in connection with the Alkebuleum ecosystem.
                </Typography>

                <Typography variant="h5">6. Third-Party Links</Typography>
                <Typography>
                    This website may contain links to third-party platforms (e.g., GitHub, WhatsApp, or Medium). These are
                    provided for convenience only. The Foundation is not responsible for the content, terms, or practices of such
                    sites.
                </Typography>

                <Typography variant="h5">7. Disclaimers</Typography>
                <Typography>
                    This website is provided “as is,” without warranties of any kind. The Foundation makes no guarantees about
                    accuracy, reliability, or availability of information. Blockchain technologies are experimental and may
                    involve risks including loss of assets or data.
                </Typography>

                <Typography variant="h5">8. Limitation of Liability</Typography>
                <Typography>
                    To the maximum extent permitted by law, the Foundation and its contributors are not liable for any direct,
                    indirect, incidental, or consequential damages resulting from your use of Alkebuleum.org or related
                    materials.
                </Typography>

                <Typography variant="h5">9. Changes to These Terms</Typography>
                <Typography>
                    The Foundation may update these Terms periodically. Continued use of the website constitutes your acceptance
                    of the latest version.
                </Typography>

                <Typography variant="h5">10. Contact</Typography>
                <Typography>
                    For questions about these Terms, contact us at{" "}
                    <Link href="mailto:info@alkebuleum.org" underline="hover" color="primary">
                        info@alkebuleum.org
                    </Link>.
                </Typography>
            </Box>
        </Container>
    );
}
