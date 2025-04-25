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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";
import FavoritesBadge from "./FavoritesBadge";

const menuItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'All Products', path: '/products', icon: <StorefrontIcon /> },
  { name: 'About', path: '/about', icon: <InfoIcon /> },
  { name: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: 'var(--primary)',
        height: '100%',
        color: 'var(--secondary)',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          SHOESLB
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: 'var(--accent)' }} />
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            href={item.path}
            sx={{
              color: 'var(--secondary)',
              '&:hover': {
                bgcolor: 'var(--accent)',
                color: 'black',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {item.icon}
              <ListItemText primary={item.name} />
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: 'var(--accent)' }} />
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'var(--secondary)', opacity: 0.7 }}>
          © 2024 SHOESLB
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--secondary)', opacity: 0.7, mt: 1 }}>
          Your Style, Your Way
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ 
              mr: 2, 
              display: { md: "none" },
              color: "var(--secondary)",
              '&:hover': {
                bgcolor: 'var(--accent)',
                color: 'black',
              }
            }}
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

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.path}
                startIcon={item.icon}
                sx={{
                  color: "var(--secondary)",
                  "&:hover": {
                    backgroundColor: "var(--accent)",
                    color: "black",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FavoritesBadge />
            <Link href="/cart" style={{ textDecoration: 'none' }}>
              <IconButton 
                sx={{ 
                  color: "var(--secondary)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    bgcolor: 'var(--accent)',
                    color: 'black',
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
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'var(--primary)',
            borderRight: '1px solid var(--accent)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}