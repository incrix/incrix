"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CusTimeline from "@/components/Timeline/CusTimeline";
import dev from "@/public/icons/develop.svg";
import iot from "@/public/icons/iot.svg";
import mr from "@/public/icons/mr.svg";
import design from "@/public/icons/design-illlu.svg";
import web3 from "@/public/icons/web3.svg";
import rocketIllu from "@/public/icons/rocket-illu.svg";

export default function TechCourse() {
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
          gap={2}
          mb={20}
          alignItems={"center"}
        >
          <Typography
            fontSize={{
              xs: 28,
              sm: 38,
            }}
            fontWeight={500}
            textAlign={"center"}
            color="#6E6E6F"
          >
            Master your skills with
            <Stack
              display={{
                xs: "none",
                md: "block",
              }}
            ></Stack>{" "}
            Incrix Education -
            <font
              style={{
                color: "var(--education)",
              }}
            >
              Tech Courses
            </font>
          </Typography>
          <Stack mt={8}>
            <CusTimeline
              isAlternative
              alternativeBreakpoint={720}
              endIcon={
                <Button
                  variant="contained"
                  sx={{ whiteSpace: "nowrap", bgcolor: "var(--education)" }}
                  onClick={() => window.open(`/pdf/incrix-broucher.pdf`)}
                >
                  Download brochure
                </Button>
              }
            >
              <TimelineCard
                title="Web & Application Development"
                description="Transform your ideas into dynamic applications with high-impact web and mobile development, harnessing the latest technologies and industry expertise"
                icon={dev}
              />
              <TimelineCard
                title="Industry 4.0 (IOT & Robotics)"
                description="Explore Industry 4.0 with IoT and Robotics courses. Develop smart systems and autonomous robots through hands-on experience. Stay ahead with practical skills for the future of industry."
                icon={iot}
              />
              <TimelineCard
                title="Reality Based Applications "
                description="Build practical, real-world solutions with our Reality-Based Applications courses. Develop hands-on experience to address actual challenges and create impactful applications"
                icon={mr}
              />
              <TimelineCard
                title="Design Based Applications "
                description="Create impactful solutions with our Design-Based Applications courses. Focus on user-centered design to craft visually compelling and functional applications"
                icon={design}
              />
              <TimelineCard
                title="AI, ML & Web3"
                description="Explore the future with our Web 3.0 Applications courses. Learn to develop decentralized apps, blockchain-based solutions, and AI-driven systems with machine learning capabilities to shape the next generation of the web."
                icon={web3}
              />
              <TimelineCard
                title="Non-Technical Courses"
                description="Launch your business journey with courses in Entrepreneurship, CRM, Digital Marketing, SEO, and SEM. Master the tools to build, manage, and grow successful ventures in today's digital landscape"
                icon={rocketIllu}
              />
            </CusTimeline>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const TimelineCard = ({ title, description, icon }) => {
  return (
    <Stack
      direction={"row"}
      gap={2}
      border={"1px solid #E7DAED"}
      p={2}
      width={{
        xs: "300px",
        sm: "300px",
        md: "400px",
        lg: "500px",
        xl: "500px",
      }}
      backgroundColor={"none"}
    >
      <Image src={icon} alt={title} width={30} height={30} />
      <Stack>
        <Typography fontSize={20} fontWeight={500}>
          {title}
        </Typography>
        <Typography
          fontSize={14}
          color="#6E6E6E"
          fontWeight={400}
          maxWidth={"780px"}
          lineHeight={"30px"}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
