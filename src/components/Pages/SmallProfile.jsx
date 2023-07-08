import { ArrowBack, CalendarMonthOutlined, EmojiEmotionsOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, MoreHoriz, PlaceOutlined, VideocamOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'

const SmallProfile = () => {
    return (
        <Stack p={2} gap={1}>
            <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack direction={'row'} sx={{ '&:hover': { cursor: 'pointer' } }}>
                    <Avatar sx={{ width: 45, height: 45 }} />
                    <Stack sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography variant='p' paddingLeft={2} sx={{ fontSize: '1rem' }}>Shoham Kar</Typography>
                        <Typography variant='p' paddingLeft={2} sx={{ fontSize: '.9rem', color: 'text.secondary' }}>@__shohamkar</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{display: 'flex', alignItems: 'center'}} gap={1}>
                    <Box sx={{
                        backgroundColor: 'text.primary',
                        color: 'background.default',
                        fontSize: '1rem',
                        fontWeight: '600',
                        borderRadius: '15px',
                        width: '4rem',
                        display: 'flex',
                        height: '1.1rem',
                        justifyContent: 'center',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} p={.7}>
                        Follow
                    </Box>
                    <IconButton>
                        <MoreHoriz />
                    </IconButton>
                </Stack>
            </Stack>
            <Box paddingLeft={'3.8rem'}>
                <Typography sx={{ fontSize: '0.9rem' }} variant='p'>{'Hello this is my bio, lol xd, hehe'}</Typography>
            </Box>
        </Stack>
    )
}

export default SmallProfile