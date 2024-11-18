import { Stack, Typography } from "@mui/material";
import autoGrid from "@/public/assets/auto-grid.svg";
import Image from "next/image";
import micro from "@/public/icons/micro.svg";
import pcb from "@/public/icons/pcb.svg";
import solution from "@/public/icons/solution.svg";
import homeAuto from "@/public/icons/home-auto.svg";

export default function Service() {
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
          maxWidth={"var(--max-width)"}
          width={"100%"}
          mb={20}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Typography variant={"h3"} fontSize={24} fontWeight={400}>
            What We Can Do
          </Typography>
          <Typography variant={"h2"} fontSize={48} fontWeight={500}>
            <font
              style={{
                color: "var(--primary)",
              }}
            >
              Services
            </font>{" "}
            We Can Help You With
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={5}
            justifyContent={"center"}
            position={"relative"}
            mt={5}
          >
            <Image
              src={autoGrid}
              alt="Automation Background"
              objectFit="cover"
              quality={0}
              style={{
                zIndex: -1,
                width: "300px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <ServiceCard
              icon={micro}
              title={"Custom Microcontrollers"}
              desc={
                "Designed to meet specific project requirements, our microcontrollers offer precision and performance across applications."
              }
            />
            <ServiceCard
              icon={pcb}
              title={"Custom PCB Design & Fabrication"}
              desc={
                "High-quality PCB design and fabrication services for robust and reliable hardware solutions"
              }
            />
            <ServiceCard
              icon={solution}
              title={"Product Automation Solutions"}
              desc={
                "We create user-centric automation systems for consumer and industrial products, simplifying processes and enhancing functionality"
              }
            />
            <ServiceCard
              icon={homeAuto}
              title={"Home Automation Systems"}
              desc={
                "Smart home solutions that integrate seamlessly into everyday life, enhancing security, convenience, and energy efficiency"
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <Stack
      width={"40%"}
      height={"350px"}
      justifyContent={"center"}
      gap={2}
      bgcolor={"#FFF9F6"}
      p={4}
      sx={{
        borderRadius: "30px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Image src={icon} alt={title} width={100} height={100} />
        <Stack gap={2}>
          <Typography variant={"h4"} fontSize={24}>
            {title}
          </Typography>
          <Typography
            variant={"p"}
            maxWidth={400}
            fontSize={16}
            color="#999999"
            mr={10}
          >
            {desc}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
