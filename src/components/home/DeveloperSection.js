import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Drawer } from "@mui/material";
import coverImage from "../../images/developerCover.png"; // Adjust path accordingly

const BuildOnAlkebuleum = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [proceedLink, setProceedLink] = useState("");

  // Function to open the bottom sheet with a specific link
  const openDrawer = (link) => {
    setProceedLink(link);
    setDrawerOpen(true);
  };

  // Function to close the bottom sheet
  const closeDrawer = () => {
    setDrawerOpen(false);
    setProceedLink("");
  };

  return (
    <Box sx={{ py: 10, bgcolor: "white", position: "relative" }} id="buildonalkebuleum">

      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {/* Left Side: Cover Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={coverImage}
              alt="Build on Alkebuleum"
              sx={{
                width: "80%",  // Reduced width to 80%
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* Right Side: Content */}
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
              Developers
            </Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 3, color: "#333", textAlign: { xs: "center", sm: "left" } }}
            >
              Build on Alkebuleum
            </Typography>

            {/* Updated Description Content */}
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
            >
              Alkebuleum is fully compatible with the Ethereum Virtual Machine (EVM), which means any code written for Ethereum can be used directly on Alkebuleum. Whether you&apos;re developing decentralized applications (dApps), smart contracts, or anything else for Ethereum, you can use the same tools, frameworks, and resources to build on Alkebuleum.
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ mb: 4, lineHeight: 1.7, textAlign: { xs: "center", sm: "left" } }}
            >
              The only differences you&apos;ll need to keep in mind is that Alkebuleum&apos;s network ID is 223724, and the RPC URL is <strong>https://node.alkebuleum.com</strong>. Ensure you&apos;re connected to Alkebuleum when deploying.
            </Typography>

            {/* Call-to-Action Buttons */}
            <Box sx={{ textAlign: { xs: "center", sm: "left" }, display: 'flex', gap: 2 }}>
              <Button
                onClick={() => openDrawer("https://ethereum.org/en/developers/")}  // Trigger drawer with the learn more link
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
                Developers&apos;s Portal
              </Button>

              <Button
                onClick={() => openDrawer("https://ethereum.org/en/developers/docs/")}  // Trigger drawer with the documentation link
                variant="outlined"
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
                Documentation
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Sheet (Drawer) for developer warning */}
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={closeDrawer}
        sx={{
          ".MuiDrawer-paper": {
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            padding: 3,
            backgroundColor: "#fff", // White background for minimalistic look
          }
        }}
      >
        <Box sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#A97855", mb: 2 }}>
            Important Information for Developers
          </Typography>

          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Before proceeding to Ethereum&apos;s website, please ensure that you are aware that Alkebuleum is fully compatible with Ethereum but uses its own network ID and RPC URL.
          </Typography>

          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            <strong>Network ID:</strong> 223724
            <br />
            <strong>RPC URL:</strong> https://node.alkebuleum.com
          </Typography>

          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            After you&apos;ve practiced and learned using Ethereum Resources, you can deploy your dApps on Alkebuleum.
          </Typography>

          <Button
            component="a"
            href={proceedLink} // Proceed to the saved external link
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
            Proceed
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default BuildOnAlkebuleum;
