"use client";

import { Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Shoe } from "@/components/ShoesCard";
import NavBar from "@/components/Navbar";
import { keyframes } from "@emotion/react";
import { addToCart as addToCartUtil } from "@/utils/cart";
import { useNotification } from '@/context/NotificationContext';
import { useCart } from '@/context/CartContext';

const fadeIn = keyframes`
  from { opacity: 0.3; }
  to { opacity: 1; }
`;

interface ProductDetailClientProps {
  product: Shoe | undefined;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const images = [
    product?.mainImage,
    "/assets/img/shoes/img2.jpg",
    "/assets/img/shoes/img3.jpg",
    "/assets/img/shoes/img4.jpg",
    "/assets/img/shoes/img5.jpg",
  ];

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>(
    product?.mainImage || images[0]
  );
  const { showNotification } = useNotification();
  const { addItemToCart } = useCart();
  const isAddEnabled = selectedSize !== "" && selectedColor !== "";

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        image: product.mainImage,
        quantity: 1
      });
      showNotification(`${product.name} added to cart!`);
    }
  };

  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4">Product not found</Typography>
      </Box>
    );
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 5,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 500 },
              height: 550,
              position: "relative",
              overflow: "hidden",
              animation: `${fadeIn} 0.4s ease-in-out`,
            }}
            key={mainImage} // force re-render for animation
          >
            <Image
              src={mainImage}
              alt="Main Image"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "normal", md: "space-between" },
              height: { xs: 0, md: "70vh" },
              gap: { xs: 2 },
            }}
          >
            {images.map((image, key) => (
              <Box
                key={key}
                onClick={() => setMainImage(image)}
                sx={{
                  width: 70,
                  height: 70,
                  border:
                    mainImage === image
                      ? "2px solid #1976d2"
                      : "2px solid gray",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${key}`}
                  width={70}
                  height={70}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Product Info */}
        <Box
          sx={{
            width: "350px",
            p: 2,
            border: "1px solid #eee",
            borderRadius: 3,
          }}
        >
          <PhraseLink
            current={product.name}
            previous={["HOME", "PRODUCTS", product.brand]}
          />

          <Typography sx={{ fontSize: 13, color: "gray", my: 1 }}>
            {product.category} / {product.brand}
          </Typography>

          <Typography sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}>
            {product.name}
          </Typography>

          <Typography sx={{ fontSize: 22, color: "#ff4081", mb: 1 }}>
            ${product.price}
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#555", mb: 2 }}>
            {product.description}
          </Typography>

          <Typography fontWeight={600}>Colors</Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            {product.colors.map((color, index) => (
              <Box
                key={index}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                  border:
                    selectedColor === color
                      ? "3px solid #333"
                      : "1px solid #aaa",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>

          <Typography fontWeight={600}>Sizes</Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            {product.sizes.map((size, index) => (
              <Box
                key={index}
                onClick={() => setSelectedSize(size)}
                sx={{
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  border:
                    selectedSize === size ? "2px solid #000" : "1px solid #aaa",
                  backgroundColor: selectedSize === size ? "#eee" : "#fff",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                {size}
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            disabled={!isAddEnabled}
            onClick={handleAddToCart}
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: isAddEnabled ? "#1976d2" : "#aaa",
              cursor: isAddEnabled ? "pointer" : "not-allowed",
              "&:hover": {
                backgroundColor: isAddEnabled ? "#115293" : "#aaa",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </>
  );
}

function PhraseLink({
  previous,
  current,
}: {
  previous: string[];
  current: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
      {previous.map((link, key) => (
        <Box key={key} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Link
            href="/"
            sx={{ color: "GrayText", fontSize: 13, textDecoration: "none" }}
          >
            {link}
          </Link>
          <Typography sx={{ fontSize: 13 }}>/</Typography>
        </Box>
      ))}
      <Typography
        sx={{ fontSize: 13, color: "var(--secondary)", fontWeight: 500 }}
      >
        {current}
      </Typography>
    </Box>
  );
}
