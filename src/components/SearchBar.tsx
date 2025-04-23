import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      fullWidth
      
      sx={{
        mt: 5,
        backgroundColor: "#f2f2f2",
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
          height: 45,
          paddingRight: "0 !important",
          "& fieldset": {
            borderColor: "#ccc",
          },
          "&:hover fieldset": {
            borderColor: "#999",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: "2px",
          },
          "& input": {
            textAlign: "right", // placeholder + text on right
            padding: "0 10px",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#555" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
