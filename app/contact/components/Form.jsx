"use client";
import { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  toggleButtonClasses,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 50,
    bgcolor: "transparent",
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  [`&.${toggleButtonClasses.root}`]: {
    border: 0,
    bgcolor: "transparent",
    "&.Mui-selected": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "#FCDBD5",
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--primary)",
  },
  "& label.Mui-focused": {
    color: "var(--primary)",
  },
}));

const StyledChip = styled(Chip)(({ theme, isSelected }) => ({
  background: isSelected ? "var(--primary)" : "transparent",
  color: isSelected ? "white" : "#999999",
  textTransform: "none",
  padding: "20px 10px",
  fontSize: 16,
  border: "2px solid #EEEEEE",
  borderRadius: 50,
  "& svg": {
    fill: isSelected ? "white" : "#999999",
  },
}));

export default function Form() {
  const [category, setCategory] = useState("Automation");
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleCategory = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
      setServices([]);
    }
  };

  const serviceList = {
    Automation: [
      "IoT Solutions",
      "Robotics",
      "Process Optimization",
      "Home Automation",
      "Custom Projects",
    ],
    Branding: [
      "Brand Identity",
      "Logo Design",
      "Rebranding",
      "Packaging",
      "PR & Reputation",
    ],
    Software: [
      "Custom Software",
      "Mobile & Web Apps",
      "SaaS Solutions",
      "Integration",
      "MVP Prototyping",
    ],
    Education: [
      "Internships",
      "Workshops",
      "Projects",
      "Certifications",
      "Career Support",
    ],
    Studios: [
      "Photography",
      "Videography",
      "Ad Films",
      "Brand Films",
      "Creative Direction",
    ],
  };

  const onSubmit = () => {
    if (
      !category ||
      !services.length ||
      !message ||
      !name ||
      !company ||
      !email ||
      !phone
    ) {
      alert("Please fill all the required fields");
      return;
    }

    fetch("https://incrix.com/form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        services,
        message,
        name,
        company,
        email,
        phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setCategory("Automation");
        setServices([]);
        setMessage("");
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        alert("Form submitted successfully");
      });
  };

  return (
    <Stack id="project" bgcolor={"white"}>
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
          gap={4}
          mt={10}
          mb={10}
          justifyContent={"flex-start"}
        >
          <Typography variant={"h2"} color={"#999999"} fontSize={14}>
            START A PROJECT
          </Typography>
          <Typography
            variant={"h3"}
            fontSize={{
              xs: 24,
              md: 40,
            }}
          >
            Project Requirements
          </Typography>
          <Stack gap={2}>
            <Typography variant={"h4"} fontSize={18} color="#999">
              Category *
            </Typography>
            <StyledToggleButtonGroup
              value={category}
              exclusive
              onChange={handleCategory}
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <StyledToggleButton value="Automation">
                <StyledChip
                  icon={<AddIcon />}
                  label="Automation"
                  isSelected={category === "Automation"}
                />
              </StyledToggleButton>
              <StyledToggleButton value="Branding">
                <StyledChip
                  icon={<AddIcon />}
                  label="Branding"
                  isSelected={category === "Branding"}
                />
              </StyledToggleButton>
              <StyledToggleButton value="Software">
                <StyledChip
                  icon={<AddIcon />}
                  label="Software"
                  isSelected={category === "Software"}
                />
              </StyledToggleButton>
              <StyledToggleButton value="Education">
                <StyledChip
                  icon={<AddIcon />}
                  label="Education"
                  isSelected={category === "Education"}
                />
              </StyledToggleButton>
              <StyledToggleButton value="Studios">
                <StyledChip
                  icon={<AddIcon />}
                  label="Studios"
                  isSelected={category === "Studios"}
                />
              </StyledToggleButton>
            </StyledToggleButtonGroup>
          </Stack>
          <Stack gap={2}>
            <Typography variant={"h4"} fontSize={18} color="#999">
              Services *
            </Typography>
            <StyledToggleButtonGroup
              value={services}
              onChange={(event, newServices) => {
                setServices(newServices);
              }}
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {serviceList[category].map((service) => (
                <StyledToggleButton key={service} value={service}>
                  <StyledChip
                    icon={<AddIcon />}
                    label={service}
                    onClick={() => {
                      if (services.includes(service)) {
                        setServices(
                          services.filter((item) => item !== service)
                        );
                      } else {
                        setServices([...services, service]);
                      }
                    }}
                    isSelected={services.includes(service)}
                  />
                </StyledToggleButton>
              ))}
            </StyledToggleButtonGroup>
          </Stack>
          <Stack gap={2}>
            <StyledTextField
              label="Please tell us a bit about your project *"
              variant="standard"
              sx={{
                maxWidth: "600px",
              }}
              multiline
              onChange={(e) => setMessage(e.target.value)}
            />
            <Stack direction={{ xs: "column", md: "row" }} gap={2}>
              <StyledTextField
                sx={{ width: "300px" }}
                label="Name *"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
              <StyledTextField
                sx={{ width: "300px" }}
                label="Company *"
                variant="standard"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} gap={2}>
              <StyledTextField
                sx={{ width: "300px" }}
                label="Email *"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledTextField
                sx={{ width: "300px" }}
                label="Phone *"
                variant="standard"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
              width: "150px",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
