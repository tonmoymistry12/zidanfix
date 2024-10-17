import * as React from "react";
import styles from "./Header.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { StyledEngineProvider } from '@mui/material/styles';

const pages = ["Products", "Our Services", "About Us", "Contact", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const PublicHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <StyledEngineProvider injectFirst>
      <AppBar position="static" className={styles.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div

            >
              <div className={styles.logo}>
                <Image
                  src="/images/logo/zidan-logo.png"
                  alt="Picture of the logo"
                  className={styles.image}
                  layout="fill"
                  objectFit="contain"
                />
                <div className={styles.telephoneBox}>
                  <div className={styles.telephoneImageBox} style={{ position: 'relative' }}>
                    <Image
                      src="/images/header/telephone.svg"
                      alt="Picture of the logo"
                      className={styles.telephoneimage}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.telephoneNumber}>
                    +91-8768194014
                  </div>

                </div>
              </div>

            </div >

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography className={styles.fontStyle} textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: 'space-between', gap: '50px' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  className={styles.fontStyle}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </StyledEngineProvider>

  );
};

export default PublicHeader;
