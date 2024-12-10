import React, { useState } from 'react';
import { Button, Grid, Typography, Box, Modal, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import style from './style.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import AMCDetails from '../Amc';

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
    {
      imageName: 'Chimney Repair & Service',
      imageUrl: '/images/jobs/chimney.png',
      description: 'Get your chimney repaired and serviced by certified technicians for optimal performance.',
      services: ['Motor repair', 'Filter cleaning', 'Duct replacement'],
      pricing: 'Affordable rates starting from ₹399',
    },
    {
      imageName: 'Geyser Repair & Service',
      imageUrl: '/images/jobs/geyser.png',
      description: 'Reliable geyser repair services to ensure hot water is always available when you need it.',
      services: ['Thermostat replacement', 'Tank cleaning', 'Heating element repair'],
      pricing: 'Affordable rates starting from ₹299',
    },
    {
      imageName: 'Inverter Repair & Service',
      imageUrl: '/images/jobs/inverter.png',
      description: 'Professional inverter repair services to keep your power backup system running smoothly.',
      services: ['Battery replacement', 'Circuit repair', 'System maintenance'],
      pricing: 'Affordable rates starting from ₹699',
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
      imageName: 'Electrical Services',
      imageUrl: '/images/jobs/electrician.png',
      description: 'Trusted electrical repair and installation services for homes and offices.',
      services: ['Wiring issues', 'Switch replacement', 'Appliance installation'],
      pricing: 'Affordable rates starting from ₹299',
    },
  ];
  
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div className={style.wrapper}>
      <Grid container sx={{ width: '100%', height: '100%' }}>
        {isMobile && (
          <Grid item xs={12} md={12}>
            <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
              <img
                src="./images/background/back1.jpeg"
                alt="Mobile Header Image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs={12} md={5} className={style.leftPart}>
          <Typography className={style.mainHeader}>
            We Fix, You Relax <br /> Quality Repairs at Your Convenience.
          </Typography>
          <Typography className={style.subHeader}>
            "Book Now" or "Get a Free Quote"
          </Typography>
          <Box className={style.buttonBox}>
            <Button variant="contained" className="default-btn primary-btn" onClick={handleBookNowClick}>
              Book Now
            </Button>
            <Button
              variant="outlined"
              className="default-btn primary-btn-outline"
              onClick={handleTalkToUsClick}
            >
              Talk to Us
            </Button>
          </Box>
           {/* Add this section below the existing text */}
           <Box sx={{ marginTop: '20px' }} className={style.bulletBox}>
           <div sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px', justifyContent: 'center' }} className={style.bulletPoint}>
             <CheckCircleIcon style={{ color: 'green', marginRight: '8px', }} />
             <div >
               <div className={style.bulletPointHeading}> Budget-Friendly Solutions</div>
               <div className={style.bulletPointDesc}>Affordable services without compromising quality, offering the best value for your money.</div>
             </div>
           </div>
           <div className={style.bulletPoint}>
             <CheckCircleIcon style={{ color: 'green', marginRight: '8px', }} />
             <div>
               <div className={style.bulletPointHeading}>Trusted & Reliable</div>
               <div className={style.bulletPointDesc} >Dependable and consistent service trusted by many satisfied customers.</div>
             </div>

           </div>
           <div sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }} className={style.bulletPoint}>
             <CheckCircleIcon style={{ color: 'green', marginRight: '8px', }} />
             <div>
               <div className={style.bulletPointHeading}>Convenient Scheduling</div>
               <div className={style.bulletPointDesc} >Flexible appointments that fit your schedule for hassle-free service.</div>
             </div>
           </div>
           <div sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }} className={style.bulletPoint}>
             <CheckCircleIcon style={{ color: 'green', marginRight: '8px', }} />
             <div className={style.bulletPointHeading}>
               <div>Fast & Efficient Service</div>
               <div className={style.bulletPointDesc} >Quick, expert repairs to get your appliances working in no time.</div>
             </div>
           </div>
           <div sx={{ display: 'flex', alignItems: 'flex-start' }} className={style.bulletPoint}>
             <CheckCircleIcon style={{ color: 'green', marginRight: '8px' }} />
             <div>
               <div className={style.bulletPointHeading}>Certified Technicians</div>
               <div className={style.bulletPointDesc} >Skilled, certified professionals ensuring high-quality work every time.</div>
             </div>
           </div>
         </Box>
        </Grid>

        <Grid item xs={12} md={7} className={style.rightPart}>
          <div className={style.contentWrapper}>
            <Box
              sx={{
                width: isMobile ? '100%' : '660px',
                padding: isMobile ? '10px' : '0 20px',
                height: isMobile ? 'auto' : '450px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: isMobile ? '5px' : '20px',
              }}
            >
              <Typography className={style.deviceNameQuestion}>
                Which device do you need service for?
              </Typography>
              <div className={style.mainDiv}>
                {images.map((image, index) => (
                  <div className={style.childDiv} key={index}>
                    <div
                      className={style.childDivforimg}
                      onClick={() => handleOpenModal(image)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={image.imageUrl}
                        alt={image.imageName}
                        style={{ width: '50px', height: 'auto' }}
                      />
                    </div>
                    <Typography variant="body2" className={style.deviceName}>
                      {image.imageName}
                    </Typography>
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
      <Box className={style.nextBlock} >
        <img src={'/images/jobs/amc.jpg'} alt="amc" />
      </Box>
      <Box className={style.nextBlock2} >
        <AMCDetails />
      </Box>
      <Box className={style.bottomWave}>
        <img src={'/images/objects/wave.svg'} alt="Wave" />
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
<Box className={style.nextBlock} >
        <img src={'/images/jobs/amc.jpg'} alt="amc" />
      </Box>
      <Box className={style.nextBlock2} >
        <AMCDetails />
      </Box>
      <Box className={style.bottomWave}>
        <img src={'/images/objects/wave.svg'} alt="Wave" />
      </Box>
    </div>
  );
};

FirstPage.title = 'First Page';
export default FirstPage;
