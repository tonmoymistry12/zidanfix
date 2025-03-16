import React from 'react';
import BaseLayout from '../component/Layouts/BaseLayout';
import { Container, Grid, Typography, Box } from '@mui/material';
import { 
  Phone, 
  WhatsApp, 
  Email, 
  LocationOn, 
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';
import styles from '../styles/ContactUs.module.scss';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919233141733';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919233141733';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@devicesathi.com';
  };

  const handleSocialClick = (platform) => {
    const links = {
      facebook: "https://facebook.com/devicesathi",
      twitter: "https://twitter.com/devicesathi",
      instagram: "https://instagram.com/devicesathi",
      linkedin: "https://linkedin.com/company/devicesathi"
    };
    window.open(links[platform], '_blank');
  };

  return (
    <BaseLayout>
      <div className={styles.contactWrapper}>
        <Container maxWidth="lg">
          <div className={styles.contactHeader}>
            <h1>Contact Us</h1>
            <p>Get in touch with us for all your appliance repair needs</p>
          </div>

          <Grid container spacing={4}>
            {/* Contact Cards */}
            <Grid item xs={12} md={4}>
              <div className={styles.contactCard} onClick={handleCallClick}>
                <div className={styles.iconWrapper}>
                  <Phone />
                </div>
                <h3>Call Us</h3>
                <p>+91 92331 41733</p>
                <span>Available 24/7 for support</span>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={styles.contactCard} onClick={handleWhatsAppClick}>
                <div className={`${styles.iconWrapper} ${styles.whatsapp}`}>
                  <WhatsApp />
                </div>
                <h3>WhatsApp</h3>
                <p>+91 92331 41733</p>
                <span>Quick response on WhatsApp</span>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={styles.contactCard} onClick={handleEmailClick}>
                <div className={styles.iconWrapper}>
                  <Email />
                </div>
                <h3>Email Us</h3>
                <p>support@devicesathi.com</p>
                <span>We'll respond within 24 hours</span>
              </div>
            </Grid>
          </Grid>

          {/* Additional Information */}
          <Grid container spacing={4} className={styles.infoSection}>
            <Grid item xs={12} md={6}>
              <div className={styles.infoCard}>
                <h3>Business Hours</h3>
                <div className={styles.infoItem}>
                  <AccessTime />
                  <div>
                    <p>Monday - Sunday</p>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={styles.infoCard}>
                <h3>Office Location</h3>
                <div className={styles.infoItem}>
                  <LocationOn />
                  <div>
                    <p>Esplanade, Dharmatala</p>
                    <span>Kolkata, West Bengal 700087</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* Social Media Links */}
          <div className={styles.socialSection}>
            <h3>Connect With Us</h3>
            <div className={styles.socialLinks}>
              <div className={styles.socialIcon} onClick={() => handleSocialClick('facebook')}>
                <Facebook />
              </div>
              <div className={styles.socialIcon} onClick={() => handleSocialClick('twitter')}>
                <Twitter />
              </div>
              <div className={styles.socialIcon} onClick={() => handleSocialClick('instagram')}>
                <Instagram />
              </div>
              <div className={styles.socialIcon} onClick={() => handleSocialClick('linkedin')}>
                <LinkedIn />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default ContactUs; 