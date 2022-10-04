import { Box, Typography } from "@mui/material";
import React from "react";
import bg from "../public/mainBackground.jpg";

const Main = () => {
  return (
    <Box
      className="background"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        webkitFilter: "grayscale(100%)",
        filter: "grayscale(100%)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, .5)",
          textAlign: "center",
          padding: { xs: "40px 10px", md: "10px 40px" },
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 0 20px #fff",
        }}
      >
        <Typography
          sx={{
            border: "1px solid #fff",
            fontWeight: 700,
            fontSize: { xs: "48px", md: "102px" },
            color: "rgb(255, 255, 255)",
            padding: { xs: "0px 10px", md: "0px 30px" },
            marginBottom: { xs: "10px", md: "30px" },
          }}
        >
          SPORTLY.APP
        </Typography>
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: { xs: "48px", md: "66px" },
            color: "#fff",
            fontWeight: "700",
            marginTop: { xs: "0px", md: "-20px" },
          }}
        >
          сервис управления спортивными секциями
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
