"use client"
import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, Slider, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { sizes as allSizes, colors as allColors, categories as allCategories, brands as allBrands } from "@/data/Shoes";

// Define props type matching the state in ProductsClient
interface FilterSidebarProps {
    filters: {
        categories: string[];
        sizes: number[];
        colors: string[];
        brands: string[];
        priceRange: [number, number];
        inStock: boolean | null;
    };
    onFilterChange: (filterType: keyof FilterSidebarProps['filters'], value: any) => void;
    onPriceChange: (newValue: number | number[]) => void;
    onStockChange: (stockStatus: boolean | null) => void;
    onClearFilters: () => void;
}

export default function FilterSidebar({ filters, onFilterChange, onPriceChange, onStockChange, onClearFilters }: FilterSidebarProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [currentPriceRange, setCurrentPriceRange] = useState<[number, number]>(filters.priceRange);

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Handler for checkbox changes (categories, brands, sizes, colors)
  const handleCheckboxChange = (filterType: keyof FilterSidebarProps['filters'], value: string | number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilterChange(filterType, value);
  };

  // Handlers for stock checkboxes
  const handleStockCheckboxChange = (status: boolean | null) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onStockChange(status);
  };

  // Handler for Slider commit (when user stops dragging)
   const handlePriceCommitted = (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => {
       onPriceChange(newValue as [number, number]);
   };

   // Handler for Slider value change (while dragging, update local state)
   const handlePriceSliderChange = (event: Event, newValue: number | number[]) => {
       setCurrentPriceRange(newValue as [number, number]);
   };


  return (
    <Box sx={{ width: '100%', pr: 0 }}> {/* Use full width of parent, remove padding right */}
      {/* Add Clear Button at the top */}
      <Button 
          variant="outlined"
          size="small" 
          onClick={onClearFilters} 
          sx={{ mb: 2, width: '100%' }}
      >
          Clear All Filters
      </Button>

      {/* Size Filter */}
      <Accordion expanded={expanded === "size"} onChange={handleAccordionChange("size")}>
        <AccordionSummary expandIcon={<ExpandMore />}><Typography variant="subtitle1" fontWeight={600}>Size</Typography></AccordionSummary>
        <AccordionDetails sx={{ p: 1 }}> {/* Adjust padding */}
          <FormGroup row sx={{ gap: 0.5, mb: 1, flexWrap: 'wrap' }}> {/* Allow wrapping */}
            {allSizes.map((size) => (
              <FormControlLabel
                key={`size-${size}`}
                control={<Checkbox 
                    size="small" 
                    checked={filters.sizes.includes(size)} 
                    onChange={handleCheckboxChange('sizes', size)} 
                />}
                label={size.toString()} // Ensure label is string
                sx={{ m: 0, mr: 0.5 }} // Adjust margin
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Availability Filter */}
      <Accordion expanded={expanded === "availability"} onChange={handleAccordionChange("availability")}>
        <AccordionSummary expandIcon={<ExpandMore />}><Typography variant="subtitle1" fontWeight={600}>Availability</Typography></AccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <FormGroup sx={{ mb: 1 }}>
            {/* Pass true for In Stock, false for Out of Stock */}
            <FormControlLabel 
                control={<Checkbox checked={filters.inStock === true} onChange={handleStockCheckboxChange(true)} />} 
                label="In Stock" 
            />
            <FormControlLabel 
                control={<Checkbox checked={filters.inStock === false} onChange={handleStockCheckboxChange(false)} />} 
                label="Out of Stock" 
            />
             {/* Add an 'Any' option maybe? Or handle unchecking both */}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Category Filter */}
      <Accordion expanded={expanded === "category"} onChange={handleAccordionChange("category")}>
        <AccordionSummary expandIcon={<ExpandMore />}><Typography variant="subtitle1" fontWeight={600}>Category</Typography></AccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <FormGroup sx={{ mb: 1 }}>
            {allCategories.map((cat) => (
              <FormControlLabel 
                key={`cat-${cat}`}
                control={<Checkbox checked={filters.categories.includes(cat)} onChange={handleCheckboxChange('categories', cat)} />} 
                label={cat} 
             />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Colors Filter */}
      <Accordion expanded={expanded === "color"} onChange={handleAccordionChange("color")}>
        <AccordionSummary expandIcon={<ExpandMore />}><Typography variant="subtitle1" fontWeight={600}>Colors</Typography></AccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <FormGroup sx={{ mb: 1 }}>
            {allColors.map((color) => (
              <FormControlLabel 
                key={`color-${color}`}
                control={<Checkbox checked={filters.colors.includes(color)} onChange={handleCheckboxChange('colors', color)} />} 
                label={color} 
             />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Brand Filter */}
      <Accordion expanded={expanded === "brand"} onChange={handleAccordionChange("brand")}>
        <AccordionSummary expandIcon={<ExpandMore />}><Typography variant="subtitle1" fontWeight={600}>Brand</Typography></AccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <FormGroup sx={{ mb: 1 }}>
            {allBrands.map((brand) => (
              <FormControlLabel 
                key={`brand-${brand}`}
                control={<Checkbox checked={filters.brands.includes(brand)} onChange={handleCheckboxChange('brands', brand)} />} 
                label={brand} 
             />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Price Range Filter */}
      <Accordion expanded={expanded === "price"} onChange={handleAccordionChange("price")}>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" fontWeight={600}>Price Range</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 1 }}>
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">${currentPriceRange[0]}</Typography>
                    <Typography variant="body2">${currentPriceRange[1]}</Typography>
                 </Box>
                <Slider
                    value={currentPriceRange} // Controlled by local state for smooth dragging
                    onChange={handlePriceSliderChange} // Update local state while dragging
                    onChangeCommitted={handlePriceCommitted} // Update global state on release
                    valueLabelDisplay="auto"
                    min={0}
                    max={200} // Adjust max based on your product prices
                    sx={{ width: "100%", mb: 1 }}
                    disableSwap // Prevent handles from crossing
                />
            </AccordionDetails>
        </Accordion>
      
    </Box>
  );
}
