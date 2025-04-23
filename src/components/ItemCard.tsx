import { Box, Typography } from "@mui/material";
import Image from "next/image";

// Define the item type with expected fields
type ItemType = {
  name: string;
  imgSrc: string;
  colors: string[]; // Array of color hex strings
  category: string;
  price: number;
};

// Component that receives the item as a prop
export default function ItemCard({ item }: { item: ItemType }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* Image box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 350,
          border: "2px solid var(--secondary)", // Ensure the color is set in CSS
        }}
      >
        <Image
          src={item.imgSrc}
          alt={item.name} 
          width={400}
          height={350}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
        />
      </Box>

      <Box sx={{ marginTop: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "GrayText", fontSize: 14 }}>
            {item.category}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
            <Box
              sx={{
                width: 15,
                height: 15,
                border: "1px solid black",
                backgroundColor: "var(--accent)",
              }}
            ></Box>
            <Typography>+{item.colors.length}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 19, fontWeight: 700 }}>
            {item.name}
          </Typography>
          <Typography sx={{ fontSize: 19, fontWeight: 500 }}>
            ${item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
