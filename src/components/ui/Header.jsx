import { Badge } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css'

const Header = () => {
  return (
    <header>
        <h1>Stol</h1>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </Badge>
    </header>
  )
}

export default Header