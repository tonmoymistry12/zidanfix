import React, { useState } from 'react';
import { Button, Grid, Typography, Box, Modal, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { 
  AcUnit, 
  WaterDrop, 
  ElectricBolt, 
  Kitchen, 
  LocalLaundryService, 
  Battery90, 
  Thermostat,
  Microwave,
  Kitchen as Refrigerator,
  Engineering, 
  Speed, 
  Security, 
  Support,
  CheckCircle,
  Timer,
  Build,
  LocalOffer
} from '@mui/icons-material';
import style from './style.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import AMCDetails from '../Amc';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const FirstPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [
    {
      imageName: 'AC Repair & Service',
      imageUrl: '/images/jobs/air-conditioner.png',
      description: 'Expert repair services for air conditioners, including part replacement, maintenance, and diagnostic checks.',
      services: ['Part replacement', 'System cleaning', 'Diagnostic checks'],
      pricing: 'Affordable rates starting from ₹499',
    },
    // {
    //   imageName: 'Chimney Repair & Service',
    //   imageUrl: '/images/jobs/chimney.png',
    //   description: 'Get your chimney repaired and serviced by certified technicians for optimal performance.',
    //   services: ['Motor repair', 'Filter cleaning', 'Duct replacement'],
    //   pricing: 'Affordable rates starting from ₹399',
    // },
    {
      imageName: 'Geyser Repair & Service',
      imageUrl: '/images/jobs/geyser.png',
      description: 'Reliable geyser repair services to ensure hot water is always available when you need it.',
      services: ['Thermostat replacement', 'Tank cleaning', 'Heating element repair'],
      pricing: 'Affordable rates starting from ₹299',
    },
    {
      imageName: 'Electrical Services',
      imageUrl: '/images/jobs/electrician.png',
      description: 'Trusted electrical repair and installation services for homes and offices.',
      services: ['Wiring issues', 'Switch replacement', 'Appliance installation'],
      pricing: 'Affordable rates starting from ₹299',
    },
    
    {
      imageName: 'Water Purifier Repair & Service',
      imageUrl: '/images/jobs/water-purifier.png',
      description: 'Expert services for all types of water purifiers, ensuring safe and clean drinking water.',
      services: ['Filter replacement', 'Membrane cleaning', 'Leakage repair'],
      pricing: 'Affordable rates starting from ₹399',
    },
    {
      imageName: 'Microwave Repair',
      imageUrl: '/images/jobs/microwave.png',
      description: 'Quick and reliable microwave repair services for all brands and models.',
      services: ['Heating issue repair', 'Panel replacement', 'Door alignment'],
      pricing: 'Affordable rates starting from ₹299',
    },
    {
      imageName: 'Refrigerator Repair',
      imageUrl: '/images/jobs/refrigerator.png',
      description: 'Comprehensive refrigerator repair services to keep your food fresh and cool.',
      services: ['Compressor repair', 'Gas refilling', 'Cooling issue troubleshooting'],
      pricing: 'Affordable rates starting from ₹499',
    },
    {
      imageName: 'Washing Machine Repair',
      imageUrl: '/images/jobs/washing_machine.png',
      description: 'Top-notch washing machine repair services to ensure hassle-free laundry days.',
      services: ['Drum repair', 'Motor replacement', 'Water leakage fix'],
      pricing: 'Affordable rates starting from ₹399',
    },
    {
      imageName: 'Inverter Repair & Service',
      imageUrl: '/images/jobs/inverter.png',
      description: 'Professional inverter repair services to keep your power backup system running smoothly.',
      services: ['Battery replacement', 'Circuit repair', 'System maintenance'],
      pricing: 'Affordable rates starting from ₹699',
    },
    
  ];
  
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleBookNowClick = () => {
    const phoneNumber = '919233141733';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTalkToUsClick = () => {
    const phoneNumber = '+919233141733';
    window.open(`tel:${phoneNumber}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919233141733';
    const message = `New Service Enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const heroSlides = [
    {
      image: '/images/background/hero1.jpg',
      title: 'Expert Appliance Repairs',
      subtitle: 'Professional service at your doorstep'
    },
    {
      image: '/images/background/hero2.jpg',
      title: 'Same Day Service',
      subtitle: 'Quick response time guaranteed'
    },
    {
      image: '/images/background/hero3.jpg',
      title: 'Certified Technicians',
      subtitle: 'Trusted by thousands of customers'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true, // Right to left animation
    cssEase: "linear",
    arrows: false,
  };

  const serviceIcons = {
    'AC Repair & Service': AcUnit,
    'Water Purifier Repair & Service': WaterDrop,
    'Electrical Services': ElectricBolt,
    'Geyser Repair & Service': Thermostat,
    'Microwave Repair': Microwave,
    'Refrigerator Repair': Refrigerator,
    'Washing Machine Repair': LocalLaundryService,
    'Inverter Repair & Service': Battery90,
  };

  return (
    <div className={style.wrapper}>
      <div className={style.heroSection}>
        <div className={style.enquiryFormContainer}>
          <form onSubmit={handleFormSubmit} className={style.enquiryForm}>
            <h2>Quick Enquiry</h2>
            <p>Get instant response on WhatsApp</p>
            
            <div className={style.formGrid}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Service</option>
                {images.map((img, idx) => (
                  <option key={idx} value={img.imageName}>
                    {img.imageName}
                  </option>
                ))}
              </select>
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            
            <button type="submit" className={style.submitButton}>
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>

        <div className={style.heroBanner}>
          <Slider {...sliderSettings} className={style.heroSlider}>
            {heroSlides.map((slide, index) => (
              <div key={index} className={style.heroSlide}>
                <div 
                  className={style.slideBackground}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className={style.heroContent}>
                   
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={style.servicesWrapper}>
        <h1 className={style.mainHeader}>
          We Fix, You Relax
          <br />
          Quality Repairs at Your Convenience
        </h1>
        <p className={style.subHeader}>
          Expert appliance repair services delivered right to your doorstep
        </p>

        <div className={style.featuresGrid}>
          <div className={style.featureCard}>
            <div className={style.icon}>
              <CheckCircleIcon />
            </div>
            <h3>Budget-Friendly Solutions</h3>
            <p>Affordable services without compromising quality, offering the best value for your money.</p>
          </div>
          <div className={style.featureCard}>
            <div className={style.icon}>
              <CheckCircleIcon />
            </div>
            <h3>Trusted & Reliable</h3>
            <p>Dependable and consistent service trusted by many satisfied customers.</p>
          </div>
          <div className={style.featureCard}>
            <div className={style.icon}>
              <CheckCircleIcon />
            </div>
            <h3>Fast & Efficient Service</h3>
            <p>Quick, expert repairs to get your appliances working in no time.</p>
          </div>
        </div>

        <div className={style.servicesSection}>
          <h2 className={style.sectionTitle}>Our Services</h2>
          <div className={style.servicesGrid}>
            {images.map((service, index) => {
              const IconComponent = serviceIcons[service.imageName];
              return (
                <div 
                  key={index} 
                  className={style.serviceCard}
                  onClick={() => handleOpenModal(service)}
                >
                  <IconComponent className={style.serviceIcon} />
                  <div className={style.serviceContent}>
                    <h3 className={style.serviceName}>{service.imageName}</h3>
                    <p className={style.serviceDescription}>
                      {service.description.split('.')[0]}.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={style.actionButtons}>
            <button 
              className={`${style.button} ${style.primary}`}
              onClick={handleBookNowClick}
            >
              Book Now
            </button>
            <button 
              className={`${style.button} ${style.secondary}`}
              onClick={handleTalkToUsClick}
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>

      <section className={style.amcSection}>
        <div className={style.amcContainer}>
          <div className={style.amcHeader}>
            <h2>Annual Maintenance Plans</h2>
            <p>Comprehensive maintenance plans to keep your appliances running smoothly all year round</p>
          </div>

          <div className={style.amcFeatures}>
            <div className={style.amcFeature}>
              <div className={style.featureIcon}>
                <Engineering />
              </div>
              <div className={style.featureContent}>
                <h3>Expert Technicians</h3>
                <p>Certified professionals with years of experience in appliance maintenance and repair</p>
              </div>
            </div>

            <div className={style.amcFeature}>
              <div className={style.featureIcon}>
                <Speed />
              </div>
              <div className={style.featureContent}>
                <h3>Priority Service</h3>
                <p>Get priority scheduling and same-day emergency service</p>
              </div>
            </div>

            <div className={style.amcFeature}>
              <div className={style.featureIcon}>
                <Security />
              </div>
              <div className={style.featureContent}>
                <h3>90-Day Warranty</h3>
                <p>All repairs and parts come with a 90-day service warranty</p>
              </div>
            </div>

            <div className={style.amcFeature}>
              <div className={style.featureIcon}>
                <Support />
              </div>
              <div className={style.featureContent}>
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer support for all your queries</p>
              </div>
            </div>
          </div>

          <div className={style.amcPlans}>
            <div className={style.planCard}>
              <h3 className={style.planName}>Basic Plan</h3>
              <div className={style.planPrice}>
                ₹2,999<span>/year</span>
              </div>
              <ul className={style.planFeatures}>
                <li><CheckCircle /> 2 Service Visits</li>
                <li><CheckCircle /> Basic Inspection</li>
                <li><CheckCircle /> Parts Discount 10%</li>
                <li><Timer /> 48hr Response Time</li>
              </ul>
              <button className={style.planButton} onClick={handleBookNowClick}>
                Get Started
              </button>
            </div>

            <div className={`${style.planCard} ${style.popular}`}>
              <h3 className={style.planName}>Premium Plan</h3>
              <div className={style.planPrice}>
                ₹4,999<span>/year</span>
              </div>
              <ul className={style.planFeatures}>
                <li><CheckCircle /> 4 Service Visits</li>
                <li><CheckCircle /> Deep Inspection</li>
                <li><CheckCircle /> Parts Discount 20%</li>
                <li><Timer /> 24hr Response Time</li>
                <li><Build /> Emergency Support</li>
              </ul>
              <button className={style.planButton} onClick={handleBookNowClick}>
                Get Started
              </button>
            </div>

            <div className={style.planCard}>
              <h3 className={style.planName}>Business Plan</h3>
              <div className={style.planPrice}>
                ₹7,999<span>/year</span>
              </div>
              <ul className={style.planFeatures}>
                <li><CheckCircle /> 6 Service Visits</li>
                <li><CheckCircle /> Premium Support</li>
                <li><CheckCircle /> Parts Discount 30%</li>
                <li><Timer /> 12hr Response Time</li>
                <li><Build /> Priority Emergency Support</li>
                <li><LocalOffer /> Custom Solutions</li>
              </ul>
              <button className={style.planButton} onClick={handleBookNowClick}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <Box className={style.nextBlock2} >
        <AMCDetails />
      </Box>
      
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedImage && (
            <>
              <Typography variant="h6" component="h2" gutterBottom>
                {selectedImage.imageName}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedImage.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Services Offered:
              </Typography>
              <ul>
                {selectedImage.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Pricing:
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {selectedImage.pricing}
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Additional Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Contact us for more details on {selectedImage.imageName}.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 3,
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const phoneNumber = '919233141733';
                    const whatsappMessage = `Hello, I would like to book a service for ${selectedImage.imageName}. Please provide more details.`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Book Now
                </Button>
                <Button variant="outlined" onClick={handleCloseModal}>
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

FirstPage.title = 'First Page';
export default FirstPage;
