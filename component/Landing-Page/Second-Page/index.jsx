import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import style from "./style.module.scss";
import CustomSlider from '../../CustomSlider';
import { 
	Engineering,
	Speed,
	GroupWork,
	Build,
	EmojiEvents,
	Timeline,
	AcUnit,
	WaterDrop,
	Thermostat,
	ElectricBolt,
	Kitchen,
	LocalLaundryService,
	Microwave,
	Battery90
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SecondPage = () => {
	const stats = [
		{
			icon: <Build />,
			number: "12K+",
			title: "Repair Requests",
			description: "Thousands trust us to keep their appliances running smoothly."
		},
		{
			icon: <EmojiEvents />,
			number: "9K+",
			title: "Happy Customers",
			description: "Our commitment to quality service has earned us a loyal customer base."
		},
		{
			icon: <Engineering />,
			number: "100+",
			title: "Expert Technicians",
			description: "We have a vast network of skilled technicians ready to assist you."
		},
		{
			icon: <Speed />,
			number: "35K+",
			title: "Successful Repairs",
			description: "From minor fixes to major overhauls, we've successfully repaired thousands of appliances."
		},
		{
			icon: <Timeline />,
			number: "35+",
			title: "Years Experience",
			description: "Our team brings decades of expertise to ensure your appliances are in good hands."
		}
	];

	const services = [
		{
			icon: <AcUnit />,
			title: "AC Repair & Service",
			description: "Get your AC up and running efficiently with our expert repair and maintenance services."
		},
		{
			icon: <WaterDrop />,
			title: "Water Purifier Repair",
			description: "Ensure clean and safe drinking water with our thorough water purifier services."
		},
		{
			icon: <ElectricBolt />,
			title: "Electrical Services",
			description: "For all your electrical needs, trust our expert technicians."
		},
		{
			icon: <Thermostat />,
			title: "Geyser Repair",
			description: "Get hot water on demand by fixing any issues with your geyser quickly and efficiently."
		},
		{
			icon: <Microwave />,
			title: "Microwave Repair",
			description: "Get your microwave back to working condition in no time."
		},
		{
			icon: <Kitchen />,
			title: "Refrigerator Repair",
			description: "Keep your food fresh with our fast and reliable refrigerator repair services."
		},
		{
			icon: <LocalLaundryService />,
			title: "Washing Machine Repair",
			description: "Get your laundry done without hassle by fixing any issues with your washing machine."
		},
		{
			icon: <Battery90 />,
			title: "Inverter Repair",
			description: "Professional inverter repair services to keep your power backup system running smoothly."
		}
	];

	const partners = [
		"/images/brands/ntpc-logo.png",
		"/images/brands/nh.svg",
		"/images/brands/desun.png",
		"/images/brands/pic.png",
		"/images/brands/zeyphr.png",
		"/images/brands/omega.svg",
		"/images/brands/medanta.png"
	];

	return (
		<div className={style.secondWrapper}>
			<Container maxWidth="lg">
				{/* Stats Section */}
				<div className={style.statsSection}>
					{stats.map((stat, index) => (
						<motion.div 
							key={index}
							className={style.statCard}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className={style.statIcon}>{stat.icon}</div>
							<h3 className={style.statNumber}>{stat.number}</h3>
							<h4 className={style.statTitle}>{stat.title}</h4>
							<p className={style.statDescription}>{stat.description}</p>
						</motion.div>
					))}
				</div>

				{/* Services Section */}
				<div className={style.servicesSection}>
					<h2 className={style.sectionTitle}>Why Choose Us?</h2>
					<div className={style.servicesGrid}>
						{services.map((service, index) => (
							<motion.div
								key={index}
								className={style.serviceCard}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className={style.serviceIcon}>{service.icon}</div>
								<h3>{service.title}</h3>
								<p>{service.description}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Partners Section */}
				<div className={style.partnersSection}>
					<h2 className={style.sectionTitle}>Trusted by Leading Brands</h2>
					<div className={style.partnersGrid}>
						{partners.map((partner, index) => (
							<motion.div
								key={index}
								className={style.partnerLogo}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Image
									src={partner}
									alt="Partner logo"
									layout="fill"
									objectFit="contain"
								/>
							</motion.div>
						))}
					</div>
				</div>

				{/* Testimonials Section */}
				<div className={style.testimonialsSection}>
					<h2 className={style.sectionTitle}>What Our Clients Say</h2>
					<CustomSlider />
				</div>
			</Container>
		</div>
	);
};

SecondPage.title = 'Second Page';
export default SecondPage;
