import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, Button } from "@mui/material";
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";
const WhyUsSection = () => {
    return (
        <Box sx={{ py: 5 }} id="whyusesection">
            <Grid container spacing={4} sx={{ width: "100%", mx: 0 }}>
                <Grid item xs={12} sm={7} sx={{ px: 3 }}>
                    <Box sx={{ color: "#363636", typography: { sm: "h4", xs: "h5" }, mb: 2, fontWeight: "bold !important" }}>Why You Choose us </Box>

                    <Typography variant="body" color="#363636" component="div">
                        Considering the growing interest of public towards the crypto currencies and their rising popularity, this template has got
                        all the chances to become a successful internet enterprise for mining hardware manufacturer or new cryptocurrency project.
                        Especially if you’re already looking for a solution for a website that would accept charges of different currencies.
                    </Typography>
                    <Box>
                        <Button component="a" target="_blank" href="/buytoken"  sx={{ color: "white", bgcolor: "#6d8d6e", mt: 3, px: 3, mr: 3 }}>Buy AKE</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} sx={{ px: 3, display: "flex", justifyContent: "center" }}>
                    <Box component="img" src="dump.png" alt="dump" sx={{ width: { sm: "100%", xs: 200 }, maxWidth: 400 }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhyUsSection;
