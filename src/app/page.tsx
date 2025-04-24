import NavBar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import NewCollections from "@/components/NewCollections";
import { Box, Typography } from "@mui/material";
import NewThisWeek from "@/components/NewThisWeek";
import Break1 from "@/components/Break1";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import LatestRealse from "@/components/LatestRealese";
import PromoCode from "@/components/PromoCode";

export default function Home() {
  return (
    <>
    <Box sx={{ px:{ xs: 1, sm:5} }}>
      <NavBar />
      <SearchBar />
      <NewCollections/>
      <Break1/>
      <NewThisWeek/>
      <PromoCode/>
      <LatestRealse/>
      <Category/>
    </Box>
    <Footer/>
    </>
  );
}
