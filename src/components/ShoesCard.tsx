import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

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
};

type ShoesCardProps = {
    shoe: Shoe;
};

const ShoesCard: React.FC<ShoesCardProps> = ({ shoe }) => {
    // Create URL-friendly versions of brand and name
    const brandSlug = shoe.brand.toLowerCase().replace(/\s+/g, '-');
    const nameSlug = shoe.name.toLowerCase().replace(/\s+/g, '-');

    return (
        <Link 
            href={`/products/${brandSlug}/${nameSlug}`} 
            sx={{
                width: {xs: "100%",md:"30%"},
                textDecoration: "none"
            }}
        >
            <Box sx={{width: "100%", minHeight: 220}} boxShadow={1} p={1} borderRadius={3}>
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: {xs: 150, md:300},
                    }}
                >
                    <Image
                        src={shoe.mainImage}
                        alt="Shoes Name Image"
                        width={200}
                        height={350}
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                        priority
                    />
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "GrayText", fontSize: 13, mt:1}}>
                        {shoe.category}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
                    <Typography 
                        sx={{ 
                            fontSize: {xs: 15, md: 17}, 
                            fontWeight: 700, 
                            color:"var(--secondary)", 
                        }}
                    >
                        {shoe.name}
                    </Typography>
                    <Typography 
                        sx={{ 
                            fontSize: 15, 
                            fontWeight: 500, 
                            color:"var(--secondary)",
                            ml: 1
                        }}
                    >
                        ${shoe.price}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default ShoesCard;