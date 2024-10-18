import React from "react";
import { TextField, Button, MenuItem, Grid, Typography } from "@mui/material";
import styles from "./footer.module.scss";

const services = [
  { value: "ac_repair", label: "AC Repair & Service" },
  { value: "air_cooler_repair", label: "Air Cooler Repair & Service" },
  { value: "chimney_repair", label: "Chimney Repair & Service" },
  { value: "gas_stove_repair", label: "Gas Stove Repair & Service" },
  { value: "geyser_repair", label: "Geyser Repair & Service" },
  { value: "inverter_repair", label: "Inverter Repair & Service" },
  { value: "water_purifier_repair", label: "Water Purifier Repair & Service" },
  { value: "microwave_repair", label: "Microwave Repair" },
  { value: "mixer_grinder_repair", label: "Mixer & Grinder Repair" },
  { value: "refrigerator_repair", label: "Refrigerator Repair" },
  { value: "washing_machine_repair", label: "Washing Machine Repair" },
  { value: "electrical_services", label: "Electrical Services" },
];

const PublicFooter = () => {
  return (
    <div className={styles.footerWrap}>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.formSection}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <form className={styles.contactForm} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    variant="outlined"
                    name="name"
                    InputLabelProps={{
                      style: { color: '#ffffff' },
                    }}
                    InputProps={{
                      style: { color: '#ffffff' },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ffffff",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    InputLabelProps={{
                      style: { color: '#ffffff' },
                    }}
                    InputProps={{
                      style: { color: '#ffffff' },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ffffff",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    type="tel"
                    InputLabelProps={{
                      style: { color: '#ffffff' },
                    }}
                    InputProps={{
                      style: { color: '#ffffff' },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ffffff",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Which device do you need service for?"
                    variant="outlined"
                    name="service"
                    defaultValue=""
                    InputLabelProps={{
                      style: { color: '#ffffff' },
                    }}
                    InputProps={{
                      style: { color: '#ffffff' },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ffffff",
                        },
                      },
                    }}
                  >
                    {services.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* New TextArea for Description */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    multiline
                    rows={4}
                    InputLabelProps={{
                      style: { color: '#ffffff' },
                    }}
                    InputProps={{
                      style: { color: '#ffffff' },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffffff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ffffff",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className={styles.infoSection}>
            <img src={'/images/logo/zidan-logo.svg'} alt="Company Logo" className={styles.logo} />
            <Typography variant="body2" color="white">
              Company Registration No: XYZ123456
            </Typography>
            <Typography variant="body2" color="white">
              <a href="/terms" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                Terms and Conditions
              </a>
            </Typography>
          </div>
        </div>
        <div className={styles.subFooter}>
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Zidanfix. All Rights Reserved.
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default PublicFooter;
