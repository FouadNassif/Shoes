import { Box, Typography } from "@mui/material";
import React from "react";
export default function Break1() {
    return(
        <Box
  sx={{
    my: 20,
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    textAlign: "center",
  }}
>
  {[
    { title: "2,000+", subtitle: "High Quality Products" },
    { title: "30,000+", subtitle: "Happy Customers" },
    { title: "Fast Service", subtitle: "24/7 Ready For You!" },
  ].map((item, index) => (
    <React.Fragment key={index}>
      {index !== 0 && (
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: 2,
            height: 100,
            backgroundColor: "GrayText",
          }}
        />
      )}
      <Box>
        <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700 }}>
          {item.title}
        </Typography>
        <Typography sx={{ color: "GrayText", fontSize: 17 }}>
          {item.subtitle}
        </Typography>
      </Box>
    </React.Fragment>
  ))}
</Box>

    )
}