import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

function Accordionation() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        sx={{
          background: "#20aac9",
        }}
        expanded={
          // @ts-ignore
          expanded === "panel1"
        }
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Withdrawals
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            What is the minimum withdraw amount?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              gap: 2,
              display: "flex",
            }}
          >
            <span
              style={{
                color: "crimson",
              }}
            >
              There is no Minimum withdraw ammount.
            </span>
            <span>Users can earn coins by completing different tasks.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          background: "#20aac9",
        }}
        expanded={
          // @ts-ignore
          expanded === "panel2"
        }
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Profits</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            How much i can earn in a day?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              gap: 2,
              display: "flex",
            }}
          >
            <span
              style={{
                color: "crimson",
              }}
            >
              There is no limit of earning.
            </span>
            <span>You can earn unlimited.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          background: "#20aac9",
        }}
        expanded={
          // @ts-ignore
          expanded === "panel3"
        }
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Multi Accounts
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Can i create multiple accounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              gap: 2,
              display: "flex",
            }}
          >
            <span
              style={{
                color: "crimson",
              }}
            >
              You can not create multiple account on this site.
            </span>
            <span>We accept 1 user account.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          background: "#20aac9",
        }}
        expanded={
          // @ts-ignore
          expanded === "panel4"
        }
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            VPN / PROXY
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Can i use VPN or PROXY?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              gap: 2,
              display: "flex",
            }}
          >
            <span>VPN or any other PROXY</span>
            <span
              style={{
                color: "crimson",
              }}
            >
              are not allowed.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          background: "#20aac9",
        }}
        expanded={
          // @ts-ignore
          expanded === "panel5"
        }
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Supported
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Which currency we support to pay?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              gap: 2,
              display: "flex",
            }}
          >
            <span>Supported currencies are</span>
            <span
              style={{
                color: "crimson",
              }}
            >
              BTC, LTC, TRX, USDT, SHIBA
            </span>

            <span>and Many More.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Accordionation;
