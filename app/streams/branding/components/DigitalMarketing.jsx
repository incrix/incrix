import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import digitalMarketing from "@/public/assets/digital-marketing.png";

export default function DigitalMarketing() {
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
        mt={5}
        mb={5}
      >
        <Stack
          maxWidth={"1300px"}
          width={"100%"}
          gap={4}
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          justifyContent={"space-between"}
          mb={5}
        >
          <Stack gap={4}>
            <Typography
              variant="h2"
              fontSize={{
                xs: 28,
                sm: 28,
                md: 40,
                lg: 52,
                xl: 64,
              }}
              fontWeight={400}
            >
              Digital Marketing
            </Typography>
            <Typography
              variant="h4"
              fontSize={18}
              fontWeight={400}
              color="#606060"
              maxWidth={{
                xs: "100%",
                sm: "100%",
                md: "400px",
                lg: "400px",
                xl: "400px",
              }}
            >
              We specialize in crafting powerful digital marketing and branding
              strategies that transform businesses in Kovilpatti, driving
              growth, visibility, and lasting impact through tailored solutions
              that set your brand apart.
            </Typography>
            <Stack
              maxWidth={{
                xs: "100%",
                sm: "100%",
                md: "400px",
                lg: "400px",
                xl: "400px",
              }}
            >
              <Image
                src={digitalMarketing}
                alt="Digital Marketing"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Stack>
          </Stack>
          <Stack gap={4}>
            <MarketingCard
              index={1}
              title={"Discovery"}
              description={
                "We meet with you to learn about your business, your goals, and your target audience."
              }
            />
            <MarketingCard
              index={2}
              title={"Strategy"}
              description={
                "We develop a customized marketing strategy that is based on your unique needs and goals."
              }
            />
            <MarketingCard
              index={3}
              title={"Execution"}
              description={
                "We execute our strategy using the latest digital marketing tools and techniques."
              }
            />
            <MarketingCard
              index={4}
              title={"Measurement"}
              description={
                "We track the results of our campaigns so that we can make adjustments as needed."
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const MarketingCard = ({ title, description, index }) => {
  return (
    <Stack direction={"row"} gap={2}>
      <Stack
        width={"100px"}
        height={"100px"}
        bgcolor={"#E6E6E6"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"25px"}
      >
        <Typography variant="h4" fontSize={32} fontWeight={500}>
          {index}
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant="h4"
          fontSize={{
            xs: 24,
            sm: 24,
            md: 32,
            lg: 32,
            xl: 32,
          }}
          fontWeight={500}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={16}
          fontWeight={400}
          color="#606060"
          width={{
            xs: "80%",
            sm: "80%",
            md: "400px",
            lg: "400px",
            xl: "400px",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
