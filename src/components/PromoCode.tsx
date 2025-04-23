"use client"
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

export default function PromoCode() {
    const theme = useTheme();

    return (
        <Box 
            sx={{ 
                background: "linear-gradient(to right, #3f2b96, #a8c0ff)", 
                borderRadius: 5, 
                p: { xs: 3, sm: 5 }, 
                mt: 10, 
                textAlign: "center", 
                color: "#fff",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
                mx: { xs: 2, sm: "auto" },
                maxWidth: "600px"
            }}
        >
            <Typography sx={{ fontWeight: 700, fontSize: { xs: 24, sm: 32 }, mb: 1 }}>
                Got a Promo Code?
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: { xs: 16, sm: 18 }, mb: 4 }}>
                Enter your code to unlock exclusive discounts on your kicks!
            </Typography>
            <Box 
                sx={{ 
                    display: "flex", 
                    flexDirection: { xs: "column", sm: "row" }, 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: 2 
                }}
            >
                <TextField 
                    placeholder="Enter promo code"
                    variant="outlined"
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: 2,
                        input: { color: "#000" },
                        width: { xs: "100%", sm: "300px" }
                    }}
                />
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: "#1e1e2f", 
                        color: "#fff", 
                        px: 4, 
                        py: 1.5,
                        borderRadius: 2,
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": { backgroundColor: "#151521" }
                    }}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
}
