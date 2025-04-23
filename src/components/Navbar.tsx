"use client"

import { Box, Button, IconButton, Link, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState, ReactNode } from "react";

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                width: "100%", 
                mt: 1, 
                px: {xs: 0, sm :2}
            }}
        >
            {/* Left side (menu + links for larger screens) */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* Mobile menu icon */}
                <IconButton 
                    onClick={toggleDrawer(true)} 
                    sx={{ display: { xs: "block", md: "none" }, color: "var(--secondary)" }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Full links for larger screens */}
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2 }}>
                    <Links linkName="Home" />
                    <Links linkName="Collections" />
                    <Links linkName="New" />
                </Box>
            </Box>

            {/* Center logo/icon */}
            <Box sx={{ mt: 1 }}>
                <StorefrontIcon sx={{ color: "var(--secondary)" }} />
            </Box>

            {/* Right side icons */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Buttons><FavoriteIcon /></Buttons>
                <Buttons><ShoppingBagIcon /></Buttons>
                <Buttons><PersonIcon /></Buttons>
            </Box>

            {/* Drawer for mobile navigation */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
    <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            {["Home", "Collections", "New"].map((text) => (
                <ListItem key={text} component="a" href={`#${text.toLowerCase()}`} sx={{ textDecoration: "none" }}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </Box>
</Drawer>


        </Box>
    );
}

function Links({ linkName }: { linkName: string }) {
    return (
        <Link 
            sx={{ 
                textDecoration: "none", 
                mx: 2, 
                color: "var(--secondary)", 
                fontSize: 16,
                "&:hover": { textDecoration: "underline" }
            }}
        >
            {linkName}
        </Link>
    );
}

function Buttons({ children }: { children: ReactNode }) {
    return (
        <IconButton 
            sx={{ 
                backgroundColor: "var(--secondary)", 
                color: "var(--primary)", 
                borderRadius: "50%", 
                mx: 1,
                "&:hover": {
                    backgroundColor: "var(--secondary-dark, #555)",
                }
            }}
        >
            {children}
        </IconButton>
    );
}
