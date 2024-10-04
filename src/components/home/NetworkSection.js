import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, Link } from "@mui/material";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'; // Network stat icon

// Component for the Whitepaper Download Button
const Square = () => {
    return (
        <Link href="/AlkebuleumWhitepaper.pdf" target="_blank" underline="none" download>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "16px",
                    border: "2px solid #D0E9EF", // Outline color
                    padding: 2,
                    width: 120,
                    height: 120,
                    textAlign: "center",
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease", // Smooth transition
                    "&:hover": {
                        backgroundColor: "#f9d0ba", // Background on hover
                        color: "#fff", // Text color on hover
                    },
                }}
            >
                <DownloadOutlined sx={{ fontSize: 35, color: "#A97855", mb: 1 }} />
                <Typography variant="body2" fontWeight="bold" color="#A97855">
                    Download
                </Typography>
            </Box>
        </Link>
    );
};

// Main Section Component
const NetworkActivitySection = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "white", position: "relative" }} id="networkactivitysection">
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                {/* Left Side: Network Stats */}
                <Grid item xs={12} md={4} sx={{ px: 3 }}>
                    <Card
                        sx={{
                            minWidth: 275,
                            maxWidth: 700,
                            mx: "auto",
                            bgcolor: "#f5f5f5",
                            color: "#363636",
                            py: 3,
                            height: '100%',
                            borderRadius: "16px",
                            textAlign: "center",
                            border: "2px solid #D0E9EF", // Outline color
                        }}
                    >
                        <CardContent>
                            {/* Network Activity Header */}
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                                Network Activity
                            </Typography>

                            {/* Network Stat Icon */}
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                <NetworkCheckIcon sx={{ fontSize: 80, color: "#A97855" }} />
                            </Box>

                            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                                Monitor the real-time activity on the Alkebuleum blockchain. Stay updated on the latest network status, block information, and more.
                            </Typography>

                            {/* Block Explorer Button */}
                            <Link href="https://explorer.alkebuleum.com" target="_blank" underline="none">
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        borderRadius: "16px",
                                        border: "2px solid #D0E9EF", // Outline color
                                        padding: 2,
                                        width: 120,
                                        height: 120,
                                        textAlign: "center",
                                        backgroundColor: "transparent",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#f9d0ba", // Change background on hover
                                            color: "#fff", // Change text color on hover
                                        },
                                    }}
                                >
                                    <NetworkCheckIcon sx={{ fontSize: 35, color: "#A97855", mb: 1 }} />
                                    <Typography variant="body2" fontWeight="bold" color="#A97855">
                                        Block Explorer
                                    </Typography>
                                </Box>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Side: Whitepaper Download */}
                <Grid item xs={12} md={4} sx={{ px: 3 }}>
                    <Card
                        sx={{
                            minWidth: 275,
                            maxWidth: 600,
                            mx: "auto",
                            bgcolor: "#f5f5f5",
                            color: "#363636",
                            py: 3,
                            height: '100%',
                            borderRadius: "16px",
                            textAlign: "center",
                            border: "2px solid #D0E9EF", // Outline color
                        }}
                    >
                        <CardContent>
                            {/* Whitepaper Header */}
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                                Download Whitepaper
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                <DownloadOutlined sx={{ fontSize: 80, color: "#A97855" }} />
                            </Box>

                            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                                Discover how Alkebuleum is reshaping blockchain technology by addressing real-world challenges. Download the whitepaper to learn more.
                            </Typography>

                            <Box sx={{ mt: 3 }}>
                                <Square />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NetworkActivitySection;
