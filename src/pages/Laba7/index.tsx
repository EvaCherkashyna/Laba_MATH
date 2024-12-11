import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box } from "@mui/material";

const SlidingBlock: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isFallen, setIsFallen] = useState(false);

  const props = useSpring({
    transform: isFallen
      ? "rotate(0deg) translate(10px, 0px)"
      : "rotate(45deg) translate(-45px, -20px)",
    transformOrigin: "40px 30px",
    config: { mass: 1, tension: 200, friction: 100 },
    onRest: () => setIsRunning(false),
  });

  const startAnimation = () => {
    setIsRunning(true);
    setIsFallen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f4",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "300px",
          height: "300px",
          border: "1px solid black",
          overflow: "hidden"
        }}
      >
        <animated.div
          style={{
            ...props,
            width: "100px",
            height: "20px",
            background: "blue",
            position: "absolute",
            bottom: "0",
            left: "0",
            transformOrigin: "40px 30px",
          }}
        />
      </Box>

      <Button
        variant="contained"
        onClick={startAnimation}
        disabled={isRunning}
        sx={{ marginTop: "20px" }}
      >
        {isRunning ? "Рухається..." : "Запустити"}
      </Button>
    </Box>
  );
};

export default SlidingBlock;
