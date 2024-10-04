import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";

export default function BuyToken() {
    return (
        <Box sx={{height:"100vh",display:"flex"}}>
            <Card
                sx={{
                    minWidth: 300,
                    maxWidth: 400,
                    mx: "auto",
                    my :"auto",
                    bgcolor: "#b29874",
                    color: "white",
                    p: 2,
                }}
            >
                <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" alt="photo" width={40} height={40} sx={{ borderRadius: "50%" }} src="logo.png" />
                        <Box sx={{ fontWeight: "bold", color: "white", ml: 2, typography: { sm: "h4", xs: "h4" } }} component="div">
                        ALKEBULEUM
                        </Box>
                    </Box>
                    <TextField id="outlined-basic"  variant="outlined" fullWidth sx={{my:3, bgcolor:"white",borderRadius:"5px","& fieldset":{border:"none"}}}/>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ color: "white", bgcolor: "#6d8d6e", mx: 1, px: 3 }}>Connect Wallet</Button>
                        <Button sx={{ color: "white", bgcolor: "#6d8d6e", mx: 1, px: 3 }}>Buy</Button>
                    </Box>
                </CardContent>
            </Card>        
            
        </Box>
    );
}
