import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import expertBg from "@/public/assets/expert-bg.svg";
import Link from "next/link";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export default function OurExpertise() {
  return (
    <Stack bgcolor={"black"} color={"white"} position={"relative"} zIndex={0}>
      <Image
        src={expertBg}
        alt="expert-bg"
        width={750}
        style={{
          position: "absolute",
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <Stack
        width={"100%"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={8}
          m={"200px 0"}
          alignItems={"center"}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            gap={2}
            mb={10}
          >
            <hr
              style={{
                width: "100%",
                borderImage:
                  "linear-gradient(90deg, rgba(153, 153, 153, 0) 0%, #E35C87 100%) 1",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            />
            <Typography
              fontSize={12}
              fontWeight={400}
              textAlign={"center"}
              zIndex={1}
            >
              Services
            </Typography>
            <hr
              style={{
                width: "100%",
                borderImage:
                  "linear-gradient(90deg, #E35C87 0%, rgba(153, 153, 153, 0) 100%) 1",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            />
          </Stack>
          <Typography
            variant="h2"
            fontSize={48}
            fontWeight={700}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            Our
            <Typography
              variant="h2"
              fontSize={48}
              fontWeight={700}
              sx={{
                background: "var(--software-gradient)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Expertise
            </Typography>
          </Typography>
          <Stack width={"100%"} gap={4} alignItems={"center"}>
            <Stack
              direction={"row"}
              gap={4}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              <ExpertCard
                index={"01"}
                title={"App Development"}
                description={
                  "Innovative mobile solutions for your business needs."
                }
                link={"/contact"}
                serviceList={[
                  "Custom iOS and Android apps",
                  "Cross-platform frameworks",
                  "Advanced user interface design",
                  "Advanced user interface design",
                ]}
              />
              <ExpertCard
                index={"02"}
                title={"Web Development"}
                description={
                  "Elevate your online presence with cutting-edge web applications."
                }
                link={"/contact"}
                serviceList={[
                  "Custom web apps using latest fws",
                  "Responsive design",
                  "Secure and scalable backend",
                  "Performance optimization",
                ]}
              />
            </Stack>
            <Stack
              direction={"row"}
              gap={4}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              <ExpertCard
                index={"03"}
                title={"Technology Consultation"}
                description={
                  "Expert guidance to drive your technology strategy forward."
                }
                link={"/contact"}
                serviceList={[
                  "IT infrastructure assessment",
                  "Middlewares and migration",
                  "Cybersecurity solutions",
                  "Digital transformation roadmaps",
                ]}
              />
              <ExpertCard
                index={"04"}
                title={"R&D"}
                description={
                  "Pioneering innovation for future-ready solutions."
                }
                link={"/contact"}
                serviceList={[
                  "AI & ML prototypes",
                  "IOT development",
                  "Blockchain solutions",
                  "AR, VR, MR & XR solutions",
                ]}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ExpertCard = ({ index, title, description, link, serviceList }) => {
  return (
    <Stack
      width={{
        xs: "100%",
        sm: "410px",
      }}
      // height={"250px"}
      gap={2}
      bgcolor={"#1A1C1E"}
      p={2}
      borderRadius={"6px"}
      border={"2px solid #343639"}
      alignItems={"flex-start"}
    >
      <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
        <Typography
          variant="p"
          fontSize={12}
          fontWeight={700}
          sx={{
            background: "var(--software-gradient)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          {index}
        </Typography>
        <Typography variant="h3" fontSize={22} fontWeight={700}>
          {title}
        </Typography>
      </Stack>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent={"space-between"}
        gap={{
          xs: 2,
          sm: 0,
        }}
      >
        <Typography
          variant="p"
          fontSize={16}
          fontWeight={400}
          width={{
            xs: "100%",
            sm: "30%",
          }}
        >
          {description}
        </Typography>
        <Stack gap={1}>
          {serviceList.map((service, index) => (
            <Stack
              key={index}
              direction={"row"}
              width={"100%"}
              alignItems={"center"}
              gap={1}
            >
              <DoneRoundedIcon
                sx={{
                  fill: "var(--primary)",
                }}
              />
              <Typography variant="p" fontSize={16} fontWeight={400}>
                {service}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Link
        href={link}
        style={{
          marginTop: "auto",
          backgroundColor: "#2151C5",
          padding: "10px 30px",
          borderRadius: "50px",
        }}
      >
        <Typography variant="p" fontSize={16} fontWeight={400}>
          Get started
        </Typography>
      </Link>
    </Stack>
  );
};
