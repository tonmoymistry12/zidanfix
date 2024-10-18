import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Add the check icon from Material-UI
import style from './style.module.scss';
import Image from 'next/image';
import PublicHeader from '../../Public-Header';
import { useMediaQuery, useTheme } from '@mui/material';

const FirstPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile

  const images = [
    { imageName: 'AC Repair & Service', imageUrl: '/images/jobs/air-conditioner.svg' },
    { imageName: 'Chimney Repair & Service', imageUrl: '/images/jobs/chimney.svg' },
    { imageName: 'Geyser Repair & Service', imageUrl: '/images/jobs/geyser.svg' },
    { imageName: 'Inverter Repair & Service', imageUrl: '/images/jobs/inverter.svg' },
    { imageName: 'Water Purifier Repair & Service', imageUrl: '/images/jobs/water-purifier.svg' },
    { imageName: 'Microwave Repair', imageUrl: '/images/jobs/microwave.svg' },
    { imageName: 'Refrigerator Repair', imageUrl: '/images/jobs/refrigerator.svg' },
    { imageName: 'Washing Machine Repair', imageUrl: '/images/jobs/washing_machine.svg' },
    { imageName: 'Electrical services', imageUrl: '/images/jobs/electrician.svg' },
    // Add more images as needed
  ];

  const handleBookNowClick = () => {
    const phoneNumber = '919233141733';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTalkToUsClick = () => {
    const phoneNumber = '919233141733';
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className={style.wrapper}>
      <Grid container sx={{ width: '100%', height: '100%' }}>

        {isMobile && (
          <Grid item xs={12} md={12} >
            <Box sx={{ textAlign: 'center', marginTop: '101px' }}>
              <img
                src="./images/background/back1.jpeg" // Update this with the actual image path
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
          <Box sx={{ marginTop: '20px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom:'10px', justifyContent: 'center' }} className={style.bulletPoint}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '8px',  }} /> Budget-Friendly Solutions
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom:'10px' }} className={style.bulletPoint}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '8px',  }} /> Trusted & Reliable
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom:'10px'  }} className={style.bulletPoint}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '8px', }} /> Convenient Scheduling
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom:'10px'  }} className={style.bulletPoint}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '8px',  }} /> Fast & Efficient Service
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }} className={style.bulletPoint}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '8px' }} /> Certified Technicians
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7} className={style.rightPart}>
          <div className={style.contentWrapper}>
          <Box className={style.extensiveBox} >
      <img
        src="./images/clipart/repair.png"  // Replace with the actual path to your image
        alt="Experience Icon"
        style={{ width: '65px', height: '65px' }}  // Customize the size as per your design
      />
      <Typography className={style.experienceText}>
        Our extensive experience covers both <strong>commercial</strong> and <strong>home</strong> services in <strong>AC</strong> and <strong>Refrigerator</strong> repairs, ensuring top-quality solutions for all environments.
      </Typography>
    </Box>
            <Box
              sx={{
                width: isMobile ? '100%' : '600px',
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
              <Typography
                sx={{

                }}
                className={style.deviceNameQuestion}
              >
                Which device do you need service for?
              </Typography>
              <div className={style.mainDiv}>
                {images.map((image, index) => (
                  <div className={style.childDiv} key={index}>
                    <div className={style.childDivforimg}>
                      <img
                        src={image.imageUrl}
                        alt={image.imageName}
                        style={{ width: '50px', height: 'auto' }}
                      />
                    </div>
                    <Typography variant="body2" className={style.deviceName} >
                      {image.imageName}
                    </Typography>
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
      <Box className={style.bottomWave}>
        <img src={'/images/objects/wave.svg'} alt="Wave" />
      </Box>
    </div>
  );
};

FirstPage.title = 'First Page';
export default FirstPage;
