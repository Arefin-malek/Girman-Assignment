import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";
import { Link } from "@mui/material";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={Logo} width={"220px"} style={{ padding: "10px" }} alt="" />
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const openWebsite = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <Box sx={{ display: "flex", mb: -3 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} width={"220px"} style={{ padding: "10px" }} alt="" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              onClick={() => {
                console.log("Search");
              }}
              sx={{ color: "#000", mr: 2 }}
            >
              SEARCH
            </Link>
            <Link
              href={"https://www.girmantech.com/"}
              sx={{ color: "#000", mr: 2 }}
            >
              WEBSITE
            </Link>
            <Link
              href={"https://www.linkedin.com/company/girmantech/"}
              sx={{ color: "#000", mr: 2 }}
            >
              LINKEDIN
            </Link>
            <Link
              href={"mailto:contact@girmantech.com"}
              sx={{ color: "#000", mr: 2 }}
            >
              CONTACT
            </Link>
            {/* {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={item.link}
                sx={{ color: "#000" }}
              >
                {item.name}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
