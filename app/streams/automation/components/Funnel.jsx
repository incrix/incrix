import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import HistoryIcon from "@mui/icons-material/History";
import Image from "next/image";
import matrix from "@/public/assets/matrix.svg";

export default function Funnel() {
  return (
    <Stack position={"relative"}>
      <Image
        src={matrix}
        alt={"innovate"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
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
        justifyContent={"center"}
      >
        <Stack
          maxWidth={"1200px"}
          width={"100%"}
          mb={20}
          mt={20}
          gap={6}
          alignItems={"center"}
          position={"relative"}
        >
          <Typography
            variant={"h3"}
            fontSize={{
              xs: 36,
              md: 48,
            }}
            fontWeight={500}
            textAlign={"center"}
          >
            Automate{" "}
            <svg
              width="31"
              height="27"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4974 0L0.914062 14.004H5.28906V26.4521H25.7057V14.004H30.0807L15.4974 0ZM15.4974 8.55803C18.9099 8.55803 22.0016 10.0051 24.2474 12.3547L22.4974 14.1908C20.6307 12.2334 18.1146 11.1427 15.4974 11.1566C12.7557 11.1566 10.2766 12.308 8.4974 14.1908L6.7474 12.3547C9.08365 9.91229 12.2266 8.54854 15.4974 8.55803ZM15.4974 13.7395C17.5391 13.7395 19.3911 14.6109 20.7474 16.0268L18.9974 17.8474C18.0629 16.8715 16.8049 16.3291 15.4974 16.338C14.1266 16.338 12.887 16.9138 11.9974 17.8474L10.2474 16.0268C11.6483 14.5589 13.5339 13.7373 15.4974 13.7395ZM15.4974 18.9366C16.8682 18.9366 17.9766 20.088 17.9766 21.5195C17.9766 22.9511 16.8682 24.1181 15.4974 24.1181C14.1266 24.1181 13.0182 22.9511 13.0182 21.5195C13.0182 20.088 14.1266 18.9366 15.4974 18.9366Z"
                fill="black"
                fill-opacity="0.7"
              />
            </svg>{" "}
            in Days.
            <Stack
              display={{
                xs: "none",
                sm: "block",
              }}
            />{" "}
            Optimize in Minutes{" "}
            <HistoryIcon
              sx={{ fill: "black", fillOpacity: "0.7", fontSize: "30px" }}
            />
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 20,
              md: 24,
            }}
            fontWeight={400}
            textAlign={"center"}
            color="#999"
          >
            From Smart Homes to Smart Factories: Lighting{" "}
            <Stack
              display={{
                xs: "none",
                sm: "block",
              }}
            />{" "}
            the Way with Intelligent Automation
          </Typography>
          <Link href="/contact">
            <Button
              variant={"contained"}
              disableElevation
              sx={{
                bgcolor: "var(--primary)",
                color: "white",
                borderRadius: "5px",
                p: "10px 30px",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </Link>
          <Stack
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            zIndex={-1}
            sx={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              width="988"
              height="924"
              viewBox="0 0 988 924"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="988"
                height="924"
                fill="url(#paint0_radial_1623_5165)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1623_5165"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(494 462) rotate(90) scale(462 494)"
                >
                  <stop stop-color="#FF7F50" stop-opacity="0.31" />
                  <stop offset="1" stop-color="#FEA800" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
