import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Home from './components/Pages/Home';
import Post from './components/Pages/Post';
import Profile from './components/Pages/Profile';
import Followers from './components/Pages/Followers';
import Following from './components/Pages/Following';
import Bookmark from './components/Pages/Bookmark'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Box bgcolor={'background.default'} color={'text.primary'} minHeight={'100vh'} sx={{display: 'flex', justifyContent: 'center'}}>
          <Stack direction={'row'} width={'80rem'}>
            <Navbar/>
            <Stack direction={'row'} >
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/lol' element={<Post />} />
              <Route path='/:id' element={<Profile />} />
              <Route path='/bookmarks' element={<Bookmark />} />
              <Route path='/:id/followers' element={<Followers />} />
              <Route path='/:id/following' element={<Following />} />
            </Routes>
            <Rightbar/>
            </Stack>
          </Stack>
        </Box>
      </Router>
    </ThemeProvider>

  )
}

export default App