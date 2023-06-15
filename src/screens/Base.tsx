import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Root() {
    return (
        <div className='m-0 bg-slate-300'>
            <AppBar position="static">
                <Toolbar>
                    <Link to={`/`}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PWA
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
}

export default Root