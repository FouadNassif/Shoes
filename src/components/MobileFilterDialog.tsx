"use client";
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Checkbox, FormControlLabel, FormGroup, Typography, Slider, Select, MenuItem, FormControl, InputLabel, Divider, Accordion, AccordionSummary, AccordionDetails, SelectChangeEvent } from "@mui/material";
import { sizes as allSizes, colors as allColors, categories as allCategories, brands as allBrands } from "@/data/Shoes";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

// Define props type matching the state in ProductsClient
interface AppliedFilters {
    searchQuery: string; // May not be needed here, but include for consistency
    categories: string[];
    sizes: number[];
    colors: string[];
    brands: string[];
    priceRange: [number, number];
    inStock: boolean | null;
}

interface MobileFilterDialogProps {
    open: boolean;
    onClose: () => void;
    initialSort: string;
    initialFilters: AppliedFilters;
    onApply: (finalFilters: AppliedFilters, finalSort: string) => void; 
    onClearFilters: () => void; 
}

// Initial filter state constant (same as in ProductsClient, maybe move to a shared file?)
const initialFilters: AppliedFilters = {
    searchQuery: "",
    categories: [],
    sizes: [],
    colors: [],
    brands: [],
    priceRange: [0, 200],
    inStock: null,
};

export default function MobileFilterDialog({
    open,
    onClose,
    initialSort,
    initialFilters,
    onApply,
    onClearFilters
}: MobileFilterDialogProps) {

    // --- Local State for Draft Filters/Sort ---
    const [localSort, setLocalSort] = useState(initialSort);
    const [localFilters, setLocalFilters] = useState(initialFilters);
    const [expanded, setExpanded] = useState<string | false>(false);
    // -----------------------------------------

    // --- Sync local state with props when dialog opens or props change ---
    useEffect(() => {
        if (open) {
            setLocalSort(initialSort);
            setLocalFilters(initialFilters);
        }
    }, [open, initialSort, initialFilters]);
    // ------------------------------------------------------------------

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    // --- Handlers now update LOCAL state --- 
    const handleLocalSortChange = (event: SelectChangeEvent<string>) => {
        setLocalSort(event.target.value as string);
    };

    const handleLocalCheckboxChange = (filterType: keyof Omit<AppliedFilters, 'searchQuery' | 'priceRange' | 'inStock'>, value: string | number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalFilters(prev => {
            const currentValues = prev[filterType] as (string | number)[]; // Type assertion
            let newValues;
            if (currentValues.includes(value)) {
                newValues = currentValues.filter(v => v !== value);
            } else {
                newValues = [...currentValues, value];
            }
            return { ...prev, [filterType]: newValues };
        });
    };

    const handleLocalStockChange = (status: boolean | null) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalFilters(prev => ({
         ...prev, 
         inStock: prev.inStock === status ? null : status // Toggle: select->status, select again->null
      }));
    };

    const handleLocalPriceChange = (newValue: number | number[]) => {
       setLocalFilters(prev => ({ ...prev, priceRange: newValue as [number, number] }));
    };
    // ----------------------------------------

    // --- Apply/Clear Button Handlers ---
    const handleApplyAndClose = () => {
        onApply(localFilters, localSort); // Pass final local state to parent
        // onClose(); // Parent now handles closing in its onApply logic
    };

    const handleClearAndClose = () => {
        // Reset local state immediately for visual feedback
        setLocalFilters(initialFilters); 
        setLocalSort("default");
        onClearFilters(); // Tell parent to clear its state too
        // onClose(); // Let user decide to Apply/Cancel after clearing
    };
    // -----------------------------------

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs" PaperProps={{ sx: { height: '90vh' } }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{fontWeight: 700, fontSize: 20}}>Filters</Typography>
                <Button 
                    startIcon={<ClearIcon />}
                    onClick={handleClearAndClose}
                    color="secondary"
                    size="small"
                    sx={{ 
                        textTransform: 'none',
                        '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.04)'
                        }
                    }}
                >
                    Clear All
                </Button>
            </DialogTitle>
            <DialogContent dividers sx={{ p: 1 }}>
                {/* --- Filters --- */}
                <Accordion expanded={expanded === 'category'} onChange={handleAccordionChange('category')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 1 }}>
                        <FormGroup>
                            {allCategories.map((cat) => (
                                <FormControlLabel key={`cat-mob-${cat}`} control={<Checkbox size="small" checked={localFilters.categories.includes(cat)} onChange={handleLocalCheckboxChange('categories', cat)} />} label={cat} sx={{ m: 0 }}/>
                            ))}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'brand'} onChange={handleAccordionChange('brand')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Brand</Typography>
                    </AccordionSummary>
                     <AccordionDetails sx={{ p: 1 }}>
                        <FormGroup>
                            {allBrands.map((brand) => (
                                <FormControlLabel key={`brand-mob-${brand}`} control={<Checkbox size="small" checked={localFilters.brands.includes(brand)} onChange={handleLocalCheckboxChange('brands', brand)} />} label={brand} sx={{ m: 0 }}/>
                            ))}
                        </FormGroup>
                     </AccordionDetails>
                 </Accordion>

                <Accordion expanded={expanded === 'size'} onChange={handleAccordionChange('size')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Size</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 1 }}>
                        <FormGroup row sx={{ gap: 0.5, flexWrap: 'wrap' }}>
                            {allSizes.map((size) => (
                                <FormControlLabel key={`size-mob-${size}`} control={<Checkbox size="small" checked={localFilters.sizes.includes(size)} onChange={handleLocalCheckboxChange('sizes', size)} />} label={size.toString()} sx={{ m: 0, mr: 0.5 }}/>
                            ))}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>

                 <Accordion expanded={expanded === 'color'} onChange={handleAccordionChange('color')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Color</Typography>
                    </AccordionSummary>
                     <AccordionDetails sx={{ p: 1 }}>
                        <FormGroup>
                            {allColors.map((color) => (
                                <FormControlLabel key={`color-mob-${color}`} control={<Checkbox size="small" checked={localFilters.colors.includes(color)} onChange={handleLocalCheckboxChange('colors', color)} />} label={color} sx={{ m: 0 }}/>
                            ))}
                        </FormGroup>
                     </AccordionDetails>
                 </Accordion>

                <Accordion expanded={expanded === 'availability'} onChange={handleAccordionChange('availability')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Availability</Typography>
                    </AccordionSummary>
                     <AccordionDetails sx={{ p: 1 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox size="small" checked={localFilters.inStock === true} onChange={handleLocalStockChange(true)} />} label="In Stock" sx={{ m: 0 }}/>
                            <FormControlLabel control={<Checkbox size="small" checked={localFilters.inStock === false} onChange={handleLocalStockChange(false)} />} label="Out of Stock" sx={{ m: 0 }}/>
                        </FormGroup>
                     </AccordionDetails>
                </Accordion>
                
                <Accordion expanded={expanded === 'price'} onChange={handleAccordionChange('price')} disableGutters elevation={0} square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48, '&.Mui-expanded': { minHeight: 48 } }}>
                        <Typography variant="subtitle1" fontWeight={600}>Price Range</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0 }}>
                            <Typography variant="body2">${localFilters.priceRange[0]}</Typography>
                            <Typography variant="body2">${localFilters.priceRange[1]}</Typography>
                        </Box>
                        <Slider
                            value={localFilters.priceRange}
                            onChange={(e, val) => handleLocalPriceChange(val)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={200}
                            sx={{ width: "100%", mb: 1, mt: 1 }}
                            disableSwap
                        />
                     </AccordionDetails>
                 </Accordion>

            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-end', gap: 1 }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button 
                    onClick={handleApplyAndClose} 
                    variant="contained"
                    sx={{ 
                        bgcolor: 'var(--secondary)',
                        '&:hover': {
                            bgcolor: 'var(--secondary-dark)'
                        }
                    }}
                >
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
}
