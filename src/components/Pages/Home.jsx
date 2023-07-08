import { EmojiEmotionsOutlined, GifBoxOutlined, ImageOutlined, PlaceOutlined, VideocamOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Tweet from './Tweet'
import '../../styles/Home.css'

const Home = () => {
  let MyFeedBox = styled(Box)({
    width: '37.5rem',
    borderLeft: '1px solid rgba(255,255,255,.25)',
    borderRight: '1px solid rgba(255,255,255,.25)',
  })
  return (
    <MyFeedBox sx={{ overflowY: 'scroll', height: '100vh' }} className='scrollbar-hidden'>
      <Stack gap={2} className='nav' sx={{
        padding: '1rem 1rem 0 1rem',
        position: 'sticky',
        top: 0,
        backgroundColor: 'background.default',
        zIndex: 1
      }}>
        <Typography variant='h6'>Home</Typography>
        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography fontWeight={600} borderBottom={'4px solid #1C9AF0'} borderRadius={'3px'} p={1}>For you</Typography>
          </Box>
          <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography p={1}>Following</Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack className='post' sx={{ borderTop: '1px solid rgba(255,255,255,.25)' }} p={2} gap={2.5}>
        <Stack direction={'row'}>
          <Avatar sx={{ marginRight: 2 }} />
          <Box width={'100%'}>
            <Input width={'inherit'} placeholder='What is happening?!' fullWidth sx={{ fontSize: '1.3rem' }} disableUnderline	></Input>
          </Box>
        </Stack>
        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction={'row'} paddingLeft={6}>
            <IconButton >
              <ImageOutlined color='primary' fontSize='inherit' />
            </IconButton>
            <IconButton >
              <GifBoxOutlined color='primary' fontSize='inherit' />
            </IconButton>
            <IconButton >
              <VideocamOutlined color='primary' fontSize='inherit' />
            </IconButton>
            <IconButton >
              <EmojiEmotionsOutlined color='primary' fontSize='inherit' />
            </IconButton>
            <IconButton disabled >
              <PlaceOutlined color='primary' fontSize='inherit' />
            </IconButton>
          </Stack>
          <Box bgcolor={'#1C9AF0'} p={1} sx={{
            fontSize: '1rem',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '30px',
            alignItems: 'center',
            width: '4rem',
            "&:hover": { cursor: "pointer" }
          }}>Tweet</Box>
        </Stack>
      </Stack>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        borderTop: '1px solid rgba(255,255,255,.25)',
        height: '3rem',
        '&:hover': {
          cursor: 'pointer'
        }
      }}>
        <Typography variant='p' sx={{fontSize: '.9rem'}} color={'#1C9AF0'}>Show new tweets</Typography>
      </Box>
      <Tweet />
      <Tweet />
      <Tweet />
    </MyFeedBox>
  )
}

export default Home