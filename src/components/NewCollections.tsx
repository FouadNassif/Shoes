"use client"
import { Box, Button, Typography, useMediaQuery, } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function NewCollections() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: {xs: 5, md: 10}, px: 2 }}>
      {/* Left Column */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 350, flex: 1 }}>
        <Box>
          <Typography sx={{ fontSize: 32, fontWeight: "700" }} className="titleFont">New Collection</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: "300" }}>Summer 2024</Typography>
          {isMobile ? (
        <>
        <Item imgSrc="/assets/img/shoes/img1.jpg" alt="New Collections Image 1" />
        <Item imgSrc="/assets/img/shoes/img2.jpeg" alt="New Collections Image 2" />
        </>
      ): null}
        </Box>
        <Button
          sx={{
            mt: 2,
            width: "100%",
            color: "var(--secondary)",
            backgroundColor: "var(--accent)",
            display: "flex",
            justifyContent: "space-between",
            p: 1.5
          }}
        >
          <Typography>Go To Shop</Typography>
          <EastIcon />
        </Button>
      </Box>
      {/* Image Cards */}
      {!isMobile ? (
        <>
        <Item imgSrc="/assets/img/img1.jpg" alt="New Collections Image 1" />
        <Item imgSrc="/assets/img/img2.jpeg" alt="New Collections Image 2" />
        </>
      ): null}
      

    </Box>
  );
}

function Item({ imgSrc, alt }: { alt: string; imgSrc: string }) {
  return (
    <Box
  sx={{
    position: "relative",
    flex: "1 1 0", // Allow shrink and grow
    minWidth: 120, // Ensure doesn't get too small
    height: 350,
    borderRadius: 1,
    overflow: "hidden",
    border: "1px solid var(--secondary)",
  }}
  className="card"
>

<Image
  src={imgSrc}
  alt={alt}
  width={400}
  height={350}
  style={{ objectFit: "cover", width: "100%", height: "100%" }}
  priority
/>

</Box>


  );
}
