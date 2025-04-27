"use client"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Category() {
  const router = useRouter();

  const handleCategoryClick = (gender: string) => {
    router.push(`/products?gender=${gender.toLowerCase()}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        my: 10,
        justifyContent: "center",
      }}
    >
      {[
        { label: "For Him", src: "/assets/img/ForHim.jpg", gender: "Men" },
        { label: "For Her", src: "/assets/img/ForHer.jpg", gender: "Women" },
      ].map((item, index) => (
        <Box
          key={index}
          onClick={() => handleCategoryClick(item.gender)}
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "45%", md: "30%" },
            height: 400,
            border: "2px solid var(--secondary)",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover img": {
              transform: "scale(1.05)",
            },
            "&:hover .overlay": {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
          }}
        >
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
              transition: "background-color 0.3s ease",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              color: "#fff",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontWeight: "bold",
            }}
          >
            {item.label}
          </Typography>
          <Image
            src={item.src}
            alt={item.label}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
              zIndex: 0,
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
