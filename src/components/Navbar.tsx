"use client";

import {
  Box,
  Button,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useState, ReactNode } from "react";
import FavoritesBadge from "./FavoritesBadge";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "var(--secondary)",
              fontWeight: 700,
            }}
            className="titleFont"
          >
            SHOESLB
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FavoritesBadge />
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
                  badgeContent={0} 
                  color="error"
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
            <Button
              component={Link}
              href="/products"
              sx={{
                color: "var(--secondary)",
                "&:hover": {
                  backgroundColor: "var(--accent)",
                  color: "var(--secondary)",
                },
              }}
            >
              Shop
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

