import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";

const WhyUsSection = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "#f9f9f9", position: "relative" }} id="whyusesection">


            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center" justifyContent="center">
                    {/* Left Side: Text Section */}
                    <Grid item xs={12} sm={7} sx={{ px: 3 }}>
                        {/* Tag above the title */}
                        <Box
                            sx={{
                                backgroundColor: "rgba(208, 233, 239, 0.5)", // Variation of #D0E9EF with transparency
                                color: "#7BA6AC", // Dark grey for text contrast
                                px: 3,
                                py: 1,
                                borderRadius: "20px",
                                fontSize: "14px",
                                textTransform: "uppercase",
                                mb: 2,  // Add margin below the tag
                                display: "inline-block", // Make the tag size match text length
                            }}
                        >
                            Empowering Communities
                        </Box>

                        {/* Section Title */}
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: "bold", mb: 3, color: "#333", textAlign: { xs: "center", sm: "left" } }}
                        >
                            Why Choose Alkebuleum?
                        </Typography>

                        {/* Description Content */}
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Alkebuleum is designed to bring real-world solutions to pressing challenges. Whether you&apos;re looking for a secure, low-cost platform to build your decentralized applications or seeking to transact with minimal fees, Alkebuleum is here for you.
                        </Typography>

                        {/* Sub-heading for Low Fees */}
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#A97855", mb: 2, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Low or Zero Transaction Fees
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Our innovative fee structure ensures that essential transactions, especially those solving societal issues, are charged little to no fees. This empowers individuals and businesses to operate without the usual financial burdens.
                        </Typography>

                        {/* Sub-heading for Decentralized Control */}
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#A97855", mb: 2, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Decentralized Control, Maximum Freedom
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
                        >
                            At Alkebuleum, control rests in the hands of the community. This means no single entity has power over the network. Whether you&apos;re launching a project or engaging in peer-to-peer transactions, you&apos;re guaranteed complete autonomy and security.
                        </Typography>

                        {/* Sub-heading for Unparalleled Security */}
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#A97855", mb: 2, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Cutting-Edge Security
                        </Typography>

                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
                        >
                            Alkebuleum leverages the latest security protocols and encryption standards to protect your data and assets. With end-to-end authentication and superior data integrity, we ensure a safe and reliable platform for every transaction.
                        </Typography>

                        {/* Call-to-Action Button */}
                        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                            <Button
                                component="a"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeDwTq6Uiwvq_pzA9sXDf1RLPFbPGQCsb5_6baTLvlYlnOaiA/viewform"  // Replace with actual signup link
                                variant="contained"
                                sx={{
                                    backgroundColor: "#A97855",
                                    color: "white",
                                    padding: "10px 24px",
                                    fontSize: "16px",
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: "#f9d0ba",
                                    },
                                }}
                            >
                                Join Alkebuleum Today
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Side: Image Section without Background or Card */}
                    <Grid item xs={12} sm={5} sx={{ px: 3, display: "flex", justifyContent: "center" }}>
                        <Box
                            component="img"
                            src="dump.png"  // Replace with your relevant image
                            alt="Alkebuleum Image"
                            sx={{
                                width: "100%",
                                maxWidth: 400,
                                borderRadius: "8px",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyUsSection;
