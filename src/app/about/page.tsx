"use client"
import { Box, Container, Typography, Grid, Card, CardContent, Button, useTheme } from "@mui/material";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box sx={{ position: "relative", height: { xs: "50vh", md: "70vh" }, width: "100%" }}>
        <Image
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
          alt="About Us Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              textAlign: "center",
            }}
            className="titleFont"
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 3 }} className="titleFont">
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
              Founded in 2020, we started with a simple mission: to provide high-quality, 
              stylish footwear that doesn't compromise on comfort. What began as a small 
              online store has grown into a beloved destination for shoe enthusiasts 
              worldwide.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our journey has been marked by innovation, quality, and a deep commitment 
              to customer satisfaction. We believe that great shoes can transform not 
              just your outfit, but your entire day.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: 400, borderRadius: 2, overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=2065&auto=format&fit=crop"
                alt="Our Store"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 6, textAlign: "center" }} className="titleFont">
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Quality First",
                description: "We never compromise on the quality of our products. Every pair of shoes is crafted with premium materials and attention to detail.",
                image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop"
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We're committed to providing exceptional service and support at every step of your journey.",
                image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Sustainable Practices",
                description: "We're committed to reducing our environmental impact through sustainable manufacturing and packaging practices.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
              }
            ].map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ position: "relative", height: 200 }}>
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ mb: 2 }} className="titleFont">
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Team Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ mb: 6, textAlign: "center" }} className="titleFont">
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            },
            {
              name: "Jane Smith",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            },
            {
              name: "Mike Johnson",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
            },
            {
              name: "Sarah Wilson",
              role: "Customer Experience",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            }
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%" }}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }} className="titleFont">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ mb: 3 }} className="titleFont">
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              Have questions about our products or want to learn more about our company? 
              We'd love to hear from you.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<EastIcon />}
              sx={{
                bgcolor: "var(--accent)",
                color: "var(--secondary)",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "var(--accent)",
                  opacity: 0.9,
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 