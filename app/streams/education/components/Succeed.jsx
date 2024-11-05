import CusTimeline from "@/components/Timeline/CusTimeline";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";
import tropy from "@/public/icons/tropy.png";
import rocket from "@/public/icons/rocket.png";

export default function Succeed() {
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
          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <Typography fontSize={38} fontWeight={500} color="#6E6E6F">
              Want to join
            </Typography>
            <Typography
              fontSize={80}
              fontFamily={"var(--font-smooch)"}
              color="var(--education)"
            >
              #teamincrix
            </Typography>
          </Stack>

          <Typography
            variant={"p"}
            fontSize={18}
            color="#6E6E6E"
            fontWeight={400}
            textAlign={"center"}
            maxWidth={"780px"}
            lineHeight={"30px"}
          >
            We&apos;re more than just a group of professionals—we&apos;re the
            creative engine driving the future of tech education. United by a
            passion for innovation, we turn ideas into reality and learning into
            inspiration. See how our team can help you succeed
            <Image
              src={rocket}
              alt="trophy"
              width={30}
              height={30}
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            />
          </Typography>
          <Stack mt={8}>
            <CusTimeline
              isHorizontal
              isAlternative
              horizontalBreakpoint={1120}
              alternativeBreakpoint={720}
              endIcon={
                <Image src={tropy} alt="trophy" width={42} height={42} />
              }
            >
              <TimeLineCard
                index={1}
                title={"Customized Learning Paths"}
                desc={
                  "We create personalized educational journeys tailored to your career goals, ensuring you acquire the skills that matter most."
                }
              />
              <TimeLineCard
                index={2}
                title={"Cutting-Edge Tools"}
                desc={
                  "Use the latest technologies and resources to stay ahead in the industry and enrich your learning experience."
                }
              />
              <TimeLineCard
                index={3}
                title={"Hands-On Projects"}
                desc={
                  "Gain real-world experience with projects that connect theory to practice, preparing you for industry challenges."
                }
              />
              <TimeLineCard
                index={4}
                title={"Collaborative Environment"}
                desc={
                  "Excel in a dynamic setting where teamwork and shared knowledge drive your growth and innovation."
                }
              />
              <TimeLineCard
                index={5}
                title={"Expert Mentorship"}
                desc={
                  "Get one-on-one guidance and support from experienced professionals throughout your journey"
                }
              />
              <TimeLineCard
                index={6}
                title={"Career Support"}
                desc={
                  "We divide the implementation process into several checkpoints rather than a single deadline."
                }
              />
            </CusTimeline>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const TimeLineCard = ({ index, title, desc }) => {
  return (
    <Stack
      width={"300px"}
      height={"160px"}
      borderRadius={"10px"}
      backgroundColor={"none"}
      border={"1px solid #E7DAED"}
      p={2}
      gap={1}
    >
      <Stack direction={"row"} gap={1}>
        <Typography
          variant={"h6"}
          color="var(--education)"
          fontSize={18}
          fontWeight={600}
        >
          #{index}
        </Typography>
        <Typography
          variant={"h6"}
          fontSize={18}
          fontWeight={600}
          color="#1A202C"
        >
          {title}
        </Typography>
      </Stack>
      <Typography variant={"body1"} fontSize={14} color="#718096">
        {desc}
      </Typography>
    </Stack>
  );
};
