"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

// Define props
interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", mt: 2 }}>
      <TextField
        placeholder="Search..."
        variant="outlined"
        fullWidth
        value={searchQuery} // Controlled input
        onChange={(e) => onSearchChange(e.target.value)} // Call handler on change
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1, color: "grey.500" }} />,
          sx: {
            height: 40,
            borderRadius: 1,
            bgcolor: "grey.100",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid var(--secondary)",
            },
          },
        }}
        sx={{
          "& .MuiInputBase-input::placeholder": {
            color: "grey.500",
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
