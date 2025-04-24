"use client"
import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, Slider, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { sizes, colors, categories, brands } from "@/data/Shoes";

export default function FilterSidebar() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: 250, pr: 3 }}>
      {/* Size Filter */}
      <Accordion expanded={expanded === "size"} onChange={handleChange("size")}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1" fontWeight={600}>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup row sx={{ gap: 1, mb: 2 }}>
            {sizes.map((size) => (
              <FormControlLabel
                key={size}
                control={<Checkbox size="small" />}
                label={size}
                sx={{ m: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Availability Filter */}
      <Accordion expanded={expanded === "availability"} onChange={handleChange("availability")}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1" fontWeight={600}>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ mb: 2 }}>
            <FormControlLabel control={<Checkbox />} label="In Stock" />
            <FormControlLabel control={<Checkbox />} label="Out of Stock" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Category Filter */}
      <Accordion expanded={expanded === "category"} onChange={handleChange("category")}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1" fontWeight={600}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ mb: 2 }}>
            {categories.map((cat) => (
              <FormControlLabel key={cat} control={<Checkbox />} label={cat} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Colors Filter */}
      <Accordion expanded={expanded === "color"} onChange={handleChange("color")}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1" fontWeight={600}>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ mb: 2 }}>
            {colors.map((color) => (
              <FormControlLabel key={color} control={<Checkbox />} label={color} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Brand Filter */}
      <Accordion expanded={expanded === "brand"} onChange={handleChange("brand")}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1" fontWeight={600}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {brands.map((brand) => (
              <FormControlLabel key={brand} control={<Checkbox />} label={brand} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Price Range Filter */}
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Price Range
      </Typography>
      <Slider
        value={[20, 150]}
        valueLabelDisplay="auto"
        min={0}
        max={200}
        sx={{ width: "90%", mb: 2 }}
      />

      
    </Box>
  );
}
