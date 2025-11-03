import { Box, Container, Typography, Link } from "@mui/material";
import Seo from "../components/seo/seo";

export default function Privacy() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            <Seo
                title="Privacy Policy — Alkebuleum"
                description="Privacy Policy for alkebuleum.org."
                url="https://alkebuleum.org/privacy"
                canonical="https://alkebuleum.org/privacy"
            />
            <Typography variant="h3" fontWeight={800} gutterBottom>
                Privacy Policy
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                Last updated: {new Date().toLocaleDateString()}
            </Typography>

            <Box sx={{ "& h5": { mt: 4, mb: 1.5, fontWeight: 700 }, "& p": { mb: 2, lineHeight: 1.8 } }}>
                <Typography variant="h5">1. Overview</Typography>
                <Typography>
                    The Alkebuleum Foundation respects your privacy. This Privacy Policy describes how we handle information
                    collected through <b>Alkebuleum.org</b> and associated forms, community applications, and newsletters.
                </Typography>

                <Typography variant="h5">2. Information We Collect</Typography>
                <Typography>
                    We do not collect personal data automatically when you browse this site. However, when you interact with our
                    forms (e.g., community applications or newsletters), we may collect:
                </Typography>
                <ul>
                    <li>Full name and contact information (such as email and phone)</li>
                    <li>Project or role-related details you choose to share</li>
                    <li>Basic analytics (e.g., page visits) via privacy-friendly tools</li>
                </ul>

                <Typography variant="h5">3. How We Use Information</Typography>
                <Typography>
                    Information you provide may be used to:
                </Typography>
                <ul>
                    <li>Respond to your applications or inquiries</li>
                    <li>Invite you to community programs, calls, or ambassador roles</li>
                    <li>Improve the educational and outreach functions of Alkebuleum.org</li>
                </ul>

                <Typography variant="h5">4. Information Sharing</Typography>
                <Typography>
                    We do not sell or rent your information. Data may be shared only with verified Alkebuleum Foundation staff or
                    authorized volunteers responsible for community engagement. We may use third-party services (e.g., Google
                    Forms or WhatsApp) under their respective privacy terms.
                </Typography>

                <Typography variant="h5">5. Cookies & Analytics</Typography>
                <Typography>
                    Alkebuleum.org uses minimal, privacy-respecting analytics to understand site usage trends. We do not employ
                    invasive tracking, advertising pixels, or third-party profiling.
                </Typography>

                <Typography variant="h5">6. Data Retention</Typography>
                <Typography>
                    Personal data submitted through community forms is retained only as long as necessary for its stated purpose
                    or until you request deletion.
                </Typography>

                <Typography variant="h5">7. Your Rights</Typography>
                <Typography>
                    You may request access, correction, or deletion of your personal data by emailing{" "}
                    <Link href="mailto:privacy@alkebuleum.org" underline="hover" color="primary">
                        privacy@alkebuleum.org
                    </Link>.
                </Typography>

                <Typography variant="h5">8. Security</Typography>
                <Typography>
                    We take reasonable steps to protect data, but no online service is entirely secure. Please avoid submitting
                    sensitive financial or identification information through public forms.
                </Typography>

                <Typography variant="h5">9. Policy Updates</Typography>
                <Typography>
                    The Foundation may revise this Privacy Policy occasionally. Updates will be posted here with a new effective
                    date.
                </Typography>

                <Typography variant="h5">10. Contact</Typography>
                <Typography>
                    For privacy inquiries, contact us at{" "}
                    <Link href="mailto:privacy@alkebuleum.org" underline="hover" color="primary">
                        privacy@alkebuleum.org
                    </Link>.
                </Typography>
            </Box>
        </Container>
    );
}
