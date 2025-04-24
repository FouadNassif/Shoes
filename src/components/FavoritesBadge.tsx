import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { getFavoritesCount } from "@/utils/favorites";
import Link from "next/link";

export default function FavoritesBadge() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(getFavoritesCount());
        // Update count when storage changes
        const handleStorageChange = () => {
            setCount(getFavoritesCount());
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
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