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
            <Countdown date={1671848580000} renderer={renderer} />
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
                                WHITEPAPER OUT IN
                            </Box>

                            <Timer />

                            <Box sx={{ width: "80%", mx: "auto", mt: "30px" }}>
                                <BorderLinearProgress variant="determinate" value={1671848580000 - Date.now()>0?(Date.now() - 1658282327218)/(1671848580000 - 1658282327218)*100:100} />
                            </Box>
                            <Box>
                              {/*   <Button component="a" target="_blank" href="/buytoken"  sx={{ color: "white", bgcolor: "#6d8d6e", mt: 3, px: 3 }}>Buy More AKE</Button> */}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ px: 4 }}>
                    <Box sx={{ color: "#363636", typography: { sm: "h4", xs: "h5" }, mb: 2, fontWeight: "bold !important" }}>
                        Download whitepaper (Dec 23rd){" "}
                    </Box>

                    <Typography variant="body" color="#363636" component="div">
                    Africa, the home of humanity, once prosperous with abundance of human and natural resources, caved in to the change of time and have resolved to a dreadful marginalization in the economy of the world. Poverty, disease, illiteracy, insecurity and injustices are among the list of woes that the continent and its people, both home and in the diaspora are faced with today. This white paper table some of the major root causes; such as Poor Governance, spiraling Corruptions, tribal and clique bias among others that contribute to the regression of continent’s economy and propose a Smart Pan-African Economy solution built on the current advances of Web3 and blockchain technologies that could positively shift the global Pan-African Community future by introducing transparency in governance and economic systems, eliminating corruption and social biases.
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
