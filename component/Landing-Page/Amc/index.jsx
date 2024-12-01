import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import style from './style.module.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AMCDetails = () => {
    const amcCards = [
        { title: 'About AMC', description: 'An Annual Maintenance Contract ensures regular servicing and maintenance to avoid breakdowns.' },
        { title: 'Benefits of AMC', description: 'Hassle-free maintenance, extended equipment life, cost savings, and peace of mind.' },
        { title: 'Coverage Options', description: 'Choose between Comprehensive or Non-comprehensive AMC based on your needs.' },
        { title: 'Duration', description: 'Flexible plans starting from 1 year to up to 10 years for maximum convenience.' },
        { title: 'Emergency Support', description: '24/7 emergency repair services for AMC customers.' },
        { title: 'Flexibility', description: 'Customized AMCs tailored to your unique needs.' },
        { title: 'Guaranteed Services', description: 'Handled by certified technicians using genuine parts and tools.' },
        { title: 'How it Works', description: 'Pick a plan, schedule services, and enjoy worry-free maintenance.' },
        { title: 'Industries Served', description: 'Residential, commercial, hotels, schools, and hospitals.' },
        { title: 'Just What You Need', description: 'Pay for only the services and equipment you need covered.' },
        { title: 'Key Features', description: 'Regular maintenance, on-call support, and detailed service reports.' },
        { title: 'Limitations', description: 'Exclusions include misuse, natural disasters, and external damages.' },
        { title: 'Minimum Coverage', description: 'Starts with coverage for at least 10 appliances or devices.' },
        { title: 'No Hidden Costs', description: 'Transparent pricing with no unexpected fees.' },
        { title: 'Online Booking', description: 'Schedule, renew, or manage your AMC online.' },
        { title: 'Preventive Maintenance', description: 'Regular checks to avoid costly repairs.' },
        { title: 'Quick Response Time', description: 'Fast service for AMC customers during breakdowns.' },
        { title: 'Reliable Technicians', description: 'Skilled professionals for all repairs and maintenance.' },
        { title: 'Spare Parts', description: 'Use of genuine spare parts for all repairs.' },
        { title: 'Terms and Conditions', description: 'Clear terms outlining inclusions and exclusions.' },
        { title: 'Unlimited Support', description: 'Unlimited visits within contract terms.' },
        { title: 'Value for Money', description: 'Save on repair costs and extend appliance lifespan.' },
        { title: 'Wide Range of Appliances Covered', description: 'ACs, refrigerators, washing machines, and more.' },
        { title: 'Exceptional Service Quality', description: 'Top-notch service for all AMC clients.' },
        { title: 'Your Convenience', description: 'Flexible scheduling and easy renewals.' },
        { title: 'Zero Downtime', description: 'Minimize downtime with prompt service.' },
    ];

    return (<Box>
        <Typography variant="h4" className={style.amcTitle}>
            A to Z of Annual Maintenance Contracts (AMC)
        </Typography>

        <Box className={style.amcContainer}>

            {amcCards.map((card, index) => (
                <Box key={index} className={style.amcCard}>
                    <Typography variant="h6" className={style.cardTitle}>
                        {card.title}
                    </Typography>
                    <Typography className={style.cardContent}>
                        {card.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    </Box>
    );
};

export default AMCDetails;
