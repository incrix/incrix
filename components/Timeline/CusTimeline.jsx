"use client";
import { Stack } from "@mui/system";
import React from "react";
import useWindowSize from "@/lib/useWindowSize";

export default function Timeline({
  children,
  isHorizontal,
  isAlternative,
  endIcon,
  alternativeBreakpoint = 0,
  horizontalBreakpoint = 0,
}) {
  const { width } = useWindowSize();
  if (isHorizontal && width <= horizontalBreakpoint) {
    isHorizontal = false;
  }
  if (isAlternative && width <= alternativeBreakpoint) {
    isAlternative = false;
  }

  return (
    <Stack>
      {isHorizontal ? (
        <IsHorizontal isAlternative={isAlternative} endIcon={endIcon}>
          {children}
        </IsHorizontal>
      ) : (
        <IsVertical isAlternative={isAlternative} endIcon={endIcon}>
          {children}
        </IsVertical>
      )}
    </Stack>
  );
}

const IsHorizontal = ({ children, isAlternative, endIcon }) => {
  const childrenArray = React.Children.toArray(children);
  const topList = [];
  const bottomList = [];
  childrenArray.forEach((child, index) => {
    if (index % 2 === 0) {
      topList.push(child);
    } else {
      bottomList.push(child);
    }
  });

  return isAlternative ? (
    <Stack spacing={5}>
      <Stack direction="row" spacing={2}>
        <Stack sx={{ width: "10px" }}></Stack>
        {topList.map((child, index) => (
          <Stack key={index} position={"relative"}>
            {child}
            <hr
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-40px",
                transform: "translateX(-50%)",
                width: "2px",
                height: "20px",
                zIndex: -1,
                border: "none",
                backgroundColor: "var(--education)",
              }}
            />
          </Stack>
        ))}
        <Stack sx={{ width: "10px" }}></Stack>
      </Stack>
      <Stack sx={{ width: "100%" }} position={"relative"}>
        <hr
          style={{
            border: "none",
            backgroundColor: "var(--education)",
            height: "2px",
          }}
        />
        {endIcon && (
          <Stack
            position={"absolute"}
            sx={{
              top: "0",
              right: "-10px",
              transform: "translateX(100%) translateY(-50%)",
            }}
          >
            {endIcon}
          </Stack>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack sx={{ width: "30px" }}></Stack>
        {bottomList.map((child, index) => (
          <Stack key={index} position={"relative"}>
            {child}
            <hr
              style={{
                position: "absolute",
                left: "50%",
                top: "-40px",
                transform: "translateX(-50%)",
                width: "2px",
                height: "20px",
                zIndex: -1,
                border: "none",
                backgroundColor: "var(--education)",
              }}
            />
          </Stack>
        ))}
        <Stack sx={{ width: "10px" }}></Stack>
      </Stack>
    </Stack>
  ) : (
    <Stack spacing={5}>
      <Stack direction="row" spacing={2}>
        <Stack sx={{ width: "10px" }}></Stack>
        {childrenArray.map((child, index) => (
          <Stack key={index} position={"relative"}>
            {child}
            <hr
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-40px",
                transform: "translateX(-50%)",
                width: "2px",
                height: "20px",
                zIndex: -1,
                border: "none",
                backgroundColor: "var(--education)",
              }}
            />
          </Stack>
        ))}
        <Stack sx={{ width: "10px" }}></Stack>
      </Stack>
      <Stack sx={{ width: "100%" }} position={"relative"}>
        <hr
          style={{
            border: "none",
            backgroundColor: "var(--education)",
            height: "2px",
          }}
        />
        {endIcon && (
          <Stack
            position={"absolute"}
            sx={{
              top: "0",
              right: "-10px",
              transform: "translateX(100%) translateY(-50%)",
            }}
          >
            {endIcon}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

const IsVertical = ({ children, isAlternative, endIcon }) => {
  const childrenArray = React.Children.toArray(children);
  const leftList = [];
  const rightList = [];
  childrenArray.forEach((child, index) => {
    if (index % 2 === 0) {
      leftList.push(child);
    } else {
      rightList.push(child);
    }
  });

  return isAlternative ? (
    <Stack spacing={5} direction={"row"}>
      <Stack spacing={2}>
        <Stack></Stack>
        <Stack direction="column" spacing={2}>
          {leftList.map((child, index) => (
            <Stack key={index} position={"relative"}>
              {child}
              <hr
                style={{
                  position: "absolute",
                  right: "-40px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "2px",
                  width: "20px",
                  zIndex: -1,
                  border: "none",
                  backgroundColor: "var(--education)",
                }}
              />
            </Stack>
          ))}
        </Stack>
        <Stack></Stack>
      </Stack>
      <Stack sx={{ width: "100%" }} position={"relative"}>
        <hr
          style={{
            border: "none",
            backgroundColor: "var(--education)",
            width: "2px",
            height: "100%",
          }}
        />
        {endIcon && (
          <Stack
            position={"absolute"}
            sx={{
              right: "50%",
              bottom: "-10px",
              transform: "translateX(50%) translateY(100%)",
            }}
          >
            {endIcon}
          </Stack>
        )}
      </Stack>
      <Stack spacing={2}>
        <Stack
          sx={{
            height: "30px",
          }}
        ></Stack>
        <Stack direction="column" spacing={2}>
          {rightList.map((child, index) => (
            <Stack key={index} position={"relative"}>
              {child}
              <hr
                style={{
                  position: "absolute",
                  left: "-40px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "2px",
                  width: "20px",
                  zIndex: -1,
                  border: "none",
                  backgroundColor: "var(--education)",
                }}
              />
            </Stack>
          ))}
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  ) : (
    <Stack direction={"row"} spacing={5}>
      <Stack sx={{ width: "100%" }} position={"relative"}>
        <hr
          style={{
            border: "none",
            backgroundColor: "var(--education)",
            width: "2px",
            height: "100%",
          }}
        />
        {endIcon && (
          <Stack
            position={"absolute"}
            sx={{
              right: "0",
              bottom: "-10px",
              transform: "translateX(100%) translateY(100%)",
            }}
          >
            {endIcon}
          </Stack>
        )}
      </Stack>
      <Stack spacing={2}>
        <Stack></Stack>
        <Stack direction="column" spacing={2}>
          {childrenArray.map((child, index) => (
            <Stack key={index} position={"relative"}>
              {child}
              <hr
                style={{
                  position: "absolute",
                  left: "-40px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "2px",
                  width: "20px",
                  zIndex: -1,
                  border: "none",
                  backgroundColor: "var(--education)",
                }}
              />
            </Stack>
          ))}
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};
