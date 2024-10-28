import { Stack, Typography } from "@mui/material";

export default function Metrics() {
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
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          alignItems={"center"}
          mb={20}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <MetricCard
            title={"Year in the Field"}
            description={
              "Guiding future endeavors and fostering continuous improvement."
            }
            years={5}
          />
          <MetricCard
            title={"Projects Finalized"}
            description={
              "Bringing together innovation and dedication to achieve our goals."
            }
            years={15}
          />
          <MetricCard
            title={"Regular Rating"}
            description={
              "Dependable measure of the overall quality or performance."
            }
            years={4.9}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

const MetricCard = ({ title, description, years }) => {
  return (
    <Stack gap={4} width={300}>
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Typography fontSize={96}>{years}+</Typography>
        <Typography fontSize={25} maxWidth={"600px"}>
          {title}
        </Typography>
      </Stack>
      <Typography fontSize={20} maxWidth={"600px"}>
        {description}
      </Typography>
    </Stack>
  );
};
