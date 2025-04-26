import NavBar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import NewCollections from "@/components/NewCollections";
import { Box, Typography } from "@mui/material";
import Break1 from "@/components/Break1";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import { LatestRealeseData } from "@/data/LatestRealeseData";
import PromoCode from "@/components/PromoCode";
import { NewThisWeekData } from "@/data/NewThisWeekData";
import ItemSection from "@/components/ItemsSection";

export default function Home() {
  return (
    <>
    <Box sx={{ px:{ xs: 1, sm:5} }}>
      <NavBar />
      <SearchBar />
      <NewCollections/>
      <Break1/>
      <ItemSection title="New This Week" items={NewThisWeekData}/>
      <PromoCode/>
      <ItemSection title="Latest Realese" items={LatestRealeseData}/>
      <Category/>
    </Box>
    <Footer/>
    </>
  );
}
