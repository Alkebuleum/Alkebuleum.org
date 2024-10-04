import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box } from "@mui/material";

// Styling for Accordion component
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "8px",
    marginBottom: theme.spacing(2),
    "&:before": {
        display: "none",
    },
}));

// Styling for AccordionSummary component
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#b79472" }} />}  // Icon color matches the app bar
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "#f9d0ba",  // Light beige color from the app bar gradient
    flexDirection: "row-reverse",
    borderRadius: "8px",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
        fontWeight: "bold",
        color: "#A97855",  // Text color aligned with app bar branding
    },
    "&:hover": {
        backgroundColor: "#D0E9EF",  // Hover effect with a soft transition to the light blue from the app bar
    }
}));


// Styling for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: "#ffffff",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: "8px",
}));

const FaqSection = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: 8, bgcolor: "white", mx: "auto", width: "80%" }} id="faqsection">  {/* Gray background */}
            <Box
                sx={{
                    fontWeight: "bold",
                    color: "#363636",
                    mb: 5,
                    typography: { sm: "h4", xs: "h5" },
                    textAlign: "center",
                }}
                component="div"
            >
                Frequently Asked Questions
            </Box>

            {/* FAQ Items */}
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>What is Alkebuleum Blockchain?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Alkebuleum is a cutting-edge blockchain built to address real-world challenges, such as institutional corruption,
                        resource mismanagement, and economic empowerment, particularly in Africa and its diaspora.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>How does Alkebuleum ensure security?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Alkebuleum implements the latest blockchain security protocols, including end-to-end encryption, ensuring data
                        integrity and compliance with global security standards.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>What makes Alkebuleum different?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Unlike traditional blockchains that prioritize computational power, Alkebuleum’s innovative model focuses on
                        societal impact, offering low or zero transaction fees for meaningful, problem-solving transactions.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FaqSection;
