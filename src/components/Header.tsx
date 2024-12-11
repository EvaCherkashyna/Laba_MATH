import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()

  const getButtonColor = (path: string) => {
    return pathname == path
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Laboratory Works
        </Typography>
        <Button variant='text' style={getButtonColor("/lab1") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab1">
          Lab 1
        </Button>
        <Button variant='text' style={getButtonColor("/lab2") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab2">
          Lab 2
        </Button>
        <Button variant='text' style={getButtonColor("/lab3") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab3">
          Lab 3
        </Button>
        <Button variant='text' style={getButtonColor("/lab4") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab4">
          Lab 4
        </Button>
        <Button variant='text' style={getButtonColor("/lab5") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab5">
          Lab 5
        </Button>
        <Button variant='text' style={getButtonColor("/lab6") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab6">
          Lab 6
        </Button>
        <Button variant='text' style={getButtonColor("/lab7") ? { textDecoration: "underline" } : {}} color="inherit" component={Link} to="/lab7">
          Lab 7
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
