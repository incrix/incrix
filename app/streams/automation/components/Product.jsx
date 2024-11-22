import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import smartHome from "@/public/assets/smart-home.jpg";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";

export default function Product() {
  return (
    <Stack>
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
          gap={10}
          alignItems={"center"}
        >
          <Stack
            gap={2}
            direction={{
              xs: "column",
              lg: "row",
            }}
            // flexWrap={"wrap"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack gap={2} maxWidth={600}>
              <Typography variant={"h3"} fontSize={16} fontWeight={300}>
                Product
              </Typography>
              <Typography variant={"h2"} fontSize={48} fontWeight={500}>
                Our <font style={{ color: "var(--primary)" }}>Smart Home</font>{" "}
                Solutions
              </Typography>
              <Typography variant={"p"} fontSize={20} mt={5} color="#999">
                Dive into a world of exceptional entertainment, fortified
                security, effortless control, and intelligent monitoring—all at
                your fingertips. Embrace seamless connectivity and discover the
                peace of mind that comes with a truly smart home. Elevate your
                lifestyle today!
              </Typography>
            </Stack>
            <Stack>
              <Image
                src={smartHome}
                alt="Smart Home"
                style={{
                  borderRadius: "8px",
                }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} flexWrap={"wrap"} gap={5}>
            <Card
              icon={
                <IntegrationInstructionsIcon sx={{ fill: "var(--primary)" }} />
              }
              title="Seamless Integration"
              description="We create harmony between all your smart devices for a hassle-free experience"
            />
            <Card
              icon={<PeopleIcon sx={{ fill: "var(--primary)" }} />}
              title="User Friendly"
              description="Our interfaces are intuitive, making control effortless."
            />
            <Card
              icon={<UpdateIcon sx={{ fill: "var(--primary)" }} />}
              title="Future Innovation"
              description="Our Smart Home solutions, always advancing to meet tomorrow’s needs. "
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const Card = ({ icon, title, description }) => {
  return (
    <Stack
      gap={2}
      direction={"row"}
      p={4}
      border={"2px solid #FFD0C0"}
      borderRadius={8}
      alignItems={"flex-start"}
      width={"350px"}
      height={"150px"}
    >
      <Stack>{icon}</Stack>
      <Stack>
        <Typography variant={"h4"} fontSize={24} fontWeight={500}>
          {title}
        </Typography>
        <Typography variant={"p"} fontSize={16} color="#999">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
