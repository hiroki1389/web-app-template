import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Stylish App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header