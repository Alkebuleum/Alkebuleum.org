import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Drawer } from "@mui/material";
import openbookArt from "../../images/openbookArt.png"; // Importing your image

const FeaturesSection = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // Function to toggle the drawer
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Example list of use cases with titles and descriptions
    const useCases = [
        {
            title: "DAO Governance",
            description: "Manage decentralized autonomous organizations with transparent governance systems."
        },
        {
            title: "Project Management",
            description: "Coordinate projects securely, ensuring transparency and accountability."
        },
        {
            title: "Decentralized Voting",
            description: "Enable secure and decentralized voting on proposals and key decisions."
        },
        {
            title: "Resource Allocation",
            description: "Track and allocate resources effectively within a decentralized system."
        },
        {
            title: "Community Collaboration",
            description: "Create a collaborative environment for communities to work together on projects."
        },
        {
            title: "Secure Contracts",
            description: "Draft and enforce contracts securely using blockchain technology."
        },
        {
            title: "Real-time Auditing",
            description: "Allow for real-time auditing of finances and project activities."
        },
        {
            title: "Group Coordination",
            description: "Coordinate group efforts efficiently with decentralized tools and transparency."
        }
    ];

    return (
        <Box sx={{ py: 10, bgcolor: "white", position: "relative" }} id="featuressection">


            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center" justifyContent="center">
                    {/* Left Side: Image Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={openbookArt}
                            alt="Openbook Art"
                            sx={{
                                width: "80%",  // Reduced the width to 80%
                                height: "auto",
                                borderRadius: "8px",
                                mx: "auto",
                            }}
                        />
                    </Grid>

                    {/* Right Side: Text and Call-to-Action Section */}
                    <Grid item xs={12} md={6}>

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
                            Use Case
                        </Box>

                        {/* Section Title */}
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
                        >
                            Create Decentralized Autonomous Organizations on Alkebuleum with Openbook
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ mb: 4, textAlign: "left", lineHeight: 1.7 }}
                        >
                            Openbook is a decentralized collaboration platform built on the Alkebuleum blockchain. It allows groups, organizations, and communities to create secure, decentralized workspaces where they can manage projects, communicate, and build together. Openbook leverages blockchain technology to ensure transparency and security, making it the ideal tool for decentralized governance and project management.
                        </Typography>

                        {/* Call-to-Action Buttons */}
                        <Box sx={{ textAlign: "left", display: 'flex', gap: 2 }}>
                            <Button
                                component="a"
                                href="https://openbookdapp.com" // Replace with actual signup link
                                variant="contained"
                                sx={{
                                    backgroundColor: "#A97855",
                                    color: "white",
                                    padding: "10px 24px",
                                    fontSize: "16px",
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: "#f9d0ba",
                                        color: "#333", // Change text color on hover
                                    },
                                }}
                            >
                                Get Started
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={toggleDrawer(true)} // Open the bottom sheet
                                sx={{
                                    borderColor: "#A97855",
                                    color: "#A97855",
                                    padding: "10px 24px",
                                    fontSize: "16px",
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: "#f9d0ba",
                                        borderColor: "#f9d0ba",
                                        color: "#333", // Change text color on hover
                                    },
                                }}
                            >
                                More Use Cases
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom Sheet (Drawer) for displaying use cases */}
            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    ".MuiDrawer-paper": {
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        padding: 3,
                        backgroundColor: "#fff", // White background for minimalistic look
                    }
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        padding: 3,
                        maxHeight: "50vh", // Limit the height of the drawer
                        overflow: "auto", // Enable scrolling if the content exceeds the height
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            mb: 2,
                            color: "#A97855", // Branding color for the title
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                    >
                        Use Cases
                    </Typography>

                    <Grid container spacing={2}>
                        {useCases.map((useCase, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Box
                                    sx={{
                                        padding: 2,
                                        backgroundColor: "#f9f9f9", // Light background for use case box
                                        borderRadius: "8px",
                                        textAlign: "left",
                                        border: "1px solid #A97855", // Border matching branding color
                                        color: "#333", // Text color
                                        "&:hover": {
                                            backgroundColor: "#f1f1f1", // Subtle hover effect
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "#A97855" }}
                                    >
                                        {useCase.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                                        {useCase.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    );
};

export default FeaturesSection;
