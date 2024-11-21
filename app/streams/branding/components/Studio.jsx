import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import pin from "@/public/icons/pin.svg";
import video from "@/public/icons/video.svg";
import radio from "@/public/icons/radio.svg";

export default function Studio() {
  return (
    <Stack bgcolor={"#000"} color={"white"}>
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
        mt={5}
        mb={5}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          alignItems={"center"}
          mb={5}
        >
          <Typography
            variant="h2"
            fontSize={16}
            fontWeight={400}
            textTransform={"uppercase"}
            sx={{
              background:
                "-webkit-linear-gradient(180deg, #580FE4 0%, #EE4B2B 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Creative studio in town
          </Typography>
          <Typography
            variant="h4"
            fontSize={{
              xs: 32,
              sm: 32,
              md: 40,
              lg: 60,
              xl: 60,
            }}
            textAlign={"center"}
            fontWeight={400}
          >
            We Bring Stories to Life
          </Typography>
          <Stack
            gap={4}
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <StudioCard
              title={"Idea"}
              description={
                "We start by crafting compelling concepts and scripts, turning creative visions into actionable plans."
              }
              icon={pin}
            />
            <StudioCard
              title={"Production"}
              description={
                "We bring your story to life through video production, animation, and sound design."
              }
              icon={video}
            />
            <StudioCard
              title={"Post Production"}
              description={
                "We add the finishing touches to your project, including editing, color correction, and sound mixing."
              }
              icon={radio}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const StudioCard = ({ title, description, icon }) => {
  return (
    <Stack
      gap={2}
      width={{
        xs: "100%",
        sm: "380px",
      }}
      height={{
        xs: "auto",
        sm: "280px",
      }}
      borderRadius={"15px"}
      bgcolor={"white"}
      color={"black"}
      padding={" 40px 40px 20px 40px"}
    >
      <Image src={icon} alt={title} />
      <Typography fontSize={24} fontWeight={500}>
        {title}
      </Typography>
      <Typography fontSize={16}>{description}</Typography>
    </Stack>
  );
};
