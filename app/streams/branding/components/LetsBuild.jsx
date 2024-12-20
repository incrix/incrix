"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import styles from "../../../landComponents/landing.module.css";

export default function LetsBuild() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <Stack position={"relative"} ref={ref}>
      <Stack className={styles.marquee} bgcolor={"#E6E6E6"}>
        <Stack
          direction={"row"}
          gap={4}
          bgcolor={"#E6E6E6"}
          alignItems={"center"}
          // width={"calc(100% + 100px)"}
          p={2}
          pt={3}
          whiteSpace={"nowrap"}
          position={"absolute"}
          // top={"0"}
          // left={"-100px"}
          // overflow={"hidden"}
          // transform={"translateY(-100%)"}
          className={styles.trackReverse}
        >
          {[...Array(50)].map(function (object, i) {
            return (
              <Typography
                className={styles.loopText}
                key={i}
                color="#707070"
                fontSize={{
                  xs: 16,
                  sm: 16,
                  md: 16,
                  lg: 24,
                  xl: 24,
                }}
                whiteSpace={"nowrap"}
                borderRight={"2px solid #707070"}
                padding={"0 40px"}
              >
                Let&apos;s Build Together
              </Typography>
            );
          })}
        </Stack>
      </Stack>
      <Link
        href="/contact"
        style={{
          position: "absolute",
          top: mouse.y ? mouse.y : "50%",
          left: mouse.x ? mouse.x : "50%",
          transform: "translate(-50%, -50%)",
          transition: "top 0.1s, left 0.1s",
        }}
      >
        <Stack
          width={{
            xs: "80px",
            sm: "100px",
            md: "120px",
            lg: "120px",
            xl: "120px",
          }}
          height={{
            xs: "80px",
            sm: "100px",
            md: "120px",
            lg: "120px",
            xl: "120px",
          }}
          sx={{
            background: "var(--branding-gradient)",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"50%"}
        >
          <Typography textAlign={"center"} fontSize={16} color="white">
            Let&apos;s
            <br />
            Talk
          </Typography>
        </Stack>
      </Link>
      <Stack
        width={"100%"}
        height={"100%"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
        mt={20}
        mb={10}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h2"
            width={"100%"}
            fontSize={{
              xs: 40,
              sm: 60,
              md: 60,
              lg: 110,
              xl: 110,
            }}
            textAlign={"center"}
          >
            Let&apos;s Build
            <br />
            YourBusiness
            <br />
            Together
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
