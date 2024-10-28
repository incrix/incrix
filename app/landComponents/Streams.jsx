import { Stack, Typography, Grid2 } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import dev from "@/public/icons/dev.svg";
import automation from "@/public/icons/automation.svg";
import branding from "@/public/icons/branding.svg";
import education from "@/public/icons/education.svg";

export default function Streams() {
  return (
    <Stack padding={"100px 0"}>
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
          direction={{
            md: "column",
            lg: "row",
          }}
          justifyContent={"space-between"}
          //   alignItems={"center"}
          gap={5}
          maxWidth={"var(--max-width)"}
          width={"100%"}
        >
          <Stack gap={2}>
            <Typography
              fontSize={18}
              color={"var(--primary)"}
              //   lineHeight={"120%"}
              //   letterSpacing={"0"}
            >
              Streams
            </Typography>
            <Typography
              fontSize={{
                xs: 38,
                md: 48,
              }}
              fontWeight={500}
              lineHeight={"110%"}
            >
              We&apos;re architects of
              <br />
              innovation
            </Typography>
            <Typography
              fontSize={18}
              color={"var(--text-color)"}
              maxWidth={"600px"}
            >
              Incrix, as an organization, typically operates across various
              verticals, each focusing on specific domains or areas of
              expertise. While specific details might vary, here&apos;s a
              generalized breakdown of potential verticals that Incrix might
              encompass
            </Typography>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Link
                href="/streams"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  textDecoration: "none",
                  padding: "10px 30px",
                  borderRadius: "50px",
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                  "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                }}
              >
                Get Quote
              </Link>
              <Link href="/streams">Learn More</Link>
            </Stack>
          </Stack>
          <Stack
            gap={{
              xs: 2,
              md: 5,
            }}
            alignItems={{
              xs: "center",
              md: "center",
              lg: "flex-end",
            }}
          >
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={{
                xs: 2,
                md: 5,
              }}
            >
              <StreamsCard
                title={"Automation"}
                img={automation}
                link={"/streams/automation"}
              />
              <StreamsCard
                title={"Branding"}
                img={branding}
                link={"/streams/branding"}
              />
            </Stack>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={{
                xs: 2,
                md: 5,
              }}
            >
              <StreamsCard
                title={"Development"}
                img={dev}
                link={"/streams/development"}
              />

              <StreamsCard
                title={"Education"}
                img={education}
                link={"/streams/education"}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

function StreamsCard({ title, img, link }) {
  return (
    <Link
      href={link}
      style={{
        display: "inline-block",
        "-webkit-touch-callout": "none",
        "-webkit-user-select": "none",
        "-khtml-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
      }}
    >
      <Stack
        className="streams-card"
        sx={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#F3F3F3",
          borderRadius: "25px",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            bgcolor: "black",
            transform: "scale(1.1) translateY(-10px)",
            transition: "all 0.3s ease",
            "& div": {
              backgroundColor: "var(--primary)",
            },
          },
          "& div": {
            backgroundColor: "#AAAAAA",
          },
        }}
        width={{
          xs: "160px",
          md: "200px",
        }}
        height={{
          xs: "160px",
          md: "200px",
        }}
        gap={2}
        alignItems={"center"}
      >
        <Typography color="var(--text-color)" fontSize={18}>
          {title}
        </Typography>
        <Stack
          sx={{
            width: {
              xs: "80px",
              md: "85px",
            },
            height: "85px",
            mask: `url(${img.src})`,
            "-webkit-mask": `url(${img.src})`,
            maskRepeat: "no-repeat",
            maskSize: {
              xs: "75px",
              md: "100%",
            },
          }}
        ></Stack>
      </Stack>
    </Link>
  );
}
