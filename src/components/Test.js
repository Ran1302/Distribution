import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import UlapDistribution from "./UlapDistribution";

const Test = () => {
  return (
    <Paper>
      <Box p={5}>
        <Typography variant="h1" color="primary">
          Test Component
          <UlapDistribution />
        </Typography>
      </Box>
    </Paper>
  );
};

export default Test;
