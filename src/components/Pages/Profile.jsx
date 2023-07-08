import { ArrowBack, CalendarMonthOutlined, EmojiEmotionsOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, MoreHoriz, PlaceOutlined, VideocamOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Tweet from './Tweet'
import Banner from '../../assets/images/banner.jpeg'
import ProfilePic from '../../assets/images/profile.jpg'
import '../../styles/Profile.css'

const Profile = () => {
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
                <IconButton>
                    <ArrowBack />
                </IconButton>
                <Stack>
                    <Typography variant='h5' fontWeight={600}>{'Shoham Kar'}</Typography>
                    <Typography variant='p' sx={{ fontSize: '.8rem', color: 'background.secondary' }}>{920} Tweets</Typography>
                </Stack>
            </Stack>
            <Stack className='nav' sx={{
                padding: '1rem 0 0 0',
                backgroundColor: 'background.default',
            }}>
                <Box>
                    <img src={Banner} style={{ width: '100%', height: '13rem' }} />
                </Box>
                <Box className='profile-pic'>
                    <Avatar src={ProfilePic} sx={{ width: '8rem', height: '8rem', }} className='profile-avatar' />
                </Box>
                <Stack p={2}>
                    <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} gap={1}>
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                        <Box sx={{
                            backgroundColor: 'text.primary',
                            color: 'background.default',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '15px',
                            width: '5rem',
                            height: '1.3rem',
                            display: 'flex',
                            justifyContent: 'center',
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }} p={.7}>
                            Follow
                        </Box>
                    </Stack>
                    <Stack paddingTop={'1rem'}>
                        <Typography variant='h5' fontWeight={600}>Shoham Kar</Typography>
                        <Typography variant='p' sx={{ fontSize: '.9rem', color: 'text.secondary' }}>@{'_shohamkar'}</Typography>
                    </Stack>
                    <Stack paddingTop={'1rem'}>
                        <Typography variant='p' sx={{ fontSize: '.9rem' }}>{'Some random stupid bio of the user'}</Typography>
                    </Stack>
                    <Stack paddingTop={'1rem'} direction={'row'} gap={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='p' sx={{ fontSize: '1rem', color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                            <LocationOnOutlined fontSize='1.5rem' />
                            New Delhi, India
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '1rem', color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                            <CalendarMonthOutlined fontSize='1.5rem' />
                            Joined May 2023
                        </Typography>
                    </Stack>
                    <Stack paddingTop={'1rem'} direction={'row'} gap={2}>
                        <Stack direction={'row'} gap={1}>
                            <Typography variant='p' sx={{ fontSize: '.9rem', fontWeight:'bold' }}>{54}</Typography>
                            <Typography variant='p' sx={{ fontSize: '.9rem', color: 'text.secondary' }}>Following</Typography>
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <Typography variant='p' sx={{ fontSize: '.9rem', fontWeight:'bold' }}>{54}</Typography>
                            <Typography variant='p' sx={{ fontSize: '.9rem', color: 'text.secondary' }}>Followers</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} borderBottom={'4px solid #1C9AF0'} borderRadius={'3px'} p={1}>Tweets</Typography>
                    </Box>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography p={1}>Replies</Typography>
                    </Box>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography p={1}>Media</Typography>
                    </Box>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography p={1}>Retweets</Typography>
                    </Box>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography p={1}>Likes</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Tweet />
            <Tweet />
            <Tweet />
        </MyFeedBox>
    )
}

export default Profile