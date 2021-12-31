import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyle = makeStyles({
  tabs: {
   "& .MuiButtonBase-root.MuiTab-root": {
      margin: "5px",
      padding: "5px",
      color: "white"
   },
  "& .MuiTabs-indicator": {
    position: "absolute",
    height: "15px",
    bottom: "5px",
    borderRadius: "30px",
    backgroundColor: "#7073BE"
  },
}

})

const Navbar = () => {
  const [value, setValue] = useState(0);
  const classes = useStyle()
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  return (
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "#3EBDC0",
            justifyContent: "space-between"
          }}
        >
          <Box style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src="./image3.png" alt="" style={{height: "3em", marginRight: "1em"}} />
          <Typography variant='h5'>ร้านเกื้อกูล</Typography>
          </Box>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example"
          centered
          className={classes.tabs}
          >
              <LinkTab label="หน้าหลัก" href="#" />
              <LinkTab label="เกี่ยวกับเรา" href="#" />
              <LinkTab label="บริจาค" href="#" />
              <LinkTab label="ร้านค้า" href="#" />
              <LinkTab label="บริการ" href="#" />
              <LinkTab label="ข่าวสาร" href="#"/>
              <LinkTab label="ติดต่อ" href="#" />
          </Tabs>
          <Box style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ShoppingCartIcon style={{marginRight: "1em"}}/>
            <Avatar sx={{bgcolor: "orange"}}>P</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar