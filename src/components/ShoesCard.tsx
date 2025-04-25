"use client";

import { Box, IconButton, Link, Typography, Chip } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavorites, removeFromFavorites, isFavorite } from '@/utils/favorites';
import { useNotification } from '@/context/NotificationContext';

export type Shoe = {
    id: string;
    name: string;
    description: string;
    price: number;
    sizes: number[];
    colors: string[];
    mainImage: string;
    brand: string;
    category: string;
    inStock: boolean;
    rating: number;
    reviews: number;
    tags: string[];
    material: string;
    gender: string;
    date: string;
    isOnSale: boolean;
    originalPrice: number;
};

type ShoesCardProps = {
    shoe: Shoe;
};

const ShoesCard: React.FC<ShoesCardProps> = ({ shoe }) => {
    const [isFav, setIsFav] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const { showNotification } = useNotification();
    const brandSlug = shoe.brand.toLowerCase().replace(/\s+/g, '-');
    const nameSlug = shoe.name.toLowerCase().replace(/\s+/g, '-');

    useEffect(() => {
        setIsFav(isFavorite(shoe.id));
    }, [shoe.id]);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAnimating(true);
        if (isFav) {
            removeFromFavorites(shoe.id);
            setIsFav(false);
            showNotification(`${shoe.name} removed from favorites`);
        } else {
            addToFavorites(shoe.id);
            setIsFav(true);
            showNotification(`${shoe.name} added to favorites!`);
        }
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <Link
            href={`/products/${brandSlug}/${nameSlug}`}
            sx={{
                width: { xs: "95%", md: "30%" },
                textDecoration: "none",
                display: 'block'
            }}
        >
            <Box sx={{ width: "100%", minHeight: 220, position: 'relative' }} boxShadow={0} p={0} borderRadius={3}>
                <IconButton
                    onClick={handleFavoriteClick}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        color: isFav ? "red" : "var(--secondary)",
                        transition: "all 0.3s ease",
                        transform: isAnimating ? "scale(1.2)" : "scale(1)",
                        padding: '4px',
                        '&:hover': {
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            transform: isAnimating ? "scale(1.2)" : "scale(1.1)"
                        }
                    }}
                >
                    {isFav ? <FavoriteIcon fontSize="small"/> : <FavoriteBorderIcon fontSize="small"/>}
                </IconButton>
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 150, md: 300 },
                    }}
                >
                    <Image
                        src={shoe.mainImage}
                        alt="Shoes Name Image"
                        width={200}
                        height={350}
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                        priority
                    />
                </Box>

                <Box sx={{ marginTop: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ color: "GrayText", fontSize: {xs: 13, md: 14} }}>
                            {shoe.category}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
                            <Box
                                sx={{
                                    width: {xs: 10, md: 15},
                                    height: {xs: 10, md: 15},
                                    border: "1px solid black",
                                    backgroundColor: "var(--accent)",
                                }}
                            ></Box>
                            <Typography sx={{ fontSize: {xs: 13, md: 14} }}>+{shoe.colors.length}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ fontSize: {xs: 13.5, md:15}, fontWeight: 600, color: 'black' }}>
                            {shoe.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {shoe.isOnSale && (
                                <Typography sx={{ fontSize: 15, color: 'gray', textDecoration: 'line-through' }}>
                                    ${shoe.originalPrice}
                                </Typography>
                            )}
                            <Typography sx={{ fontSize: 15, fontWeight: 500, color: shoe.isOnSale ? '#ff4081' : 'black' }}>
                                ${shoe.price}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {shoe.isOnSale && (
                    <Chip
                        label="SALE"
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            backgroundColor: '#ff4081',
                            color: 'white',
                            fontWeight: 'bold',
                            zIndex: 2,
                        }}
                    />
                )}
            </Box>
        </Link>
    );
};

export default ShoesCard;