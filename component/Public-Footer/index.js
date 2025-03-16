import React from "react";
import { TextField, Button, MenuItem, Grid, Typography, Container, IconButton } from "@mui/material";
import styles from "./footer.module.scss";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
  Phone,
  Email,
  LocationOn,
  AccessTime,
  ArrowForward
} from '@mui/icons-material';
import Link from 'next/link';

const services = [
  { value: "ac_repair", label: "AC Repair & Service" },
  { value: "water_purifier", label: "Water Purifier Service" },
  { value: "geyser_repair", label: "Geyser Repair" },
  { value: "electrical", label: "Electrical Services" },
  { value: "microwave", label: "Microwave Repair" },
  { value: "refrigerator", label: "Refrigerator Repair" },
  { value: "washing_machine", label: "Washing Machine Repair" },
  { value: "inverter", label: "Inverter Repair" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "AMC Plans", href: "/amc" },
  { label: "Book a Service", href: "/book" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
];

const PublicFooter = () => {
  const handleSocialClick = (platform) => {
    const links = {
      facebook: "https://www.facebook.com/profile.php?id=61569940096992",
      twitter: "https://twitter.com/devicesathi",
      instagram: "https://instagram.com/devicesathi",
      linkedin: "https://linkedin.com/company/devicesathi",
      youtube: "https://youtube.com/devicesathi",
      whatsapp: "https://wa.me/919233141733"
    };
    window.open(links[platform], '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={3}>
              <div className={styles.companyInfo}>
                <img src="/images/logo/zidan-logo.svg" alt="DeviceSathi" className={styles.logo} />
                <p>Your trusted partner for all appliance repair and maintenance services. Available 24/7 for your convenience.</p>
                <div className={styles.socialLinks}>
                  <IconButton onClick={() => handleSocialClick('facebook')} className={styles.socialIcon}>
                    <Facebook />
                  </IconButton>
                  <IconButton onClick={() => handleSocialClick('twitter')} className={styles.socialIcon}>
                    <Twitter />
                  </IconButton>
                  <IconButton onClick={() => handleSocialClick('instagram')} className={styles.socialIcon}>
                    <Instagram />
                  </IconButton>
                  <IconButton onClick={() => handleSocialClick('linkedin')} className={styles.socialIcon}>
                    <LinkedIn />
                  </IconButton>
                  <IconButton onClick={() => handleSocialClick('youtube')} className={styles.socialIcon}>
                    <YouTube />
                  </IconButton>
                </div>
              </div>
            </Grid>

            

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <div className={styles.footerSection}>
                <h3>Contact Info</h3>
                <ul className={styles.contactInfo}>
                  <li>
                    <Phone className={styles.contactIcon} />
                    <div>
                      <p>24/7 Support Line</p>
                      <a href="tel:+919233141733">+91 92331 41733</a>
                    </div>
                  </li>
                  <li>
                    <Email className={styles.contactIcon} />
                    <div>
                      <p>Email Us</p>
                      <a href="mailto:devicesathi@gmail.com">devicesathi@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <LocationOn className={styles.contactIcon} />
                    <div>
                      <p>Location</p>
                      <address>Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087</address>
                    </div>
                  </li>
                  <li>
                    <AccessTime className={styles.contactIcon} />
                    <div>
                      <p>Working Hours</p>
                      <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} md={3}>
              <div className={styles.footerSection}>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter for updates and exclusive offers!</p>
                <form className={styles.newsletterForm}>
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    variant="outlined"
                    size="small"
                    className={styles.newsletterInput}
                  />
                  <Button 
                    variant="contained" 
                    className={styles.subscribeButton}
                  >
                    Subscribe
                  </Button>
                </form>
                <div className={styles.whatsappButton}>
                  <Button
                    startIcon={<WhatsApp />}
                    onClick={() => handleSocialClick('whatsapp')}
                    fullWidth
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.footerBottom}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <p>&copy; {new Date().getFullYear()} DeviceSathi. All Rights Reserved.</p>
            </Grid>
            <Grid item>
              <div className={styles.footerLinks}>
                <Link href="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={styles.footerLink}>
                  Terms & Conditions
                </Link>
                <Link href="/sitemap" className={styles.footerLink}>
                  Sitemap
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default PublicFooter;
