"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Paper, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from "@mui/material";
import { staticShoes } from "@/data/staticShoes";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define props
interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<typeof staticShoes>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle clicks outside the search component
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update suggestions when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const matches = staticShoes.filter(shoe => 
        shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shoe.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (shoe: typeof staticShoes[0]) => {
    const brandPath = shoe.brand.toLowerCase().replace(/\s+/g, "-");
    const productPath = shoe.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/products/${brandPath}/${productPath}`);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }} ref={searchRef}>
      <TextField
        placeholder="Search..."
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
        onKeyPress={handleKeyPress}
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
      
      {showSuggestions && suggestions.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            mt: 1,
            zIndex: 1000,
            maxHeight: 300,
            overflow: "auto",
          }}
        >
          <List>
            {suggestions.map((shoe) => (
              <ListItem
                key={shoe.id}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "var(--accent)",
                  },
                }}
                onClick={() => handleSuggestionClick(shoe)}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 1,
                      bgcolor: "transparent",
                    }}
                  >
                    <Image
                      src={shoe.mainImage}
                      alt={shoe.name}
                      width={50}
                      height={50}
                      style={{
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={shoe.name}
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {shoe.brand} - ${shoe.price}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}
