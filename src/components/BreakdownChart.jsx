import React from "react";
import { Box, Typography, useTheme } from "@mui/material";


const BreakdownChart = ({ isDashboard = false }) => {
  const theme = useTheme();


  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
     data
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
        title
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakdownChart;