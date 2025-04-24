"use client"
import { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import ItemCard from "@/components/ItemCard";
import { NewThisWeekData } from "@/data/NewThisWeekData";

export default function NewThisWeek() {
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
        <Typography variant="h5" sx={{ fontSize: 32, fontWeight: "700" }} className="titleFont">
          New This Week
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", mt: { xs: 1, sm: 0 } }}>
          View All <EastIcon />
        </Typography>
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
        {NewThisWeekData.map((item, key) => (
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
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton onClick={() => scroll("left")} sx={{ bgcolor: "white", boxShadow: 5 }}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={() => scroll("right")} sx={{ bgcolor: "white", boxShadow: 5 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}
