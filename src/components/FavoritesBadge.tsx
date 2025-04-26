import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { getFavoritesCount } from "@/utils/favorites";
import Link from "next/link";

const FAVORITES_CHANGED_EVENT = 'favoritesChanged';

export default function FavoritesBadge() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Initial count
        setCount(getFavoritesCount());

        // Update count when favorites change
        const handleFavoritesChange = () => {
            setCount(getFavoritesCount());
        };

        // Listen for both storage and custom events
        window.addEventListener('storage', handleFavoritesChange);
        window.addEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChange);

        return () => {
            window.removeEventListener('storage', handleFavoritesChange);
            window.removeEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChange);
        };
    }, []);

    return (
        <Link href="/favorites" style={{ textDecoration: 'none' }}>
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
                    badgeContent={count} 
                    color="error"
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: "var(--accent)",
                            color: "var(--secondary)",
                            fontWeight: "bold"
                        }
                    }}
                >
                    <FavoriteIcon />
                </Badge>
            </IconButton>
        </Link>
    );
} 