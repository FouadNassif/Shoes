"use client";

import { useEffect, useState } from "react";
import FilterSidebar from "@/components/FilterSideBar";
import NavBar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ShoesCard, { Shoe } from "@/components/ShoesCard";
import TuneIcon from "@mui/icons-material/Tune";
import MobileFilterDialog from "@/components/MobileFilterDialog";
import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

type ProductsClientProps = {
  shoes: Shoe[];
};

export default function ProductsClient({ shoes }: ProductsClientProps) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isReady, setIsReady] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({
    category: false,
    size: false,
    color: false,
    brand: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  if (!isReady) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        px: { xs: 0, sm: 5 },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: { xs: "visible", md: "hidden" },
          mt: {xs:1, md: 5},
        }}
      >
        {/* Sidebar - Only Desktop */}
        {!isMobile && (
          <Box
            sx={{
              width: "250px",
              p: 2,
              bgcolor: "#f9f9f9",
              borderRadius: 2,
              boxShadow: 3,
              height: "100%",
              overflowY: "auto",
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: 20,
                fontWeight: 900,
                mb: 2,
              }}
            >
              Filters
            </Typography>
            <FilterSidebar />
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            ml: { xs: 1, md: 4 },
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Breadcrumb */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Link
              href="/"
              sx={{ color: "GrayText", textDecoration: "none", fontSize: 14 }}
            >
              Home
            </Link>
            <Typography>/</Typography>
            <Link
              href="/products"
              sx={{
                color: "var(--secondary)",
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Products
            </Link>
          </Box>

          {/* Title + Mobile Filter Icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography
              sx={{ color: "var(--secondary)", fontSize: 20, fontWeight: 900 }}
            >
              PRODUCTS
            </Typography>
            {isMobile && (
              <TuneIcon
                sx={{ cursor: "pointer", color: "var(--secondary)" }}
                onClick={() => setOpenFilter(true)}
              />
            )}
          </Box>

          <SearchBar />

          {/* Product Grid */}
          <Box
            sx={{
              flex: 1,
              overflowY: isMobile ? "visible" : "auto",
              mt: 3,
              pr: isMobile ? 0 : 1,
            }}
          >
            {!isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: isMobile ? 0 : 5,
                  justifyContent: "center",
                }}
              >
                {shoes.map((item, key) => (
                  <ShoesCard shoe={item} key={key} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                  width: "100%", // Ensure the grid container doesn't exceed screen
                  boxSizing: "border-box", // Prevent padding from expanding container
                }}
              >
                {shoes.map((item, key) => (
                  <ShoesCard shoe={item} key={key} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <MobileFilterDialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        sort={sort}
        setSort={setSort}
        filters={filters}
        setFilters={setFilters}
        onApply={() => {
          console.log("Filters applied", filters, sort);
        }}
      />
    </Box>
  );
}