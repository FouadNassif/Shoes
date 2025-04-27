"use client"
import { Box, Button, Typography, useMediaQuery, } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function NewCollections() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: {xs: 5, md: 10}, px: {xs: 1, md: 2} }}>
      {/* Left Column */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 350, flex: 1 }}>
        <Box>
          <Typography 
            sx={{ 
              fontSize: { xs: 28, md: 32 }, 
              fontWeight: "700",
              fontFamily: "var(--font-playfair)",
              letterSpacing: "-0.02em",
              mb: 1
            }}
          >
            New Collection
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: 16, md: 18 }, 
              fontWeight: "300",
              fontFamily: "var(--font-montserrat)",
              color: "text.secondary"
            }}
          >
            Summer 2025
          </Typography>
          {isMobile ? (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 2 }}>
              <Item imgSrc="/assets/img/Shoes/Shoes1.jpg" alt="New Collections Image 1" />
              <Item imgSrc="/assets/img/Shoes/Shoes1.jpeg" alt="New Collections Image 2" />
            </Box>
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
            p: 1.5,
            fontFamily: "var(--font-montserrat)",
            fontWeight: 600,
            '&:hover': {
              backgroundColor: "var(--accent)",
              opacity: 0.9
            }
          }}
          href="/products"
        >
          <Typography sx={{ fontFamily: "var(--font-montserrat)" }}>Go To Shop</Typography>
          <EastIcon />
        </Button>
      </Box>
      {/* Image Cards */}
      {!isMobile ? (
        <>
          <Item imgSrc="/assets/img/Shoes/Shoes3/Shoes1.jpg" alt="New Collections Image 1" />
          <Item imgSrc="/assets/img/Shoes/Shoes8/Shoes1.jpg" alt="New Collections Image 2" />
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
        flex: "1 1 0",
        minWidth: 120,
        height: {xs: 200, md: 350},
        borderRadius: 1,
        overflow: "hidden",
        border: "1px solid var(--secondary)",
        transition: "transform 0.3s ease",
        '&:hover': {
          transform: "scale(1.02)"
        }
      }}
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
