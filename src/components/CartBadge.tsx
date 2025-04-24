"use client";

import { Badge, IconButton } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartBadge() {
    const { cartCount } = useCart();
    const [displayCount, setDisplayCount] = useState(cartCount);

    useEffect(() => {
        setDisplayCount(cartCount);
    }, [cartCount]);

    return (
        <Link href="/cart" style={{ textDecoration: 'none' }}>
            <IconButton 
                sx={{ 
                    color: "var(--secondary)",
                    transition: "transform 0.2s",
                    "&:hover": {
                        transform: "scale(1.1)"
                    }
                }}
            >
                <Badge 
                    badgeContent={displayCount}
                    color="error"
                    showZero
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: "var(--accent)",
                            color: "var(--secondary)",
                            fontWeight: "bold"
                        }
                    }}
                >
                    <ShoppingBagIcon />
                </Badge>
            </IconButton>
        </Link>
    );
} 