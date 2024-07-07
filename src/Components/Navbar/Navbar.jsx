import React from 'react'
import Logo from "../../Assets/Logo.svg"
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src="" alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonial</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className='navbar-cart-icon' />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 />
      </div>
      <Drawer>
        <Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider/>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
