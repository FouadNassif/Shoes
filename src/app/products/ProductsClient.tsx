"use client";

import { useEffect, useState, useMemo, useRef } from "react";
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
  IconButton,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

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
    gender: string[];
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
    gender: [],
};

export default function ProductsClient({ shoes }: ProductsClientProps) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isReady, setIsReady] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- State for Filters, Search, Sort --- 
  const [sort, setSort] = useState<string>(searchParams.get('sort') || "default");
  const [filters, setFilters] = useState<AppliedFilters>(() => {
    return {
      searchQuery: searchParams.get('search') || "",
      categories: searchParams.get('categories')?.split(',') || [],
      sizes: searchParams.get('sizes')?.split(',').map(Number) || [],
      colors: searchParams.get('colors')?.split(',') || [],
      brands: searchParams.get('brands')?.split(',') || [],
      priceRange: [
        Number(searchParams.get('minPrice')) || 0,
        Number(searchParams.get('maxPrice')) || 200
      ],
      inStock: searchParams.get('inStock') === 'true' ? true : 
               searchParams.get('inStock') === 'false' ? false : null,
      gender: searchParams.get('gender')?.split(',') || [],
    };
  });

  // Update filters when URL parameters change
  useEffect(() => {
    setFilters({
      searchQuery: searchParams.get('search') || "",
      categories: searchParams.get('categories')?.split(',') || [],
      sizes: searchParams.get('sizes')?.split(',').map(Number) || [],
      colors: searchParams.get('colors')?.split(',') || [],
      brands: searchParams.get('brands')?.split(',') || [],
      priceRange: [
        Number(searchParams.get('minPrice')) || 0,
        Number(searchParams.get('maxPrice')) || 200
      ],
      inStock: searchParams.get('inStock') === 'true' ? true : 
               searchParams.get('inStock') === 'false' ? false : null,
      gender: searchParams.get('gender')?.split(',') || [],
    });
    setSort(searchParams.get('sort') || "default");
  }, [searchParams]);

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

      // 8. Gender Filter
      if (filters.gender.length > 0) {
          filtered = filtered.filter(shoe => {
              // Always include unisex items when any gender is selected
              if (shoe.gender === "Unisex") {
                  return true;
              }
              // Include items that match any selected gender
              return filters.gender.includes(shoe.gender);
          });
      }

      // 9. Sorting
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

  // Pagination logic
  const totalPages = Math.ceil(displayedShoes.length / itemsPerPage);
  const paginatedShoes = displayedShoes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sort]);

  // Function to update URL with current filters
  const updateUrlWithFilters = (newFilters: AppliedFilters, newSort: string) => {
    const params = new URLSearchParams();
    
    if (newFilters.searchQuery) params.set('search', newFilters.searchQuery);
    if (newFilters.categories.length) params.set('categories', newFilters.categories.join(','));
    if (newFilters.sizes.length) params.set('sizes', newFilters.sizes.join(','));
    if (newFilters.colors.length) params.set('colors', newFilters.colors.join(','));
    if (newFilters.brands.length) params.set('brands', newFilters.brands.join(','));
    if (newFilters.priceRange[0] > 0) params.set('minPrice', newFilters.priceRange[0].toString());
    if (newFilters.priceRange[1] < 200) params.set('maxPrice', newFilters.priceRange[1].toString());
    if (newFilters.inStock !== null) params.set('inStock', newFilters.inStock.toString());
    if (newFilters.gender.length) params.set('gender', newFilters.gender.join(','));
    if (newSort !== 'default') params.set('sort', newSort);

    router.push(`/products?${params.toString()}`);
  };

  // Update handlers to also update URL
  const handleSearchChange = (query: string) => {
    const newFilters = { ...filters, searchQuery: query };
    setFilters(newFilters);
    updateUrlWithFilters(newFilters, sort);
  };

  const handleFilterChange = (filterType: keyof AppliedFilters, value: any) => {
    setFilters(prev => {
      const currentValues = prev[filterType];
      let newValues;

      if (Array.isArray(currentValues)) {
        if (filterType === 'gender') {
          newValues = value ? [value] : [];
        } else {
          if ((currentValues as any[]).includes(value)) {
            newValues = (currentValues as any[]).filter(v => v !== value);
          } else {
            newValues = [...currentValues, value];
          }
        }
      } else if (filterType === 'priceRange') {
        newValues = value as [number, number];
      } else if (filterType === 'inStock') {
        newValues = prev.inStock === value ? null : value;
      } else {
        newValues = value;
      }

      const newFilters = { ...prev, [filterType]: newValues };
      updateUrlWithFilters(newFilters, sort);
      return newFilters;
    });
  };

  const handlePriceChange = (newValue: number | number[]) => {
    const newFilters = { ...filters, priceRange: newValue as [number, number] };
    setFilters(newFilters);
    updateUrlWithFilters(newFilters, sort);
  };

  const handleStockChange = (stockStatus: boolean | null) => {
    const newFilters = { ...filters, inStock: stockStatus };
    setFilters(newFilters);
    updateUrlWithFilters(newFilters, sort);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const newSort = event.target.value as string;
    setSort(newSort);
    updateUrlWithFilters(filters, newSort);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setSort("default");
    router.push('/products');
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
          bgcolor: "var(--primary)",
        }}
      >
        <CircularProgress sx={{ color: "var(--secondary)" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        px: { xs: 0.5, sm: 5 },
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
              px: { xs: 2, sm: 0 }, // Add padding on mobile
            }}
          >
            <Typography
              sx={{ color: "var(--secondary)", fontSize: 20, fontWeight: 900 }}
            >
              PRODUCTS ({displayedShoes.length})
            </Typography>
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FormControl size="small">
                  <Select
                    value={sort}
                    onChange={handleSortChange}
                    size="small"
                    sx={{ 
                      minWidth: 120,
                      '& .MuiSelect-select': { 
                        py: 1,
                        fontSize: '0.875rem'
                      }
                    }}
                  >
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="date-desc">Newest</MenuItem>
                    <MenuItem value="price-asc">Price: Low to High</MenuItem>
                    <MenuItem value="price-desc">Price: High to Low</MenuItem>
                    <MenuItem value="name-asc">Name: A to Z</MenuItem>
                  </Select>
                </FormControl>
                <TuneIcon
                  sx={{ 
                    cursor: "pointer", 
                    color: "var(--secondary)",
                    fontSize: 28,
                    p: 0.5,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                  onClick={() => setOpenFilter(true)}
                />
              </Box>
            )}
          </Box>

          <SearchBar searchQuery={filters.searchQuery} onSearchChange={handleSearchChange} />

          {/* --- Sorting Dropdown (Desktop only) --- */}
          {!isMobile && (
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
          )}
          {/* ----------------------- */}

          {/* Product Grid */}
          <Box
            sx={{
              flex: 1,
              overflowY: isMobile ? "visible" : "auto",
              mt: 3,
              px: { xs: 0, sm: 0 },
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
                {paginatedShoes.map((item) => (
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
                {paginatedShoes.map((item) => (
                  <ShoesCard shoe={item} key={item.id} />
                ))}
              </Box>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 1,
                mt: 4,
                mb: 2
              }}>
                <IconButton
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  sx={{ 
                    color: 'var(--secondary)',
                    '&:disabled': {
                      color: 'grey.400'
                    }
                  }}
                >
                  ←
                </IconButton>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <IconButton
                    key={page}
                    onClick={() => handlePageChange(page)}
                    sx={{
                      bgcolor: currentPage === page ? 'var(--secondary)' : 'transparent',
                      color: currentPage === page ? 'white' : 'var(--secondary)',
                      '&:hover': {
                        bgcolor: currentPage === page ? 'var(--secondary-dark)' : 'rgba(0, 0, 0, 0.04)',
                      },
                      minWidth: '32px',
                      height: '32px',
                      fontSize: '0.875rem',
                      fontWeight: currentPage === page ? 'bold' : 'normal'
                    }}
                  >
                    {page}
                  </IconButton>
                ))}
                <IconButton
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  sx={{ 
                    color: 'var(--secondary)',
                    '&:disabled': {
                      color: 'grey.400'
                    }
                  }}
                >
                  →
                </IconButton>
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