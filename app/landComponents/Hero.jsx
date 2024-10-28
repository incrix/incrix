"use client";
import { Stack, Typography, IconButton } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import HeroLine from "@/public/assets/heroLine.svg";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";

export default function Hero() {
  useGSAP(() => {
    gsap.set(".hero-tag", { y: 100, opacity: 0 });
    gsap.to(".hero-tag", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    });
  });
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
          className="hero-tag"
          position={"absolute"}
          width={"100%"}
          minWidth={"400px"}
          sx={{
            top: {
              xs: "calc(80px + 2%)",
              sm: "calc(80px + 2%)",
              md: "calc(80px + 1%)",
              lg: "calc(80px + 1%)",
              xl: "80px",
            },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
          }}
        >
          <Image src={HeroLine} alt={"hero-line"} layout={"responsive"} />
        </Stack>
        <Typography
          variant="h1"
          color="var(--primary)"
          fontWeight={500}
          textAlign={"center"}
          whiteSpace="nowrap"
          fontSize={{
            xs: "40px",
            sm: "50px",
            md: "60px",
            lg: "80px",
            xl: "100px",
          }}
          mt={10}
          mb={{
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 10,
          }}
        >
          MAKE YOUR IDEAS
          <Stack
            display={{
              xs: "block",
              md: "none",
            }}
          ></Stack>
          &nbsp;ALIVE!
        </Typography>
        <VideoPlayer />
      </Stack>
    </Stack>
  );
}

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleMouseEnter = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <Stack
      position={"relative"}
      marginTop="100px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bgcolor={"rgba(0, 0, 0, 0.1)"}
    >
      <video
        ref={videoRef}
        width={"100%"}
        style={{
          maxWidth: "1400px",
        }}
      >
        <source src="/assets/incrix.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: {
            xs: "60px",
            sm: "60px",
            md: "80px",
            lg: "80px",
            xl: "100px",
          },
        }}
        size="large"
        onClick={handlePlayPause}
        aria-label="play"
      >
        {!isPlaying ? (
          <PlayCircleFilledRoundedIcon
            fontSize="inherit"
            sx={{
              // fill: "var(--primary)",
              fill: "white",
              // opacity: 0.6,
            }}
          />
        ) : (
          onHover && (
            <PauseCircleFilledRoundedIcon
              fontSize="inherit"
              sx={{
                // fill: "var(--primary)",
                fill: "white",
                // opacity: 0.6,
              }}
            />
          )
        )}
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          transform: "translateY(50%) translateX(-50%)",
          bgcolor: "rgba(0, 0, 0, 0.1)",
          fontSize: {
            xs: "18px",
            sm: "22px",
            md: "24px",
            lg: "24px",
            xl: "24px",
          },
        }}
        onClick={handleFullscreen}
        aria-label="fullscreen"
      >
        <FullscreenRoundedIcon
          fontSize="inherit"
          sx={{
            fill: "white",
          }}
        />
      </IconButton>
    </Stack>
  );
}
