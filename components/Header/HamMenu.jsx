"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { Stack } from "@mui/material";
import NavBar from "./NavBar";

export default function HamMenu({ isLight, isEdu }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Stack
      position={"fixed"}
      onClick={handleClick}
      top={{
        xs: "calc(var(--md-side-padding) + 8px)",
        sm: "calc(var(--md-side-padding) + 8px)",
        md: "calc(var(--md-side-padding) + 8px)",
        lg: "calc(var(--dd-side-padding) + 8px)",
        xl: "calc(var(--dd-side-padding) + 8px)",
      }}
      right={{
        md: "calc(var(--md-side-padding) + 8px)",
        lg: "calc(var(--dd-side-padding) + 8px)",
        xl: "calc(var(--dd-side-padding) + 8px)",
      }}
      width={"45px"}
      height={"45px"}
    >
      <Stack
        position={"absolute"}
        sx={{
          height: "10px",
          width: "10px",
          borderRadius: "50%",
          top: "20px",
          right: "20px",
          transitionDuration: "0.6s",
          transform: isActive ? "scale(600)" : "scale(1)",
          backgroundColor: "var(--primary)",
          zIndex: -1,
        }}
      ></Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          zIndex: 10000,
          height: "100%",
          width: "100%",
          borderRadius: "50%",
          backgroundColor: isEdu ? "var(--education)" :isLight ? (isActive ? "white" : "black") : "white",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: isActive ? "white" : isEdu ? "black" : "var(--primary)",
          },
          "&:hover path": {
            stroke: !isLight && !isActive ? "white !important" : "",
          },
        }}
      >
        <svg
          className={`${styles.ham} ${styles.hamRotate} ${styles.ham7} ${
            isActive ? styles.active : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
          onClick={handleClick}
        >
          <path
            className={`${styles.line} ${styles.top}`}
            style={{
              stroke: isLight
                ? isActive
                  ? "var(--primary)"
                  : "white"
                : isActive
                ? "var(--primary)"
                : "black",
            }}
            d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
          />
          <path
            className={`${styles.line} ${styles.middle}`}
            d="m 70,50 h -40"
            style={{
              stroke: isLight
                ? isActive
                  ? "var(--primary)"
                  : "white"
                : isActive
                ? "var(--primary)"
                : "black",
            }}
          />
          <path
            className={`${styles.line} ${styles.bottom}`}
            style={{
              stroke: isLight
                ? isActive
                  ? "var(--primary)"
                  : "white"
                : isActive
                ? "var(--primary)"
                : "black",
            }}
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
          />
        </svg>
      </Stack>
      {isActive && (
        <Stack
          sx={{
            position: "absolute",
            top: "-30px",
            right: "-45px",
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            color: "white",
          }}
        >
          <NavBar />
        </Stack>
      )}
    </Stack>
  );
}
