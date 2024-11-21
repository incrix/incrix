import { Stack, Typography, Chip } from "@mui/material";

export default function Services() {
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
          gap={{
            xs: 4,
            sm: 4,
            md: 10,
            lg: 10,
            xl: 10,
          }}
          alignItems={"center"}
          mb={20}
        >
          <Stack
            gap={4}
            direction={{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            width={"100%"}
            maxWidth={"1050px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="h2"
              width={"100%"}
              fontSize={{
                xs: 28,
                sm: 28,
                md: 40,
                lg: 40,
                xl: 40,
              }}
              fontWeight={500}
            >
              One stop solution for
              <br /> all your business needs!
            </Typography>
            <Typography
              variant="body1"
              width={"100%"}
              fontSize={{
                xs: 16,
                sm: 16,
                md: 20,
                lg: 20,
                xl: 20,
              }}
            >
              We seamlessly operate across all our verticals, both independently
              and as an integrated partner, to deliver comprehensive solutions.
            </Typography>
          </Stack>
          <Stack
            gap={4}
            direction={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Stack gap={4}>
              <ServiceCard
                title={"Branding"}
                description={
                  "Developing your brand’s identity with comprehensive services, including strategic design, storytelling, market positioning, and more"
                }
                chipList={["Brand Research", "Logo", "Identity"]}
                serviceList={[
                  "Brand Identity design",
                  "Logo design",
                  "Iconography & Typography",
                  "Product & package design",
                  "Rebranding services",
                  "Public relations management",
                ]}
              />
              <ServiceCard
                title={"Web Design"}
                description={
                  "We deliver stunning, functional websites without the need for complex coding, allowing you to focus on what you do best."
                }
                chipList={["Wordpress", "Webflow", "Shopify"]}
                serviceList={["Business sites", "Landing pages"]}
              />
            </Stack>
            <Stack gap={4}>
              <ServiceCard
                title={"Digital Marketing"}
                description={
                  "Expanding your brand's reach with targeted strategies in social media, SEO, PPC, and content marketing"
                }
                chipList={["Campaigns", "SEO", "Leads"]}
                serviceList={[
                  "Social media marketing",
                  "SEO",
                  "Content marketing",
                ]}
              />
              <ServiceCard
                title={"Startup Ecosystem"}
                description={
                  "We drive startup success through tailored incubation, market expansion strategies, legal guidance, and robust community support, fostering innovation and growth."
                }
                chipList={["Startup India", "MSME", "Incubation"]}
                serviceList={[
                  "Legal consulting",
                  "Startupindia & Funding strategy",
                  "Market expansion",
                  "Innovation & product development",
                  "Network building",
                ]}
              />
            </Stack>
            <Stack gap={4}>
              <ServiceCard
                title={"Business Consultation"}
                description={
                  "With this services, businesses receive expert advice on planning, strategy, and operations to ensure growth and success"
                }
                chipList={["Operation", "Strategy", "Planning"]}
                serviceList={[
                  "Business planning",
                  "Legal consulting",
                  "Sales & HR consulting",
                  "Operations consulting",
                ]}
              />
              <ServiceCard
                title={"Creative Studio"}
                description={
                  "We specialize in transforming ideas into captivating visual stories, blending creativity with meticulous attention to detail."
                }
                chipList={["Films", "Production", "Media"]}
                serviceList={[
                  "Photography",
                  "Videography",
                  "Ad films",
                  "Brand films",
                  "Post-production services",
                  "Creative Direction",
                ]}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ServiceCard = ({ title, description, chipList, serviceList }) => {
  return (
    <Stack gap={3} width={"340px"} bgcolor={"#eee"} padding={"40px 20px"}>
      <Typography variant="h4" fontSize={24} fontWeight={500}>
        {title}
      </Typography>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {chipList.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            sx={{
              fontSize: 16,
              bgcolor: "transparent",
              border: "1px solid #000",
            }}
          />
        ))}
      </Stack>
      <Stack gap={1}>
        {serviceList.map((service) => (
          <Typography key={service} fontSize={16}>
            {service}
          </Typography>
        ))}
      </Stack>
      <Typography fontSize={16}>{description}</Typography>
    </Stack>
  );
};
