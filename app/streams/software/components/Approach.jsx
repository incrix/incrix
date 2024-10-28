import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import expertBg from "@/public/assets/expert-bg.svg";
import requirement from "@/public/icons/requirement.svg";
import design from "@/public/icons/design.svg";
import plan from "@/public/icons/plan.svg";
import development from "@/public/icons/development.svg";
import test from "@/public/icons/test.svg";
import quality from "@/public/icons/quality.svg";
import deploy from "@/public/icons/deploy.svg";
import live from "@/public/icons/live.svg";
import market from "@/public/icons/market.svg";
import maintain from "@/public/icons/maintain.svg";
import refine from "@/public/icons/refine.svg";

export default function Approach() {
  return (
    <Stack bgcolor={"black"} color={"white"} position={"relative"} zIndex={0}>
      <Image
        src={expertBg}
        alt="expert-bg"
        width={400}
        style={{
          position: "absolute",
          top: "58%",
          left: "0%",
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
          alignItems={"center"}
          mb={20}
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
              whiteSpace={"nowrap"}
            >
              Our Approach
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
          <Stack
            gap={2}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <ApproachCard
              id={1}
              title="Requirements Analysis"
              icon={requirement}
            />
            <ApproachCard id={2} title="Strategic Design" icon={design} />
            <ApproachCard id={3} title="Architectural Plan" icon={plan} />
            <ApproachCard id={4} title="Development" icon={development} />
            <ApproachCard id={5} title="Test Build" icon={test} />
            <ApproachCard id={6} title="Quality Assurance" icon={quality} />
            <ApproachCard id={7} title="Deployment" icon={deploy} />
            <ApproachCard id={8} title="Go Live" icon={live} />
            <ApproachCard id={9} title="Market Adaptation" icon={market} />
            <ApproachCard
              id={10}
              title="Post-launch maintenance"
              icon={maintain}
            />
            <ApproachCard id={11} title="Refinement" icon={refine} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ApproachCard = ({ id, title, icon }) => {
  return (
    <Stack
      position={"relative"}
      bgcolor={"#151D26"}
      border={"2px solid #2E3238"}
      p={2}
      width={{
        xs: "150px",
        sm: "210px",
        md: "210px",
        lg: "210px",
        xl: "210px",
      }}
      height={"100px"}
      borderRadius={"6px"}
      zIndex={1}
    >
      <Stack direction={"row"} gap={1}>
        <Typography
          variant="p"
          fontSize={{
            xs: 14,
            sm: 20,
            md: 20,
            lg: 20,
            xl: 20,
          }}
          fontWeight={500}
        >
          {id}.
        </Typography>
        <Typography
          variant="h4"
          fontSize={{
            xs: 14,
            sm: 20,
            md: 20,
            lg: 20,
            xl: 20,
          }}
          fontWeight={500}
        >
          {title}
        </Typography>
      </Stack>
      <Image
        src={icon}
        alt={title}
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          zIndex: -1,
        }}
      />
    </Stack>
  );
};
