"use client";

import { useEffect, useState, useMemo } from "react";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

type ProductsClientProps = {
  shoes: Shoe[];
};

// Define more specific filter types
interface AppliedFilters {
    searchQuery: string;
    categories: string[];
    sizes: number[];
    colors: string[];
    brands: string[];
    priceRange: [number, number];
    inStock: boolean | null; // null means don't filter by stock
}

// Initial filter state constant
const initialFilters: AppliedFilters = {
    searchQuery: "",
    categories: [],
    sizes: [],
    colors: [],
    brands: [],
    priceRange: [0, 200],
    inStock: null,
};

export default function ProductsClient({ shoes }: ProductsClientProps) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isReady, setIsReady] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  // --- State for Filters, Search, Sort --- 
  const [sort, setSort] = useState<string>("default"); // e.g., 'price-asc', 'price-desc', 'name-asc'
  const [filters, setFilters] = useState<AppliedFilters>(initialFilters); // Use initial state constant
  // --------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // --- Filtering and Sorting Logic --- 
  const displayedShoes = useMemo(() => {
      let filtered = [...shoes];

      // 1. Search Query Filter
      if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase();
          filtered = filtered.filter(shoe => 
              shoe.name.toLowerCase().includes(query) ||
              shoe.brand.toLowerCase().includes(query) ||
              shoe.category.toLowerCase().includes(query) || 
              shoe.description.toLowerCase().includes(query)
          );
      }

      // 2. Category Filter
      if (filters.categories.length > 0) {
          filtered = filtered.filter(shoe => filters.categories.includes(shoe.category));
      }

      // 3. Brand Filter
      if (filters.brands.length > 0) {
          filtered = filtered.filter(shoe => filters.brands.includes(shoe.brand));
      }

      // 4. Size Filter
      if (filters.sizes.length > 0) {
          filtered = filtered.filter(shoe => shoe.sizes.some(size => filters.sizes.includes(size)));
      }

      // 5. Color Filter (Case-Insensitive)
      if (filters.colors.length > 0) {
          const lowerCaseFilterColors = filters.colors.map(c => c.toLowerCase());
          filtered = filtered.filter(shoe => 
              shoe.colors.some(shoeColor => lowerCaseFilterColors.includes(shoeColor.toLowerCase()))
          );
      }

      // 6. Price Range Filter
      filtered = filtered.filter(shoe => 
          shoe.price >= filters.priceRange[0] && shoe.price <= filters.priceRange[1]
      );

      // 7. In Stock Filter
      if (filters.inStock !== null) {
          filtered = filtered.filter(shoe => shoe.inStock === filters.inStock);
      }

      // 8. Sorting
      switch (sort) {
          case 'price-asc':
              filtered.sort((a, b) => a.price - b.price);
              break;
          case 'price-desc':
              filtered.sort((a, b) => b.price - a.price);
              break;
          case 'name-asc':
              filtered.sort((a, b) => a.name.localeCompare(b.name));
              break;
          case 'date-desc': // Handle newest first
              filtered.sort((a, b) => {
                  // Use the existing 'date' property
                  const dateA = new Date(a.date).getTime(); 
                  const dateB = new Date(b.date).getTime();
                  // Handle potential invalid dates if necessary
                  if (isNaN(dateA) && isNaN(dateB)) return 0;
                  if (isNaN(dateA)) return 1; // Put invalid dates last
                  if (isNaN(dateB)) return -1; // Put invalid dates last
                  return dateB - dateA; // Sort descending (newest first)
              });
              break;
           // Add more sorting options if needed (e.g., rating)
          default: 
              // No default sort applied, maintains previous filtered order or original order
              break;
      }

      return filtered;

  }, [shoes, filters, sort]);
  // -------------------------------------

  // --- Handlers to update filters --- 
  const handleSearchChange = (query: string) => {
      setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const handleFilterChange = (filterType: keyof AppliedFilters, value: any) => {
    setFilters(prev => {
        const currentValues = prev[filterType];
        let newValues;

        // Handle array filters (categories, brands, sizes, colors)
        if (Array.isArray(currentValues)) {
            if ((currentValues as any[]).includes(value)) {
                newValues = (currentValues as any[]).filter(v => v !== value);
            } else {
                newValues = [...currentValues, value];
            }
        } 
        // Handle price range
        else if (filterType === 'priceRange') {
             newValues = value as [number, number];
        } 
        // Handle inStock (assuming checkboxes pass true/false for checked/unchecked)
        // This logic needs refinement based on how the Checkbox state is managed for 'inStock'
        // For now, let's assume a specific handler for stock might be better.
        else if (filterType === 'inStock') {
             // Example: If value is true/false, set directly. If it's to *unset* the filter, set to null.
             // This needs adjustment based on FilterSidebar's implementation.
             newValues = prev.inStock === value ? null : value; // Toggle or unset
        }
        // Handle potential future non-array, non-price filters
        else {
            newValues = value; 
        }

        return { ...prev, [filterType]: newValues };
    });
  };

  // Specific handler for Price Range Slider
  const handlePriceChange = (newValue: number | number[]) => {
    setFilters(prev => ({ ...prev, priceRange: newValue as [number, number] }));
  };

  // Specific handler for In Stock / Out of Stock - Adapt based on FilterSidebar Checkbox logic
  const handleStockChange = (stockStatus: boolean | null) => { // Pass true for In Stock, false for Out, null for Any
      setFilters(prev => ({ ...prev, inStock: stockStatus }));
  };

  // --- Handler for Sort Select --- 
  const handleSortChange = (event: SelectChangeEvent<string>) => {
      setSort(event.target.value as string);
  };

  // --- Handler to Clear Filters --- 
  const handleClearFilters = () => {
      setFilters(initialFilters);
      setSort("default"); // Also reset sort when clearing
  };
  // ---------------------------------

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
              height: "calc(100vh - 64px)",
              overflowY: "auto",
              position: "sticky",
              top: 64,
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
            <FilterSidebar 
                filters={filters} 
                onFilterChange={handleFilterChange} 
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
                onClearFilters={handleClearFilters}
            />
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
              PRODUCTS ({displayedShoes.length})
            </Typography>
            {isMobile && (
              <TuneIcon
                sx={{ cursor: "pointer", color: "var(--secondary)" }}
                onClick={() => setOpenFilter(true)}
              />
            )}
          </Box>

          <SearchBar searchQuery={filters.searchQuery} onSearchChange={handleSearchChange} />

          {/* --- Sorting Dropdown --- */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
              <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                  <InputLabel id="sort-by-label">Sort By</InputLabel>
                  <Select
                      labelId="sort-by-label"
                      id="sort-by-select"
                      value={sort}
                      label="Sort By"
                      onChange={handleSortChange}
                  >
                      <MenuItem value="default">Default</MenuItem>
                      <MenuItem value="date-desc">Newest</MenuItem>
                      <MenuItem value="price-asc">Price: Low to High</MenuItem>
                      <MenuItem value="price-desc">Price: High to Low</MenuItem>
                      <MenuItem value="name-asc">Name: A to Z</MenuItem>
                  </Select>
              </FormControl>
          </Box>
          {/* ----------------------- */}

          {/* Product Grid */}
          <Box
            sx={{
              flex: 1,
              overflowY: isMobile ? "visible" : "auto",
              mt: 3,
              pr: isMobile ? 0 : 1,
            }}
          >
            {displayedShoes.length === 0 && (
                <Typography sx={{textAlign: 'center', mt: 5, color: 'grey.600'}}>
                    No products match your criteria.
                </Typography>
            )}
            
            {!isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: isMobile ? 0 : 5,
                  justifyContent: "center",
                  pb: 2,
                }}
              >
                {displayedShoes.map((item) => (
                  <ShoesCard shoe={item} key={item.id} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                  width: "100%",
                  boxSizing: "border-box",
                  pb: 2,
                }}
              >
                {displayedShoes.map((item) => (
                  <ShoesCard shoe={item} key={item.id} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <MobileFilterDialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        initialSort={sort}
        initialFilters={filters}
        onApply={(newFilters, newSort) => {
          setFilters(newFilters);
          setSort(newSort);
          setOpenFilter(false);
        }}
        onClearFilters={handleClearFilters}
      />
    </Box>
  );
}