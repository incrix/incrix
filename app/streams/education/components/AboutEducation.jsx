import { Stack, Typography } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Link from "next/link";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import PolylineIcon from "@mui/icons-material/Polyline";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export default function AboutEducation() {
  return (
    <Stack color={"#6E6E6E"}>
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
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          mb={20}
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Stack gap={2}>
            <Typography
              variant={"h2"}
              fontSize={38}
              color="#6E6E6E"
              fontWeight={500}
            >
              About{" "}
              <font style={{ color: "var(--education)", fontWeight: 600 }}>
                Incrix Education
              </font>
            </Typography>
            <Typography variant={"p"} fontSize={20} maxWidth={600}>
              Develop a forward-thinking startup ecosystem founded on science
              and technology, fostering sustainable growth. Empower innovators,
              cultivate tech startups, and strategically guide their success in
              the digital market.
            </Typography>
            <Stack gap={1} borderLeft={"6px solid var(--education)"} pl={2}>
              <Typography variant={"h2"} fontSize={20} fontWeight={500}>
                Who we are,
              </Typography>
              <Typography variant={"p"} fontSize={20} width={600}>
                Incrix is a team of like-minded enthusiasts driven by equity,
                dignity, and delivering quality solutions in a fair and
                effective manner.
              </Typography>
              <Typography
                variant={"p"}
                fontSize={20}
                fontWeight={600}
                color="var(--education)"
                display={"flex"}
                gap={1}
              >
                Visit{" "}
                <Link
                  href="/"
                  style={{
                    color: "#6E6E6E",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  incrix
                  <EastRoundedIcon
                    sx={{
                      color: "var(--education)",
                    }}
                  />
                </Link>
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
              <AboutCard
                icon={
                  <PaymentsIcon
                    sx={{ fontSize: 50, fill: "var(--education)" }}
                  />
                }
                title={"Affordable Price"}
                description={
                  "Unlock your potential with affordable courses tailored to fit any budget"
                }
              />
              <AboutCard
                icon={
                  <PolylineIcon
                    sx={{ fontSize: 50, fill: "var(--education)" }}
                  />
                }
                title={"Cutting-Edge Technologies"}
                description={
                  "Stay ahead with our cutting-edge courses and latest skills"
                }
              />
            </Stack>
            <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
              <AboutCard
                icon={
                  <BusinessIcon
                    sx={{ fontSize: 50, fill: "var(--education)" }}
                  />
                }
                title={"Startup Mastery"}
                description={
                  "Empower your entrepreneurial journey with courses that equip you to launch successful startups."
                }
              />
              <AboutCard
                icon={
                  <MilitaryTechIcon
                    sx={{ fontSize: 50, fill: "var(--education)" }}
                  />
                }
                title={"Credibility"}
                description={
                  "Our startup is recognized by Startup India and DPIIT, ensuring industry-wide acceptance"
                }
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const AboutCard = ({ icon, title, description }) => {
  return (
    <Stack
      gap={1}
      width={"200px"}
      height={"200px"}
      bgcolor={"#F6F9FF"}
      p={2}
      borderRadius={5}
      color={"#6E6E6E"}
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          transition: "all 0.5s",
          color: "white",
          bgcolor: "var(--education)",
          "& svg": {
            fill: "white",
          },
        },
      }}
    >
      {icon}
      <Typography variant={"h4"} fontSize={16} fontWeight={600}>
        {title}
      </Typography>
      <Typography variant={"p"} fontSize={14}>
        {description}
      </Typography>
    </Stack>
  );
};
