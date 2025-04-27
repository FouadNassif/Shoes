"use client"
import { useRef } from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import ItemCard from "@/components/ItemCard";
import { ItemsCardType } from "@/types/Items";
import Image from "next/image";

export default function ItemSection({title, items, path}: {title: string, items: ItemsCardType[], path: string}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemWidth = (scrollRef.current.firstChild as HTMLElement)?.clientWidth || 0;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ mt: 10, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: { xs: 28, md: 32 },
            fontFamily: "var(--font-bangers)",
            letterSpacing: "0.02em",
            color: "var(--secondary)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
          }}
        >
          {title}
        </Typography>
        <Link 
          href={path} 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            mt: { xs: 1, sm: 0 }, 
            color: "var(--secondary)", 
            textDecoration: "none", 
            cursor: "pointer",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 600,
            '&:hover': {
              color: "var(--accent)"
            }
          }}
        >
          View All <EastIcon />
        </Link>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: 2,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          py: 1,
          mt: 2
        }}
      >
        {items.map((item, key) => (
          <Box
            key={key}
            sx={{
              flex: "0 0 80%",
              scrollSnapAlign: "start",
              "@media (min-width: 600px)": {
                flex: "0 0 45%",
              },
              "@media (min-width: 900px)": {
                flex: "0 0 30%",
              },
            }}
          >
            <ItemCard item={item} />
          </Box>
        ))}
      </Box>

      {/* Scroll Buttons */}
      <Box sx={{ display: {xs:"none", md:"flex"}, justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton 
          onClick={() => scroll("left")} 
          sx={{ 
            bgcolor: "white", 
            boxShadow: 5,
            '&:hover': {
              bgcolor: "var(--accent)",
              color: "white"
            }
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton 
          onClick={() => scroll("right")} 
          sx={{ 
            bgcolor: "white", 
            boxShadow: 5,
            '&:hover': {
              bgcolor: "var(--accent)",
              color: "white"
            }
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}
