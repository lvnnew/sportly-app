import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import maestro from "../public/logos/maestro.png";
import mastercard from "../public/logos/mastercard.png";
import mir from "../public/logos/mir.png";
import modulbank from "../public/logos/modulbank.png";
import visa from "../public/logos/visa.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "80px",
        paddingBottom: "40px",
        background: "#0D1821",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          padding: "40px 20px 10px 20px",
          marginTop: "40px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: "700",
            color: "#fff",
            border: "1px solid #fff",
            padding: { xs: "10px 10px", md: "10px 20px" },
            textTransform: "uppercase",
          }}
        >
          Контакты
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          color: "#fff",
          marginTop: "80px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography sx={{ padding: "10px" }}>
            © ИП Манапова Анна Сергеевна{" "}
          </Typography>
          <Typography sx={{ padding: "10px" }}>ИНН 422378228785 </Typography>
          <Typography sx={{ padding: "10px" }}>
            ОГРН 321420500002932{" "}
          </Typography>
          <Typography>
            <Button
              href="https://docs.google.com/document/d/1XtePgWgtPZGjcVTQvgjTX15rbU2viR5r18grv_nXjbs/edit"
              target="_blank"
              variant="text"
              sx={{
                color: "#fff",
              }}
            >
              Договор оферты
            </Button>
          </Typography>
        </Box>
        <Box sx={{ marginTop: { xs: "40px", md: "0px" } }}>
          <Typography sx={{ padding: "10px" }}>
            г. Москва, ул. Петра Алексеева, д. 12{" "}
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            Телефон: +7 (977) 897 23 46{" "}
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            Email: annykarimova@gmail.com{" "}
          </Typography>
        </Box>
        <Box sx={{ marginTop: { xs: "40px", md: "0px" } }}>
          <Image src={maestro} alt="maestro" width={80} height={40} />

          <Image src={mastercard} alt="maestro" width={80} height={40} />

          <Image src={mir} alt="maestro" width={80} height={40} />

          <Image src={modulbank} alt="maestro" width={80} height={40} />

          <Image src={visa} alt="maestro" width={80} height={40} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
