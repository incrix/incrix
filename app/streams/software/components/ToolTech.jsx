import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import toolBg from "@/public/assets/tool-bg.png";
import figma from "@/public/icons/tools/figma.png";
import next from "@/public/icons/tools/next.png";
import react from "@/public/icons/tools/react.png";
import angular from "@/public/icons/tools/angular.png";
import mui from "@/public/icons/tools/mui.png";
import tailwind from "@/public/icons/tools/tailwind.png";
import vue from "@/public/icons/tools/vue.png";
import node from "@/public/icons/tools/node.png";
import django from "@/public/icons/tools/django.png";
import laravel from "@/public/icons/tools/laravel.png";
import spring from "@/public/icons/tools/spring.png";
import mongo from "@/public/icons/tools/mongo.png";
import sql from "@/public/icons/tools/sql.png";
import dynomo from "@/public/icons/tools/dynomo.png";
import aws from "@/public/icons/tools/aws.png";
import vercel from "@/public/icons/tools/vercel.png";
import netlify from "@/public/icons/tools/netlify.png";
import ocean from "@/public/icons/tools/ocean.png";
import postman from "@/public/icons/tools/postman.png";
import port from "@/public/icons/tools/port.png";

export default function ToolTech() {
  return (
    <Stack
      bgcolor={"black"}
      width={"100%"}
      color={"white"}
      position={"relative"}
      zIndex={0}
      overflow={"hidden"}
    >
      <Image
        src={toolBg}
        alt="tool-bg"
        width={"100vw"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: -1,
          transform: "translate(-50%, -50%)",
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
          // width={"100%"}
          gap={8}
          alignItems={"center"}
          mb={20}
        >
          <Typography variant="h3" fontSize={40} fontWeight={700}>
            Tools & Tech we are working
          </Typography>
          <Stack width={"100%"} gap={8}>
            <Stack direction={"row"} gap={8} flexWrap={"wrap"}>
              <StackList
                title="Design"
                techList={[{ name: "Figma", icon: figma }]}
              />
              <StackList
                title="Framework"
                techList={[
                  { name: "Next js", icon: next },
                  { name: "React", icon: react },
                  { name: "Angular", icon: angular },
                  { name: "Material UI", icon: mui },
                  { name: "Tailwind CSS", icon: tailwind },
                  { name: "Vue", icon: vue },
                ]}
              />
            </Stack>
            <Stack direction={"row"} gap={8} flexWrap={"wrap"}>
              <StackList
                title="Backend"
                techList={[
                  { name: "Node js", icon: node },
                  { name: "Django", icon: django },
                  { name: "Laravel", icon: laravel },
                  { name: "Spring", icon: spring },
                ]}
              />
              <StackList
                title="Database"
                techList={[
                  { name: "MongoDB", icon: mongo },
                  { name: "SQL", icon: sql },
                  { name: "DynamoDB", icon: dynomo },
                ]}
              />
            </Stack>
            <Stack direction={"row"} gap={8} flexWrap={"wrap"}>
              <StackList
                title="Infrastructure"
                techList={[
                  { name: "AWS", icon: aws },
                  { name: "Vercel", icon: vercel },
                  { name: "Netlify", icon: netlify },
                  { name: "Digital Ocean", icon: ocean },
                ]}
              />
              <StackList
                title="Testing"
                techList={[
                  { name: "Postman", icon: postman },
                  { name: "Port", icon: port },
                ]}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const StackList = ({ title, techList }) => {
  return (
    <Stack gap={2}>
      <Typography variant="h4" fontSize={30} fontWeight={700}>
        {title}
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        {techList.map((tech) => (
          <Image
            key={"tech.name"}
            src={tech.icon}
            alt={tech.name}
            width={90}
            height={90}
          />
        ))}
      </Stack>
    </Stack>
  );
};
