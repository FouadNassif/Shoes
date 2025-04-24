"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getFavorites } from "@/utils/favorites";
import { shoes } from "@/data/staticShoes";
import ShoesCard from "@/components/ShoesCard";
import Navbar from "@/components/Navbar";

export default function FavoritesPage() {
    const [favoriteShoes, setFavoriteShoes] = useState(shoes.filter(shoe => getFavorites().includes(shoe.id)));

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            <Navbar />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper 
                    elevation={0} 
                    sx={{ 
                        p: { xs: 2, md: 4 }, 
                        mb: 4, 
                        borderRadius: 2,
                        bgcolor: "background.paper"
                    }}
                >
                    <Typography variant="h2" sx={{ 
                        mb: 2,
                        fontSize: { xs: "1.5rem", md: "2.5rem" }
                    }} className="titleFont">
                        My Favorites
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        {favoriteShoes.length} items in your favorites
                    </Typography>
                </Paper>

                {favoriteShoes.length === 0 ? (
                    <Paper 
                        elevation={0} 
                        sx={{ 
                            p: { xs: 2, md: 4 }, 
                            textAlign: "center",
                            borderRadius: 2,
                            bgcolor: "background.paper"
                        }}
                    >
                        <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
                            No favorite items yet
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Start adding some items to your favorites!
                        </Typography>
                    </Paper>
                ) : (
                    <Grid 
                        container 
                        spacing={{ xs: 2, md: 3 }}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)"
                            },
                            gap: { xs: 2, md: 3 }
                        }}
                    >
                        {favoriteShoes.map((shoe) => (
                            <Box key={shoe.id} sx={{ width: "100%" }}>
                                <ShoesCard shoe={shoe} />
                            </Box>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
} 