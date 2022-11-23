import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box } from "@mui/material";
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(
    ({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1),
        },
    })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const FaqSection = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: 8, mx: "auto", width: "80%" }} id="faqsection">
            <Box sx={{ fontWeight: "bold", color: "#363636", mb: 5, typography: { sm: "h4", xs: "h5" }, textAlign: "center" }} component="div">
                Frequently Asked Questions
            </Box>

            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How can we buy the Alkecoin ($AKE) </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The Alkecoin ($AKE) will be available for sale during the first Initial Coin Offering (ICO). The specific date for the ICO is yet to be determine but will done sometime in 2023 on this website. We recommend you join our wait list to be the first to be notified when the coin is available for purchase. Click this link <a href="https://pluralsight.com"><u>Join Waiting List</u></a>  to join the waiting list
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>How can we be part of this</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To be a member of the decentralized autonomous organization that is supporting and developing the Alkebuleum blockchain and its ecosystem, click on this link <a href="https://forms.gle/RBoYCnCuf1BpRf9b9"><u>Request Membership</u></a> and fill up the membership proposal. The DAO will review your proposal and will vote to accept your membership.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Is this secure and regulated</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The Alkebuleum blockchain was put into motion by the Alkebuleum Foundation which is a United State regulated Non-Profit organization. The organization has set a premise of full compliance with local and international laws. This gives the blockchain a reputation of trust for the community. As related to Security, please read the Whitepaper which discribe some the strategic security measure the blockchain will have in place to protect its community and its assets.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FaqSection;
