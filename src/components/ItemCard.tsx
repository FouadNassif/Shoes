import { Box, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import { ItemsCardType } from "@/types/Items";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Component that receives the item as a prop
export default function ItemCard({ item }: { item: ItemsCardType }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const brandSlug = item.brand.toLowerCase().replace(/\s+/g, '-');
  const nameSlug = item.name.toLowerCase().replace(/\s+/g, '-');

  const handleClick = () => {
    router.push(`/products/${brandSlug}/${nameSlug}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {/* Image box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {xs:250,md:350},
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        )}
        <Image
          src={item.mainImage}
          alt={item.name}
          width={400}
          height={350}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease",
          }}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </Box>

      <Box
        sx={{
          marginTop: 2,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {item.category}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              +{item.colors.length} colors
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "text.primary",
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--secondary)",
            marginTop: "auto",
          }}
        >
          {formatPrice(item.price)}
        </Typography>
      </Box>
    </Box>
  );
}
