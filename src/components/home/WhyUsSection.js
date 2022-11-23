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
                    <Box sx={{ color: "#363636", typography: { sm: "h4", xs: "h5" }, mb: 2, fontWeight: "bold !important" }}>Why Alkebuleum </Box>

                    <Typography variant="body" color="#363636" component="div">
                        Alkebuleum is an impact driven blockchain, highly secure and regulation compliant. It is being built to tackle institutional coruption, lack of accountability, resource mis-managment and others. Unlike others, Alkebuleum is being customized to operate in Africa, disrupting the existing financial market by instroducing the fastest and lowest to zero(0) fees for financial transactions and money transfer.
                    </Typography>
                    <Box sx={{ mb:2 }}></Box>
                    <Box sx={{ color: "#363636", typography: { sm: "h6", xs: "h5" }, mb: 1, fontWeight: "bold" }}>Social Impact + Economic Growth </Box>

                    <Typography variant="body" color="#363636" component="div">
                        The project is attracting volunteers, Developers, valitadaors, ativiates, and people with a common interest of making impact over profit. The impact the blockchain will have will parellelly improve the economic situation of people who are affected by it.
                    </Typography>
                    <Box sx={{ mb:2 }}></Box>
                    <Box sx={{ color: "#363636", typography: { sm: "h6", xs: "h5" }, mb: 1, fontWeight: "bold" }}>Security + compliance </Box>

                    <Typography variant="body" color="#363636" component="div">
                        Benefit from the latest blockchain security verification standards with end to end authentication that enables superior data integrity. Build to accommodate varying compliance and regulatory frameworks globally.
                    </Typography>
                  
                    <Box>
                        <Button component="a" target="_blank" href="https://forms.gle/RBoYCnCuf1BpRf9b9"  sx={{ color: "white", bgcolor: "#6d8d6e", mt: 3, px: 3, mr: 3 }}>JOIN US</Button>
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
