import { MoreHorizOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, List, ListItemButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Rightbar = () => {
  return (
    <Stack marginLeft={3.5} width={'21.1rem'} p={1.1} gap={2.1}>
      <Stack sx={{ backgroundColor: 'action.hover', borderRadius: '15px' }} p={2}>
        <Stack gap={1}>
          <Typography variant='h6' fontWeight={600}>Get Verified</Typography>
          <Typography variant='p'>Subscribe to unlock new features</Typography>
          <Box bgcolor={'#1C9AF0'} p={1} sx={{
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '33%',
            "&:hover": { cursor: "pointer" }
          }}>Get Verified</Box>
        </Stack>
      </Stack>
      <Stack sx={{ backgroundColor: 'action.hover', borderRadius: '15px' }} p={2.2}>
        <Stack gap={2}>
          <Typography variant='h6' fontWeight={600}>What's happening</Typography>
          <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Stack gap={.5} sx={{ display: 'flex', justifyContent: 'space-between' }} width={'100%'}>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>Trending</Typography>
              <Typography variant='p'>#JohnCena</Typography>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>103 Tweets</Typography>
            </Stack>
            <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
          </Stack>
          <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Stack gap={.5} sx={{ display: 'flex', justifyContent: 'space-between' }} width={'100%'}>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>Trending</Typography>
              <Typography variant='p'>#JohnCena</Typography>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>103 Tweets</Typography>
            </Stack>
            <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
          </Stack><Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Stack gap={.5} sx={{ display: 'flex', justifyContent: 'space-between' }} width={'100%'}>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>Trending</Typography>
              <Typography variant='p'>#JohnCena</Typography>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>103 Tweets</Typography>
            </Stack>
            <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
          </Stack><Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Stack gap={.5} sx={{ display: 'flex', justifyContent: 'space-between' }} width={'100%'}>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>Trending</Typography>
              <Typography variant='p'>#JohnCena</Typography>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>103 Tweets</Typography>
            </Stack>
            <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
          </Stack><Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Stack gap={.5} sx={{ display: 'flex', justifyContent: 'space-between' }} width={'100%'}>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>Trending</Typography>
              <Typography variant='p'>#JohnCena</Typography>
              <Typography variant='p' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>103 Tweets</Typography>
            </Stack>
            <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
          </Stack>
          <Link style={{ textDecoration: 'none', color: '#1C9AF0' }}>Show more</Link>
        </Stack>
      </Stack>



      <Stack sx={{ backgroundColor: 'action.hover', borderRadius: '15px' }} p={2.2}>
        <Stack gap={3.5}>
          <Typography variant='h6' fontWeight={600}>Who to follow</Typography>
          <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction={'row'} sx={{ '&:hover': { cursor: 'pointer' } }}>
              <Avatar sx={{ width: 45, height: 45 }} />
              <Stack sx={{ display: 'flex', justifyContent: 'space-around' }} gap={.7}>
                <Typography variant='p' paddingLeft={2} sx={{ fontSize: '1rem' }}>Shoham Kar</Typography>
                <Typography variant='p' paddingLeft={2} sx={{ fontSize: '.9rem' }}>@__shohamkar</Typography>
              </Stack>
            </Stack>
            <Box sx={{
              backgroundColor: 'text.primary',
              color: 'background.default',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '15px',
              width: '4rem',
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                cursor: 'pointer'
              }
            }} p={.7}>
              Follow
            </Box>
          </Stack>
          <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction={'row'} sx={{ '&:hover': { cursor: 'pointer' } }}>
              <Avatar sx={{ width: 45, height: 45 }} />
              <Stack sx={{ display: 'flex', justifyContent: 'space-around' }} gap={.7}>
                <Typography variant='p' paddingLeft={2} sx={{ fontSize: '1rem' }}>Shoham Kar</Typography>
                <Typography variant='p' paddingLeft={2} sx={{ fontSize: '.9rem' }}>@__shohamkar</Typography>
              </Stack>
            </Stack>
            <Box sx={{
              backgroundColor: 'text.primary',
              color: 'background.default',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '15px',
              width: '4rem',
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                cursor: 'pointer'
              }
            }} p={.7}>
              Follow
            </Box>
          </Stack>
          <Link style={{ textDecoration: 'none', color: '#1C9AF0' }}>Show more</Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Rightbar