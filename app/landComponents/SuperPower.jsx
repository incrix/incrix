"use client";
import { Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function SuperPower() {
  const element = useRef(null);
  const wordElement = useRef(null);
  const wordValue = "we hold the ultimate superpower";
  const words = wordValue.split(" ");
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const { scrollYProgress: wordProgress } = useScroll({
    target: wordElement,
    offset: ["start 0.9", "start 0.40"],
  });
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
          gap={4}
          width={"100%"}
          maxWidth={"var(--max-width)"}
          color={"black"}
          m={"150px 0"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
            fontSize={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 54,
              xl: 60,
            }}
            fontWeight={500}
            ref={wordElement}
            gap={{
              xs: 1,
              sm: 1,
              md: 3,
              lg: 3,
              xl: 3,
            }}
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={index} progress={wordProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: 20,
              color: "var(--text-color)",
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "60%",
                xl: "60%",
              },
            }}
          >
            <motion.p ref={element} style={{ opacity: scrollYProgress }}>
              our diverse verticals in Automation, Software, Branding,
              Education, and Studio allow us to bring any idea to life. We are
              our own clients, with the tools and expertise to create, innovate,
              and lead the way into the future. When it comes to building the
              impossible, Incrix is the only name you need.
            </motion.p>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span
      style={{
        position: "relative",
      }}
    >
      {/* <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          opacity: 0.1,
          marginRight: "20px",
        }}
      >
        {children}
      </span> */}
      <motion.span
        style={{
          opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
