import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import consultation from "@/public/icons/automation/consultation.svg";
import design from "@/public/icons/automation/design.svg";
import implementation from "@/public/icons/automation/implementation.svg";
import prototyping from "@/public/icons/automation/prototyping.svg";

export default function HowWeWork() {
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
          <Typography
            variant={"h3"}
            fontSize={24}
            fontWeight={400}
            color="#999"
            textTransform={"uppercase"}
          >
            How We Work
          </Typography>
          <Typography
            variant={"h2"}
            fontSize={{
              xs: 36,
              md: 48,
            }}
            fontWeight={500}
            textAlign={"center"}
          >
            Delivering Perfection Through{" "}
            <font
              style={{
                color: "var(--primary)",
              }}
            >
              Every Phase
            </font>
          </Typography>
          <Stack
            width={"600px"}
            height={"600px"}
            mt={5}
            display={{
              xs: "none",
              sm: "flex",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#FFF8F5"}
            sx={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='600' ry='600' stroke='%23EE4B2B' stroke-width='4'  stroke-dasharray='40%2c 40%2c 40%2c 15'  stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
              borderRadius: "300px",
            }}
            position={"relative"}
          >
            <Stack position={"absolute"} width={"100%"} height={"100%"}>
              <hr
                style={{
                  width: "90%",
                  height: "2px",
                  backgroundColor: "#FFD0C0",
                  border: "none",
                  position: "absolute",
                  top: "50%",
                  transform: "translateX(5%)",
                }}
              />
              <hr
                style={{
                  height: "90%",
                  width: "2px",
                  backgroundColor: "#FFD0C0",
                  border: "none",
                  position: "absolute",
                  left: "50%",
                  transform: "translateY(5%)",
                }}
              />
            </Stack>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <Card
                title="Consult"
                number="01"
                description="We define the best automation strategy"
                align="flex-end"
                justify={"flex-start"}
                icon={consultation}
              />
              <Card
                title="Build"
                number="02"
                description="We craft tailored solutions for you"
                align="flex-start"
                icon={design}
              />

              <Card
                title="Test"
                number="03"
                description="We test prototypes to ensure perfection"
                align="flex-end"
                icon={implementation}
              />
              <Card
                title="Deploy"
                number="04"
                description="We implement the solution for seamless operation"
                align="flex-start"
                icon={prototyping}
              />
            </Stack>
          </Stack>
          <Stack
            display={{
              xs: "block",
              sm: "none",
            }}
          >
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Card
                title="Consult"
                number="01"
                description="We define the best automation strategy"
                align="flex-end"
                icon={consultation}
              />
              <Card
                title="Build"
                number="02"
                description="We craft tailored solutions for you"
                align="flex-start"
                icon={design}
              />
              <Card
                title="Test"
                number="03"
                description="We test prototypes to ensure perfection"
                align="flex-end"
                icon={implementation}
              />
              <Card
                title="Deploy"
                number="04"
                description="We implement the solution for seamless operation"
                align="flex-start"
                icon={prototyping}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const Card = ({ title, number, description, align, icon }) => {
  return (
    <Stack alignItems={align} width={"200px"} height={"150px"}>
      <Typography variant={"h3"} fontSize={30} fontWeight={500}>
        {title}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        {align === "flex-start" && <Image src={icon} alt={title} />}
        <Typography
          variant={"p"}
          fontSize={64}
          color="#FCDBD5"
          fontWeight={500}
        >
          {number}
        </Typography>
        {align === "flex-end" && <Image src={icon} alt={title} />}
      </Stack>
      <Typography variant={"p"} fontSize={16} color="#999">
        {description}
      </Typography>
    </Stack>
  );
};
