import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, Button,Link } from "@mui/material";
import Countdown from "react-countdown";
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#6d8d6e" : "#308fe8",
    },
}));

const Timer = (props) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // if (props.time > 0) window.location.reload();
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <div className="timeElement bigger">000</div>
                        <div>days</div>
                    </div>
                    <div>
                        <div className="timeElement">00</div>
                        <div>hours</div>
                    </div>
                    <div>
                        <div className="timeElement">00</div>
                        <div>minutes</div>
                    </div>
                    <div>
                        <div className="timeElement">00</div>
                        <div>seconds</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <div className="timeElement bigger">{("00" + days).slice(-3)}</div>
                        <div>days</div>
                    </div>
                    <div>
                        <div className="timeElement">{("0" + hours).slice(-2)}</div>
                        <div>hours</div>
                    </div>
                    <div>
                        <div className="timeElement">{("0" + minutes).slice(-2)}</div>
                        <div>minutes</div>
                    </div>
                    <div>
                        <div className="timeElement">{("0" + seconds).slice(-2)}</div>
                        <div>seconds</div>
                    </div>
                </div>
            );
        }
    };
    if (props.time === 0)
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <div className="timeElement bigger">000</div>
                    <div>days</div>
                </div>
                <div>
                    <div className="timeElement">00</div>
                    <div>hours</div>
                </div>
                <div>
                    <div className="timeElement">00</div>
                    <div>minutes</div>
                </div>
                <div>
                    <div className="timeElement">00</div>
                    <div>seconds</div>
                </div>
            </div>
        );

    return (
        <>
            <Countdown date={1669849200000} renderer={renderer} />
        </>
    );
};
const Square = ({ language }) => {
    return (
        <Link href="/vue-js.pdf" target="_blank" underline="none" download>
            <Box
                sx={{
                    border: "solid 3px #b0946e",
                    color: "#6d8d6e",
                    mx: { sm: 2, xs: 1 },
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                    <DownloadOutlined fontSize="large" />
                    {language}

            </Box>
        </Link>
    );
};
const FeaturesSection = () => {
    return (
        <Box sx={{ py: 7, border: "none", bgcolor: "white" }} id="featuressection">
            <Grid container spacing={4} sx={{ width: "100%", mx: 0 }}>
                <Grid item xs={12} md={6} sx={{ px: 3 }}>
                    <Card sx={{ minWidth: 275, maxWidth: 600, mx: "auto", bgcolor: "#b29874", color: "#363636", py: 3 }}>
                        <CardContent sx={{ textAlign: "center" }}>
                            <Box sx={{ fontWeight: "bold", mb: 3, typography: { sm: "h4", xs: "h5" } }} component="div">
                                TOKEN SALE ENDS IN
                            </Box>

                            <Timer />

                            <Box sx={{ width: "80%", mx: "auto", mt: "30px" }}>
                                <BorderLinearProgress variant="determinate" value={1669849200000 - Date.now()>0?(Date.now() - 1658282327218)/(1669849200000 - 1658282327218)*100:100} />
                            </Box>
                            <Box>
                                <Button component="a" target="_blank" href="/buytoken"  sx={{ color: "white", bgcolor: "#6d8d6e", mt: 3, px: 3 }}>Buy More AKE</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ px: 4 }}>
                    <Box sx={{ color: "#363636", typography: { sm: "h4", xs: "h5" }, mb: 2, fontWeight: "bold !important" }}>
                        Download token whitepaper{" "}
                    </Box>

                    <Typography variant="body" color="#363636" component="div">
                        Considering the growing interest of public towards the crypto currencies and their rising popularity, this template has got
                        all the chances to become a successful internet enterprise for mining hardware manufacturer or new cryptocurrency project.
                        Especially if you’re already looking for a solution for a website that would accept charges of different currencies.
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        {/* <Button sx={{ color: "white", bgcolor: "#6d8d6e", mt: 3, px: 3 }}>Buy More AKE</Button> */}
                        <Square language="English" />
                        <Square language="French" />
                        <Square language="Swahili" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
