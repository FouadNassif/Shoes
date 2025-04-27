"use client"
import NavBar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import NewCollections from "@/components/NewCollections";
import { Box, Typography } from "@mui/material";
import Break1 from "@/components/Break1";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import { staticShoes } from "@/data/staticShoes";
import PromoCode from "@/components/PromoCode";
import ItemSection from "@/components/ItemsSection";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Get the latest 4 shoes for "New This Week"
  const newThisWeek = staticShoes.slice(0, 4);
  
  // Get the next 4 shoes for "Latest Release"
  const latestRelease = staticShoes.slice(4, 8);

  return (
    <>
    <Box sx={{ px:{ xs: 1, sm:5} }}>
      <NavBar />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <NewCollections/>
      <Break1/>
      <ItemSection title="New This Week" items={newThisWeek} path="/products" />
      <PromoCode/>
      <ItemSection title="Latest Release" items={latestRelease} path="/products" />
      <Category/>
    </Box>
    <Footer/>
    </>
  );
}
