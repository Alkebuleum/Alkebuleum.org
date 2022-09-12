import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, Button } from "@mui/material";
import Countdown from "react-countdown";
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";

const TeamSection = () => {
    const arr = ["abc", "abc", "abc", "abc", "abc", "abc"];
    return (
        <Box sx={{ py: 7, border: "none", bgcolor: "white" }} id="teamsection">
            <Box sx={{ fontWeight: "bold", color: "#363636", mb: 5, typography: { sm: "h4", xs: "h5" }, textAlign: "center" }} component="div">
                Team Members
            </Box>
            <Grid container spacing={4} sx={{ width: "100%", mx: 0 }}>
                {arr.map((ele,index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} sx={{ px: 3 }} key={index}>
                            <Card
                                sx={{
                                    minWidth: 300,
                                    maxWidth: 400,
                                    mx: "auto",
                                    backgroundImage: "linear-gradient(to right, #b79472 , #f9d0ba)",
                                    color: "white",
                                    p: 2,
                                }}
                            >
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Box sx={{ color: "white", mb: 1, typography: "body", pb: 1, borderBottom: "solid white 1px" }} component="div">
                                        Get data from millions of web pages. Enter thousands of links and keywords that ParseHub will automatically
                                        search through. Use our REST API. Download the extracted data in Excel and JSON. Import your results into
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Box component="img" alt="photo" width={40} height={40} sx={{ borderRadius: "50%" }} src="logo.png" />
                                        <Box sx={{ fontWeight: "bold", color: "#363636", ml: 2, typography: { sm: "h5", xs: "h6" } }} component="div">
                                            {ele}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default TeamSection;
