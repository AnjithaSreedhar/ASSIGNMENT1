import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography></Typography> &nbsp; &nbsp;
                <Button variant='contained' color='success'>
                <Link to={'/v'} style={{textDecoration:'none',color:'white'}}>
                    HOME
                </Link>
                </Button>
                &nbsp; &nbsp;
                <Button variant='contained' color='error'>
                <Link to={'/add'} style={{textDecoration:'none',color:'white'}}>
                    ADD BLOG
                </Link>
                </Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar