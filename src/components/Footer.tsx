import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: "#111", color: "#fff", py: 6, mt: 10 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 4,
                    }}
                >
                    {/* About Section */}
                    <Box sx={{ minWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            ShoeVerse
                        </Typography>
                        <Typography variant="body2">
                            Discover the trendiest shoes for every occasion. Comfort and style delivered to your doorstep.
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Link href="#" underline="hover" color="inherit">Home</Link>
                            <Link href="#" underline="hover" color="inherit">Shop</Link>
                            <Link href="#" underline="hover" color="inherit">About Us</Link>
                            <Link href="#" underline="hover" color="inherit">Contact</Link>
                        </Box>
                    </Box>

                    {/* Contact Info */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">fouadnassif7@gmail.com</Typography>
                        <Typography variant="body2">+961 71 339 879</Typography>
                        <Typography variant="body2">123 Shoe St, Fashion City, USA</Typography>
                    </Box>

                    {/* Social Media */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="#" color="inherit">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Bottom Footer */}
                <Box sx={{ textAlign: "center", mt: 6 }}>
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} ShoeVerse. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
