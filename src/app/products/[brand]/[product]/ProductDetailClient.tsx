"use client";

import { Box, Typography, Button, Link, Rating, Accordion, AccordionSummary, AccordionDetails, Chip } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Shoe } from "@/components/ShoesCard";
import NavBar from "@/components/Navbar";
import { keyframes } from "@emotion/react";
import { addToCart as addToCartUtil } from "@/utils/cart";
import { useNotification } from '@/context/NotificationContext';
import { useCart } from '@/context/CartContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const images = product ? [
    product.mainImage,
    product.mainImage.replace('Shoes1.jpg', 'Shoes2.jpg'),
    product.mainImage.replace('Shoes1.jpg', 'Shoes3.jpg'),
    product.mainImage.replace('Shoes1.jpg', 'Shoes4.jpg'),
    product.mainImage.replace('Shoes1.jpg', 'Shoes5.jpg'),
  ] : [];

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>(
    product?.mainImage || ""
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
          p: { xs: 1, md: 5 },
          flexWrap: "wrap",
          gap: {xs: 20, md:10},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 2 },
            width: { xs: "100%", md: "auto" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 550 },
              height: 550,
              position: "relative",
              overflow: "hidden",
              animation: `${fadeIn} 0.4s ease-in-out`,
            }}
            key={mainImage}
          >
            <Image
              src={mainImage}
              alt="Main Product Image"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
              priority={true}
              quality={90}
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "normal", md: "space-between" },
              height: { xs: 0, md: "70vh" },
              gap: { xs: 2 },
              px: { xs: 2, md: 0 },
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
                  alt={`Thumbnail ${key + 1}`}
                  width={70}
                  height={70}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  loading="lazy"
                  quality={75}
                  sizes="70px"
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "350px",
            p: 2,
            border: "1px solid #eee",
            borderRadius: 3,
            mb: { xs: 10, md: 0 },
          }}
        >
          <PhraseLink
            productName={product.name}
            Brand={product.brand}
          />
          <Box sx={{ display: 'flex',gap: 1, alignItems: 'center' }}>
          <Typography sx={{ fontSize: 13, color: "gray", my: 1 }}>
            {product.category} / {product.brand}
          </Typography>
          {product.tags.map((tag, key) => (
            <Chip
              key={key}
              label={tag}
              size="small"
              sx={{
                fontSize: 12,
                color: "gray",
                border: "1px solid #eee",
                backgroundColor: "transparent",
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            />
          ))}
          </Box>

          <Typography sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            {product.isOnSale && (
              <Typography sx={{ fontSize: 20, color: "gray", textDecoration: 'line-through' }}>
                ${product.originalPrice}
              </Typography>
            )}
            <Typography sx={{ fontSize: 22, color: product.isOnSale ? "#ff4081" : "inherit" }}>
              ${product.price}
            </Typography>
            {product.isOnSale && (
              <Chip
                label="SALE"
                size="small"
                sx={{
                  backgroundColor: '#ff4081',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              />
            )}
          </Box>

          <Typography sx={{ fontSize: 14, color: "#555", mb: 2 }}>
            {product.description}
          </Typography>

          <Accordion sx={{ mb: 2, boxShadow: 'none', border: '1px solid #eee', borderRadius: '8px !important' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: '8px 0',
                }
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>More Details</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: 14, color: "#555", minWidth: 80 }}>
                    <span style={{ fontWeight: "bold" }}>Gender:</span>
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#555" }}>
                    {product.gender}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: 14, color: "#555", minWidth: 80 }}>
                    <span style={{ fontWeight: "bold" }}>Rating:</span>
                  </Typography>
                  <Rating 
                    value={product.rating} 
                    readOnly 
                    precision={0.5}
                    size="small"
                    sx={{ 
                      '& .MuiRating-iconFilled': {
                        color: '#ffc107',
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: 14, color: "#555" }}>
                    ({product.rating})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: 14, color: "#555", minWidth: 80 }}>
                    <span style={{ fontWeight: "bold" }}>Reviews:</span>
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#555" }}>
                    {product.reviews}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: 14, color: "#555", minWidth: 80 }}>
                    <span style={{ fontWeight: "bold" }}>Material:</span>
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {product.material.map((mat, key) => (
                      <Typography key={key} sx={{ fontSize: 14, color: "#555" }}>
                        {mat}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

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
                onClick={() => setSelectedSize(size.toString())}
                sx={{
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  border:
                    selectedSize === size.toString() ? "2px solid #000" : "1px solid #aaa",
                  backgroundColor: selectedSize === size.toString() ? "#eee" : "#fff",
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
  productName,
  Brand,
}: {
  productName: string;
  Brand: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Link
            href="/home"
            sx={{ color: "GrayText", fontSize: 13, textDecoration: "none" }}
          >
            HOME
          </Link>
          <Typography sx={{ fontSize: 13 }}>/</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Link
            href="/products"
            sx={{ color: "GrayText", fontSize: 13, textDecoration: "none" }}
          >
            PRODUCTS
          </Link>
          <Typography sx={{ fontSize: 13 }}>/</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Link
            href={`/products?brands=${Brand}`}
            sx={{ color: "GrayText", fontSize: 13, textDecoration: "none" }}
          >
            {Brand}
          </Link>
          <Typography sx={{ fontSize: 13 }}>/</Typography>
        </Box>
      <Typography
        sx={{ fontSize: 13, color: "var(--secondary)", fontWeight: 500 }}
      >
        {productName}
      </Typography>
    </Box>
  );
}
