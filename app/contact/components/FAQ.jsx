import { Stack, Typography } from "@mui/material";

export default function FAQ() {
  return (
    <Stack bgcolor={"black"} color={"white"}>
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
          gap={8}
          mt={10}
          mb={10}
          justifyContent={"flex-start"}
        >
          <Typography
            variant={"h2"}
            color={"#999999"}
            fontSize={14}
            textTransform={"uppercase"}
          >
            Frequently asked
          </Typography>
          <Stack gap={4}>
            <FAQCard
              question={"How long will it take to get a new website?"}
              answer={
                "It normally takes 4-12 weeks to design and code a custom website. This time is just indicative, it might be less or more depending on complexity of design, availability of content & website features."
              }
            />
            <FAQCard
              question={"How much does a new website cost?"}
              answer={
                "The cost of a website can vary depending on various factors, just like the cost of a house may vary. Though our website projects generally start in the ₹45K range for basic business sites and range upward depending on your unique needs."
              }
            />
            <FAQCard
              question={"What is the payment process?"}
                answer={
                    "We require 50% of the project cost to start the project and the remaining 50% upon completion. We accept payments via bank transfer, UPI, and credit card."
                }
            />
            <FAQCard
              question={"Do you provide hosting services?"}
              answer={
                "Yes, we provide hosting services. We offer a variety of hosting packages tailored to your needs. We also offer maintenance plans to keep your website up to date."
              }
            />
            <FAQCard
              question={"Do you offer SEO services?"}
              answer={
                "Yes, we offer SEO services to help you rank higher in search engines. We offer a variety of SEO packages tailored to your needs."
              }
            />
            <FAQCard
              question={"Do you offer maintenance services?"}
              answer={
                "Yes, we offer maintenance services to keep your website up to date. We offer a variety of maintenance packages tailored to your needs."
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const FAQCard = ({ question, answer }) => {
  return (
    <Stack width={"100%"} gap={4} direction={"row"}>
      <hr
        style={{
          border: "1px solid white",
          background: "transparent",
          width: "80px",
          height: "1px",
          marginTop: "10px",
        }}
      />
      <Stack gap={2}>
        <Typography variant={"h4"} fontSize={{
            xs: 20,
            md: 24,
        }}>
          {question}
        </Typography>
        <Typography variant={"h4"} fontSize={{
            xs: 18,
            md: 20,
        }}>
          {answer}
        </Typography>
      </Stack>
    </Stack>
  );
};
