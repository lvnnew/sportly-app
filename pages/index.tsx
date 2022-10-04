import { Box } from "@mui/material";
import type { NextPage } from "next";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Opportunities from "../components/Opportunities";
import Rates from "../components/Rates";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Main />
      <Advantages />
      <Opportunities />
      <Rates />
      <Footer />
    </Box>
  );
};

export default Home;
