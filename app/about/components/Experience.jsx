import { Stack, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Stack>
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
          gap={4}
          mb={"100px"}
        >
          <Typography
            fontSize={{
              xs: 32,
              sm: 64,
            }}
            fontWeight={500}
          >
            Experience our process
          </Typography>
          <Typography
            fontSize={{
              xs: 16,
              sm: 24,
            }}
            fontWeight={500}
          >
            Our team of talented professionals on pushing the boundaries of
            possibilities ensuring that the project stands out and makes an
            impact.
          </Typography>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            justifyContent={"space-between"}
            gap={4}
            mt={8}
          >
            <Typography
              fontSize={{
                xs: 24,
                sm: 30,
              }}
              fontWeight={500}
            >
              From Vision to Reality
            </Typography>
            <Stack gap={4} flexWrap={"wrap"}>
              <Stack direction={"row"} gap={4} flexWrap={"wrap"}>
                <ExperienceCard
                  title={"Share Your Vision"}
                  description={
                    "Articulate your goals and aspirations. We collaborate closely to fully understand your unique requirements and vision."
                  }
                />
                <ExperienceCard
                  title={"Design & Plan"}
                  description={
                    "Our expert team crafts a strategic plan and design tailored to your needs, ensuring a clear roadmap to achieve your vision."
                  }
                />
              </Stack>
              <Stack direction={"row"} gap={4} flexWrap={"wrap"}>
                <ExperienceCard
                  title={"Make it Happen"}
                  description={
                    "We bring your vision to life using advanced technologies and innovative strategies, ensuring seamless execution and development."
                  }
                />
                <ExperienceCard
                  title={"Test & Deliver"}
                  description={
                    "We rigorously test every aspect to ensure quality and reliability. Once perfected, we deliver a solution that exceeds your expectations."
                  }
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ExperienceCard = ({ title, description }) => {
  return (
    <Stack
      bgcolor={"#F3F3F3"}
      borderRadius={2}
      gap={1}
      maxWidth={"370px"}
      p={" 30px 30px"}
    >
      <Typography fontSize={20} fontWeight={600} color="var(--primary)">
        {title}
      </Typography>
      <Typography fontSize={18} fontWeight={400}>
        {description}
      </Typography>
    </Stack>
  );
};
