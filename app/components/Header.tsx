import { Remove } from '@mui/icons-material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material'
import { IconButton } from '@mui/material'
import { useContext } from 'react'

import { ColorModeContext } from '~/root'

const Header = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            align='right'
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            R3URL
          </Typography>
          <Remove />
          <Typography
            align='left'
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            URL shorter service
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
