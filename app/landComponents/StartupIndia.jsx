import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import startup from "@/public/assets/startup.png";
import flag from "@/public/assets/flag.png";
import startBg from "@/public/assets/start-bg.png";
import logo from "@/public/assets/logo-light.svg";
import Link from "next/link";

export default function StartupIndia() {
  return (
    <Stack>
      <Stack
        width={"100%"}
        position={"relative"}
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
          direction={{
            xs: "column",
            md: "row",
          }}
          alignItems={"center"}
          gap={2}
        >
          <Image
            src={logo}
            alt={"logo"}
            style={{
              width: "160px",
              height: "auto",
            }}
          />
          <Typography>IS NOW OFFICIALLY RECOGNIZED BY</Typography>
        </Stack>
        <Stack position={"relative"} width={"100%"}>
          <Image
            src={startBg}
            alt={"startup"}
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
          <Image
            src={flag}
            alt={"flag"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              objectFit: "contain",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src={startup}
            alt={"startup"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Stack>
        <Stack alignItems={"center"} gap={4} width={"100%"}>
          <Typography fontSize={"18px"} textAlign={"center"}>
            We are Glad & proud to announce that our startup Incrix Techlutions
            LLP <br /> officially been recognized by StartupIndia & DPIIT,
            India!
          </Typography>
          <Link
            href="https://www.startupindia.gov.in/content/sih/en/block-chain-recognised-certificate.html?DIPP=DIPP116789"
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
              padding: "20px 40px",
              borderRadius: "50px",
              fontWeight: "500",
            }}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Certificate
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
