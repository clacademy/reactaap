import React, { useMemo } from "react";
import { Box,useTheme } from "@mui/material";

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >over view</Box>
  );
};

export default OverviewChart;
