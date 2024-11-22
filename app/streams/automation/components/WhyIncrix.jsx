import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import incrixAuto from "@/public/assets/incrix-auto.svg";
import cpu from "@/public/icons/cpu.svg";
import autoGrid from "@/public/assets/auto-grid.svg";

export default function WhyIncrix() {
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
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={6}
        >
          <Stack
            gap={2}
            alignItems={{
              xs: "flex-start",
              md: "center",
              lg: "flex-start",
            }}
          >
            <Typography variant={"h3"} fontSize={24} fontWeight={400}>
              Why Choose Us
            </Typography>
            <Typography variant={"h2"} fontSize={48} fontWeight={500}>
              Why{" "}
              <font style={{ color: "var(--primary)" }}>
                Incrix Automation?
              </font>
            </Typography>
            <Typography
              variant={"p"}
              fontSize={20}
              textAlign={{
                xs: "left",
                md: "center",
                lg: "left",
              }}
              mt={5}
              color="#999"
            >
              Every business is unique, and so are our{" "}
              <Stack
                display={{
                  xs: "none",
                  md: "block",
                }}
              ></Stack>{" "}
              solutions. We tailor automation strategies to{" "}
              <Stack
                display={{
                  xs: "none",
                  md: "block",
                }}
              ></Stack>{" "}
              meet your specific needs.
            </Typography>
            <Image
              src={incrixAuto}
              alt="Incrix Automation"
              style={{
                marginTop: "50px",
                width: "100%",
              }}
            />
          </Stack>
          <Stack gap={3} alignItems={"flex-start"}>
            <Card
              title="Tailored Solutions"
              description="Custom automation designed for your needs, ensuring peak performance."
            />
            <Card
              title="Scalable for Growth"
              description="Solutions that evolve with your business, from small to large scale."
            />
            <Card
              title="Expert Team"
              description="Skilled engineers in embedded systems and advanced automation."
            />
            <Card
              title="Proven Experience"
              description="Reliable results in home and industrial automation."
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const Card = ({ title, description }) => {
  return (
    <Stack
      p={2}
      borderRadius={3}
      border={"1px solid #FFEFD1"}
      boxShadow={"0px 4px 4px  rgba(0, 0, 0, 0.10)"}
    >
      <Stack
        direction={"row"}
        gap={2}
        p={2}
        borderBottom={"1px solid var(--primary)"}
        borderRadius={3}
        width={"100%"}
        maxWidth={"500px"}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.10)"}
      >
        <Image src={cpu} alt="CPU" />
        <Stack gap={2}>
          <Typography
            variant={"h4"}
            fontSize={{
              xs: 20,
              sm: 24,
            }}
            fontWeight={500}
          >
            {title}
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 16,
              sm: 20,
            }}
            color="#999"
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
