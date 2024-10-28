"use client";
import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import styles from "./landing.module.css";
import { useState } from "react";

export default function WhyUs() {
  return (
    <Stack>
      <Stack
        width={"100%"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        mb={10}
        alignItems={"center"}
      >
        <Stack
          gap={2}
          width={"100%"}
          maxWidth={"var(--max-width)"}
          color={"black"}
          m={"150px 0"}
        >
          <Typography variant="h3" fontSize={80} fontWeight={500} color="black">
            Why Us
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} mt={5}>
            <CustomAccordion
              title={"1 - Unmatched Expertise"}
              content={
                "Incrix brings a wealth of knowledge across multiple domains, from automation and software to branding and beyond. Our team’s depth of experience ensures we deliver the highest level of quality and precision, no matter the project."
              }
            />
            <CustomAccordion
              title={"2 - Innovation at Core"}
              content={
                "At the heart of everything we do is innovation. We constantly push boundaries and explore new technologies like Industry 4.0 and Web 3.0 to bring cutting-edge solutions that keep you ahead of the curve."
              }
            />
            <CustomAccordion
              title={"3 - Tailored Solutions"}
              content={
                "We understand that every business is unique. That’s why we don’t believe in one-size-fits-all. We take the time to understand your specific needs and build customized solutions that truly fit your vision and goals."
              }
            />
            <CustomAccordion
              title={"4 - Collaborative Partnership"}
              content={
                "Working with us means more than just a client-vendor relationship. We believe in collaboration and teamwork, ensuring that your input is valued every step of the way to achieve success together."
              }
            />
            <CustomAccordion
              title={"5 - Trust and Reliability"}
              content={
                "With a proven track record and a strong commitment to our clients, we deliver on our promises. You can trust us to be dependable, transparent, and consistently focused on your long-term success."
              }
            />
            <CustomAccordion
              title={"6 - Future-Ready Approach"}
              content={
                "We don't just solve today’s problems; we prepare you for tomorrow’s opportunities. Our forward-thinking approach ensures that the solutions we provide are scalable, adaptable, and ready for the future."
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

function CustomAccordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      elevation={0}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        border: "1px solid #000",
        borderRadius: "0 !important",
        width: {
          xs: "100%",
          sm: "100%",
          md: "50%",
          lg: "50%",
          xl: "50%",
        },
        padding: "20px",
        margin: "0",
        "&.Mui-expanded": {
          margin: "0",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <button className={`${styles.button} ${expanded && styles.active}`}>
            <span></span>
            <span></span>
          </button>
        }
        sx={{
          boxShadow: "none",
          textTransform: "uppercase",
          fontSize: {
            xs: "18px",
            sm: "18px",
            md: "18px",
            lg: "24px",
            xl: "28px",
          },
          fontWeight: "500",
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          fontSize: {
            xs: "16px",
            sm: "16px",
            md: "16px",
            lg: "20px",
            xl: "20px",
          },
        }}
      >
        {content}
      </AccordionDetails>
    </Accordion>
  );
}
