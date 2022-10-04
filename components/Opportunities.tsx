import { Box, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const Opportunities = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "500px",
        margin: "80px 0px",
        padding: "80px 0px",
        background: "#EAE9E9",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          padding: "40px 20px 10px 20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: "700",
            color: "#4c4c4c",
            border: "1px solid #4c4c4c",
            padding: { xs: "10px 10px", md: "10px 20px" },
            textTransform: "uppercase",
          }}
        >
          Что может SPORTLY.APP?
        </Typography>
      </Box>
      <Box sx={{ margin: "80px 20px", color: "#4c4c4c" }}>
        <Box display="flex" sx={{ margin: "20px 0px"}}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Вести базу ваших клиентов
          </Typography>
        </Box>
        <Box display="flex" sx={{ margin: "20px 0px" }}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Регистрировать новых сотрудников
          </Typography>
        </Box>
        <Box display="flex" sx={{ margin: "20px 0px" }}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Следить за расписанием тренеров
          </Typography>
        </Box>
        <Box display="flex" sx={{ margin: "20px 0px" }}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Следить за расписанием клиентов
          </Typography>
        </Box>
        <Box display="flex" sx={{ margin: "20px 0px" }}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Вести онлайн-бухгалтерию
          </Typography>
        </Box>
        <Box display="flex" sx={{ margin: "20px 0px" }}>
          <CheckIcon
            sx={{
              fontSize: { xs: "25px", md: "40px" },
              color: "blue",
            }}
          />
          <Typography
            sx={{
              paddingLeft: "20px",
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Сводить статистику по клубу или секции
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Opportunities;
