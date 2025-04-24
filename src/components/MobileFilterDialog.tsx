import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Box,
} from "@mui/material";

type MobileFilterDialogProps = {
  open: boolean;
  onClose: () => void;
  sort: string;
  setSort: (value: string) => void;
  filters: {
    category: boolean;
    size: boolean;
    color: boolean;
    brand: boolean;
  };
  setFilters: (filters: typeof filters) => void;
  onApply: () => void;
};

const MobileFilterDialog: React.FC<MobileFilterDialogProps> = React.memo(
  ({ open, onClose, sort, setSort, filters, setFilters, onApply }) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ ...filters, [e.target.name]: e.target.checked });
    };

    return (
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Filters & Sort</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <FormLabel component="legend">Sort By</FormLabel>
            <RadioGroup
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <FormControlLabel value="latest" control={<Radio />} label="Latest" />
              <FormControlLabel value="lowToHigh" control={<Radio />} label="Price: Low to High" />
              <FormControlLabel value="highToLow" control={<Radio />} label="Price: High to Low" />
            </RadioGroup>
          </Box>

          <Box>
            <FormLabel component="legend">More Filters</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={filters.category} onChange={handleFilterChange} name="category" />}
                label="Category"
              />
              <FormControlLabel
                control={<Checkbox checked={filters.size} onChange={handleFilterChange} name="size" />}
                label="Size"
              />
              <FormControlLabel
                control={<Checkbox checked={filters.color} onChange={handleFilterChange} name="color" />}
                label="Color"
              />
              <FormControlLabel
                control={<Checkbox checked={filters.brand} onChange={handleFilterChange} name="brand" />}
                label="Brand"
              />
            </FormGroup>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button
            variant="contained"
            onClick={() => {
              onApply();
              onClose();
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default MobileFilterDialog;
