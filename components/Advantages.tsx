import { Box, Typography } from "@mui/material";
import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const Advantages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "500px",
        margin: "80px 0px",
        paddingBottom: "40px",
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
            color: "#0D1821",
            border: "1px solid #0D1821",
            padding: { xs: "10px 10px", md: "10px 20px" },
            textTransform: "uppercase",
          }}
        >
          Ответственный подход
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1330px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              padding: "15px",
              border: "1px solid #fff",
              boxShadow: "0 0 10px #000",
              background: "#EAE9E9",
              borderRadius: "10px",
              margin: "20px 20px",
              minHeight: "160px",
              minWidth: { xs: "240px", md: "420px" },
              maxWidth: "420px",
              transition: "all .3s",
              cursor: "default",
              ":hover": {
                boxShadow: "0 0 20px #000",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <FitnessCenterIcon fontSize="large" sx={{ color: "#0D1821" }} />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Работаем со спортивными секциями и клубами
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "15px",
              border: "1px solid #fff",
              boxShadow: "0 0 10px #000",
              background: "#EAE9E9",
              borderRadius: "10px",
              margin: "20px 20px",
              minHeight: "160px",
              minWidth: { xs: "240px", md: "420px" },
              maxWidth: "420px",
              transition: "all .3s",
              cursor: "default",
              ":hover": {
                boxShadow: "0 0 20px #000",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <BusinessCenterIcon fontSize="large" sx={{ color: "#0D1821" }} />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Реорганизовываем бизнес клиентов с помощью нашей уникальной
                платформы
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "15px",
              border: "1px solid #fff",
              boxShadow: "0 0 10px #000",
              background: "#EAE9E9",
              borderRadius: "10px",
              margin: "20px 20px",
              minHeight: "160px",
              minWidth: { xs: "240px", md: "420px" },
              maxWidth: "420px",
              transition: "all .3s",
              cursor: "default",
              ":hover": {
                boxShadow: "0 0 20px #000",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <CenterFocusStrongIcon
                fontSize="large"
                sx={{ color: "#0D1821" }}
              />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Собираем бизнес-процессы в одном месте и упрощаем
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "15px",
              background: "#EAE9E9",
              borderRadius: "10px",
              margin: "20px 20px",
              minHeight: "160px",
              minWidth: { xs: "240px", md: "420px" },
              maxWidth: "420px",
              border: "none",
              boxShadow: "0 0 10px #000",
              transition: "all .3s",
              cursor: "default",
              ":hover": {
                boxShadow: "0 0 20px #000",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <FormatListNumberedIcon
                fontSize="large"
                sx={{ color: "#0D1821" }}
              />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Подстраиваемся под каждую компанию, вникаем во &quot;внутреннюю
                кухню&quot; и раскладываем все по полочкам
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Advantages;
