import React from "react";
import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {
    Box,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";

const AddDoctor = () => {    
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header
          title="Add Doctor"
          subtitle="Welcome to your Doctor Add"
        />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
     
      </Box>
    </Box>
  );
};

export default AddDoctor;
