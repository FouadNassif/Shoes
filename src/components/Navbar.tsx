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
  useScrollTrigger,
  Collapse,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import FavoritesBadge from "./FavoritesBadge";
import CartBadge from "./CartBadge";
import { useRouter } from "next/navigation";
import {categories as allCategories, brands as allBrands, genders as allGenders } from "@/data/Shoes";

const menuItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'All Products', path: '/products', icon: <StorefrontIcon /> },
  { name: 'Shop Shoes', path: '/products', icon: <StorefrontIcon />, hasFilters: true },
  { name: 'About', path: '/about', icon: <InfoIcon /> },
  { name: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
];

const filterCategories = [
  { name: 'Gender', icon: <StorefrontIcon /> },
  { name: 'Brand', icon: <StorefrontIcon /> },
  { name: 'Category', icon: <StorefrontIcon /> },
];

const filterOptions = {
  Gender: allGenders,
  brands: allBrands,
  Category: allCategories
};

type NavigationLevel = 'main' | 'filters' | 'options';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navLevel, setNavLevel] = useState<NavigationLevel>('main');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
    if (!open) {
      setNavLevel('main');
      setSelectedCategory(null);
    }
  };

  const handleFilterCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setNavLevel('options');
  };

  const handleFilterOptionClick = (category: string, value: string) => {
    const path = `/products?${category.toLowerCase()}=${encodeURIComponent(value)}`;
    router.push(path);
    setDrawerOpen(false);
    setNavLevel('main');
    setSelectedCategory(null);
  };

  const handleBackClick = () => {
    if (navLevel === 'options') {
      setNavLevel('filters');
      setSelectedCategory(null);
    } else if (navLevel === 'filters') {
      setNavLevel('main');
    }
  };

  const renderNavigationContent = () => {
    switch (navLevel) {
      case 'main':
        return (
          <List sx={{ flexGrow: 1 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.name}
                component={item.hasFilters ? 'div' : Link}
                href={item.hasFilters ? undefined : item.path}
                onClick={item.hasFilters ? () => setNavLevel('filters') : undefined}
                sx={{
                  color: 'var(--secondary)',
                  '&:hover': {
                    bgcolor: 'var(--accent)',
                    color: 'black',
                  },
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {item.icon}
                    <ListItemText primary={item.name} />
                  </Box>
                  {item.hasFilters && <ChevronRightIcon />}
                </Box>
              </ListItem>
            ))}
          </List>
        );

      case 'filters':
        return (
          <List sx={{ flexGrow: 1 }}>
            <ListItem
              onClick={handleBackClick}
              sx={{
                color: 'var(--secondary)',
                '&:hover': {
                  bgcolor: 'var(--accent)',
                  color: 'black',
                },
                cursor: 'pointer',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ArrowBackIcon />
                <ListItemText primary="Back" />
              </Box>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            {filterCategories.map((category) => (
              <ListItem
                key={category.name}
                onClick={() => handleFilterCategoryClick(category.name)}
                sx={{
                  color: 'var(--secondary)',
                  '&:hover': {
                    bgcolor: 'var(--accent)',
                    color: 'black',
                  },
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {category.icon}
                    <ListItemText primary={category.name} />
                  </Box>
                  <ExpandMore />
                </Box>
              </ListItem>
            ))}
          </List>
        );

      case 'options':
        return (
          <List sx={{ flexGrow: 1 }}>
            <ListItem
              onClick={handleBackClick}
              sx={{
                color: 'var(--secondary)',
                '&:hover': {
                  bgcolor: 'var(--accent)',
                  color: 'black',
                },
                cursor: 'pointer',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ArrowBackIcon />
                <ListItemText primary="Back" />
              </Box>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <Typography sx={{ px: 2, py: 1, color: 'var(--secondary)', fontWeight: 600 }}>
              {selectedCategory}
            </Typography>
            <Stack spacing={1} sx={{ px: 2 }}>
              {selectedCategory && (
                selectedCategory === 'Gender' ? allGenders.map((gender) => (
                  <Button
                    key={gender}
                    onClick={() => handleFilterOptionClick('gender', gender)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'var(--secondary)',
                      border: '1px solid var(--accent)',
                      '&:hover': {
                        bgcolor: 'var(--accent)',
                        color: 'black',
                      },
                    }}
                  >
                    {gender}
                  </Button>
                )) : selectedCategory === 'Brand' ? allBrands.map((brand) => (
                  <Button
                    key={brand}
                    onClick={() => handleFilterOptionClick('brands', brand)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'var(--secondary)',
                      border: '1px solid var(--accent)',
                      '&:hover': {
                        bgcolor: 'var(--accent)',
                        color: 'black',
                      },
                    }}
                  >
                    {brand}
                  </Button>
                )) : selectedCategory === 'Category' ? allCategories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => handleFilterOptionClick('category', category)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'var(--secondary)',
                      border: '1px solid var(--accent)',
                      '&:hover': {
                        bgcolor: 'var(--accent)',
                        color: 'black',
                      },
                    }}
                  >
                    {category}
                  </Button>
                )) : null
              )}
            </Stack>
          </List>
        );
    }
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
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          SHOESLB
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: 'var(--accent)' }} />
      {renderNavigationContent()}
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
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={0}
      sx={{
        backdropFilter: trigger ? 'blur(8px)' : 'none',
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        transition: 'all 0.3s ease-in-out',
      }}
    >
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
            <CartBadge/>
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