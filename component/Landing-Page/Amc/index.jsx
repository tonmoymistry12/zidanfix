import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';
import style from './style.module.scss';
import { 
  Engineering,
  AccessTime,
  Security,
  Build,
  Apartment,
  Payment,
  CheckCircle,
  Speed,
  Construction,
  LocalOffer,
  Settings,
  Handyman
} from '@mui/icons-material';

const AMCDetails = () => {
  const amcSections = [
    {
      title: "Core Features",
      items: [
        {
          icon: <Engineering />,
          title: "Expert Technicians",
          description: "Certified professionals with extensive experience in appliance maintenance"
        },
        {
          icon: <AccessTime />,
          title: "24/7 Support",
          description: "Round-the-clock emergency repair services for AMC customers"
        },
        {
          icon: <Security />,
          title: "Guaranteed Service",
          description: "All repairs backed by our service quality guarantee"
        }
      ]
    },
    {
      title: "Coverage Options",
      items: [
        {
          icon: <Build />,
          title: "Comprehensive Plans",
          description: "Full coverage including parts, labor, and maintenance"
        },
        {
          icon: <Apartment />,
          title: "Multiple Segments",
          description: "Plans for residential, commercial, and industrial clients"
        },
        {
          icon: <Payment />,
          title: "Flexible Pricing",
          description: "Choose plans that fit your budget and requirements"
        }
      ]
    },
    {
      title: "Service Benefits",
      items: [
        {
          icon: <CheckCircle />,
          title: "Regular Maintenance",
          description: "Scheduled checks to prevent unexpected breakdowns"
        },
        {
          icon: <Speed />,
          title: "Priority Response",
          description: "Fast-track service for all AMC customers"
        },
        {
          icon: <Construction />,
          title: "Genuine Parts",
          description: "Only authentic spare parts used in all repairs"
        }
      ]
    },
    {
      title: "Additional Perks",
      items: [
        {
          icon: <LocalOffer />,
          title: "Special Discounts",
          description: "Exclusive offers on parts and additional services"
        },
        {
          icon: <Settings />,
          title: "Preventive Care",
          description: "Regular optimization to extend equipment life"
        },
        {
          icon: <Handyman />,
          title: "Multi-Device Support",
          description: "Coverage for all your essential appliances"
        }
      ]
    }
  ];

  return (
    <div className={style.amcWrapper}>
      <Container maxWidth="lg">
        <div className={style.amcHeader}>
          <h2>Comprehensive AMC Solutions</h2>
          <p>Discover the benefits of our Annual Maintenance Contracts</p>
        </div>

        {amcSections.map((section, index) => (
          <div key={index} className={style.section}>
            <h3 className={style.sectionTitle}>{section.title}</h3>
            <div className={style.sectionGrid}>
              {section.items.map((item, idx) => (
                <div key={idx} className={style.featureCard}>
                  <div className={style.iconWrapper}>
                    {item.icon}
                  </div>
                  <div className={style.featureContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={style.ctaSection}>
          <h3>Ready to Get Started?</h3>
          <p>Choose an AMC plan that suits your needs and enjoy worry-free maintenance</p>
          <button className={style.ctaButton} onClick={() => window.location.href = '#plans'}>
            View AMC Plans
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AMCDetails;
