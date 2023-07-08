import { ArrowBack, CalendarMonthOutlined, EmojiEmotionsOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, MoreHoriz, PlaceOutlined, VideocamOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import '../../styles/Profile.css'
import SmallProfile from './SmallProfile'

const Following = () => {
    let MyFeedBox = styled(Box)({
        width: '37.5rem',
        borderLeft: '1px solid rgba(255,255,255,.25)',
        borderRight: '1px solid rgba(255,255,255,.25)',
    })
    return (
        <MyFeedBox sx={{ overflowY: 'scroll', height: '100vh', position: 'relative' }} className='scrollbar-hidden'>
            <Stack gap={2} className='nav' sx={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'background.default',
                zIndex: 1,
                display: 'flex',
            }}>
                <Stack direction={'row'}>
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                    <Stack>
                        <Typography variant='h5' fontWeight={600}>{'Shoham Kar'}</Typography>
                        <Typography variant='p' sx={{ fontSize: '.8rem', color: 'background.secondary' }}>@{'_shoham_kar'}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} borderBottom={'4px solid #1C9AF0'} borderRadius={'3px'} p={1}>Following</Typography>
                    </Box>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography p={1}>Followers</Typography>
                    </Box>
                </Stack>
            </Stack>
            <SmallProfile/>
            <SmallProfile/>
            <SmallProfile/>



        </MyFeedBox>
    )
}

export default Following