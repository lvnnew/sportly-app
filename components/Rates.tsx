import { Box, Typography } from "@mui/material";
import React from "react";

const Rates = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "500px",
        margin: "40px 0px",
      }}
    >
      <Box
        sx={{
          padding: "0px 20px 10px 20px",
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
            marginBottom: "40px",
            textTransform: "uppercase",
          }}
        >
          Тарифы
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            margin: "10px 40px",
          }}
        >
          <Box
            sx={{
              background: "#0D1821",
              borderRadius: "10px",
              width: "100%",
              margin: "20px",
              padding: "20px",
              boxShadow: "0 0 10px #000",
            }}
          >
            <Box
              sx={{
                minHeight: "490px",
                minWidth: "240px",
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "10px",
                }}
              >
                Старт
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Контроль посещаемости
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Групповые, персональные тренировки
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Свободные посещения
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Продажи товаров
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>Продажи услуг</Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Система лояльности
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Расчёт зарплат
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                До 3 сотрудников
              </Typography>
              <Typography sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                До 30 клиентов
              </Typography>
              <Typography
                sx={{
                  borderTop: "1px solid #fff",
                  paddingTop: "10px",
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Бесплатно
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#0D1821",
              borderRadius: "10px",
              width: "100%",
              margin: "20px",
              padding: "20px",
              boxShadow: "0 0 10px #000",
            }}
          >
            <Box
              sx={{
                minWidth: "240px",
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "10px",
                }}
              >
                Организация
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Всё из "Старта"
              </Typography>

              <Typography
                sx={{
                  paddingTop: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Неограниченно сотрудников
              </Typography>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Неограниченно клиентов
              </Typography>
              <Typography
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                До 3 подразделений
              </Typography>
              <Typography
                sx={{
                  borderTop: "1px solid #fff",
                  paddingTop: "10px",
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                1000 р. за сотрудника, <br /> 100 р. за клиента в месяц
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#0D1821",
              borderRadius: "10px",
              width: "100%",
              margin: "20px",
              padding: "20px",
              boxShadow: "0 0 10px #000",
            }}
          >
            <Box
              sx={{
                minHeight: "490px",
                minWidth: "240px",
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "10px",
                }}
              >
                Корпорация
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>
                Всё из "Организации"
              </Typography>

              <Typography
                sx={{
                  paddingTop: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Неограниченно подразделений
              </Typography>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Управление франчайзи
              </Typography>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Управление турнирами
              </Typography>
              <Typography
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#B4CDED",
                }}
              >
                Управление арендой больших манежей, залов с динамическим
                разбиением их на зоны
              </Typography>
              <Typography
                sx={{
                  borderTop: "1px solid #fff",
                  paddingTop: "10px",
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                3000 р. за сотрудника, <br />
                300 р. за клиента в месяц до 300 клиентов
                <br />
                200 р. за клиента от 500 клиентов
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Rates;
