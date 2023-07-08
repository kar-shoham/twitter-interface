import { ArrowBack, CalendarMonthOutlined, EmojiEmotionsOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, MoreHoriz, PlaceOutlined, VideocamOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Tweet from './Tweet'
import Banner from '../../assets/images/banner.jpeg'
import ProfilePic from '../../assets/images/profile.jpg'
import '../../styles/Profile.css'

const Bookmark = () => {
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
                alignItems: 'center'
            }} direction={'row'}>
                <Stack p={1}>
                    <Typography variant='h6' fontWeight={600}>Bookmarks</Typography>
                    <Typography variant='p' sx={{ fontSize: '.8rem', color: 'text.secondary' }}>@{'shoham_kar'}</Typography>
                </Stack>
            </Stack>
            <Tweet />
            <Tweet />
            <Tweet />
        </MyFeedBox>
    )
}

export default Bookmark