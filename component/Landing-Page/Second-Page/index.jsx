import { TwentyTwoMpOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import style from "./style.module.scss";
import CustomSlider from '../../CustomSlider';
const SecondPage = () => {
	const services = [
		{
			title: "AC Repair & Service",
			description: "Get your AC up and running efficiently with our expert repair and maintenance services.",
		},
		{
			title: "Air Cooler Repair & Service",
			description: "Keep cool during the summer with our reliable air cooler repair services.",
		},
		// {
		// 	title: "Chimney Repair & Service",
		// 	description: "Ensure your kitchen chimney is in top condition with our professional services.",
		// },
		// {
		// 	title: "Gas Stove Repair & Service",
		// 	description: "We fix gas stoves of all brands and models, ensuring safe and efficient cooking.",
		// },
		{
			title: "Geyser Repair & Service",
			description: "Get hot water on demand by fixing any issues with your geyser quickly and efficiently.",
		},
		// {
		// 	title: "Inverter Repair & Service",
		// 	description: "Keep the power on during outages with our expert inverter repair services.",
		// },
		{
			title: "Water Purifier Repair & Service",
			description: "Ensure clean and safe drinking water with our thorough water purifier services..",
		},
		{
			title: "Microwave Repair",
			description: "Get your microwave back to working condition in no time.",
		},
		
		{
			title: "Refrigerator Repair",
			description: "Keep your food fresh with our fast and reliable refrigerator repair services.",
		},
		{
			title: "Washing Machine Repair",
			description: "Get your laundry done without hassle by fixing any issues with your washing machine.",
		},
		{
			title: "Electrical Services",
			description: "For all your electrical needs, trust our expert technicians.",
		},
	];
	return <div className={style.secondWrapper}>
		<Box className={style.brandsBox}>
			<Box className={style.brandContentBox}>
				<Typography className={style.brandHead1} >12 Thousand+ Repair Requests Handled</Typography>
				<Typography className={style.brandHead2}>Thousands trust us to keep their appliances running smoothly.</Typography>
			</Box>
			<Box className={style.brandContentBox}>
				<Typography className={style.brandHead1}>9 Thousand+ Happy Customers</Typography>
				<Typography className={style.brandHead2}>Our commitment to quality service has earned us a loyal customer base.</Typography>
			</Box>
			<Box className={style.brandContentBox}>
				<Typography className={style.brandHead1}>1 Hundred+ Technicians On Call</Typography>
				<Typography className={style.brandHead2}>We have a vast network of skilled technicians ready to assist you at any time.</Typography>
			</Box>
			<Box className={style.brandContentBox}>
				<Typography className={style.brandHead1}>35 Thousand+ Successful Repairs</Typography>
				<Typography className={style.brandHead2}>From minor fixes to major overhauls, we've successfully repaired thousands of appliances.</Typography>
			</Box>
			<Box className={style.brandContentBox}>
				<Typography className={style.brandHead1}>35+ Years of Combined Experience</Typography>
				<Typography className={style.brandHead2}>Our team brings decades of expertise to ensure your appliances are in good hands.</Typography>
			</Box>
		</Box>
		<Box>
			<Typography className={style.brandHead5}>Why Us?</Typography>
			<Box className={style.whyUsBox}>

				{services.map((service, index) => (
					<Box key={index} className={style.whyUsItem}>
						<Box className={style.backgroundImage}>
							<img src={`/images/promotion/img${index + 1}.jpeg`} alt={`Image ${index + 1}`} className={style.image} />
						</Box>
						<Box className={style.content}>
							<Typography variant="h6" className={style.serviceTitle}>{service.title}</Typography>
							<Typography variant="body2" className={style.description}>{service.description}</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>

		<Box className={style.ourPartnerWrapper}>
			<Typography className={style.brandHead6}>Trusted by leading brands</Typography>
			<Box className={style.partnerIconBox}>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/ntpc-logo.png"
						alt="Picture of the logo"

						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/nh.svg"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/desun.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/pic.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/zeyphr.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/omega.svg"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/zeyphr.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>

				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/medanta.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box className={style.partnerIcon}>
					<Image
						src="/images/brands/medanta.png"
						alt="Picture of the logo"
						className={style.image}
						layout="fill"
						objectFit="contain"
					/>
				</Box>
			</Box>
		</Box>
		<Box>
			<Typography className={style.brandHead3}>Client Feedback</Typography>
			<CustomSlider />
		</Box>
	</div>;
};
SecondPage.title = 'Second Page';
export default SecondPage;
