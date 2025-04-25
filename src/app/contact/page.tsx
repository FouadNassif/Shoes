'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
  Link,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Find us at our locations or reach out through our social media
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {/* Contact Information */}
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Main Branch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon color="primary" sx={{ mr: 2 }} />
                <Typography>123 Business Street, City, Country</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>contact@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>+1 (555) 123-4567</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Second Branch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon color="primary" sx={{ mr: 2 }} />
                <Typography>456 Market Street, City, Country</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>branch2@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>+1 (555) 987-6543</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton color="primary" component={Link} href="https://instagram.com/yourbrand">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" component={Link} href="https://wa.me/15551234567">
                  <PhoneIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>

          {/* Map Section */}
          <Paper elevation={3} sx={{ p: 4, height: '88%' }}>
            <Typography variant="h5" gutterBottom>
              Our Locations
            </Typography>
            <Box sx={{ height: 400, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
} 