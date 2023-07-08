import { BookmarkBorderOutlined, Drafts, Email, EmailOutlined, Home, HomeOutlined, Inbox, MoreHoriz, MoreHorizOutlined, Notifications, NotificationsOutlined, PermIdentity, Search, TurnedInNot, Twitter, Verified, VerifiedOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    let navbarItems = [
        { text: 'Home', NavbarIcon: HomeOutlined },
        { text: 'Explore', NavbarIcon: Search },
        { text: 'Notifications', NavbarIcon: NotificationsOutlined },
        { text: 'Messages', NavbarIcon: EmailOutlined },
        { text: 'Bookmarks', NavbarIcon: BookmarkBorderOutlined },
        { text: 'Verified', NavbarIcon: VerifiedOutlined },
        { text: 'Profile', NavbarIcon: PermIdentity },
        { text: 'More', NavbarIcon: MoreHoriz },

    ]
    return (
        <Box className='sidenav' width={'16rem'} color={'text.secondary'} p={1.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Stack>
                <Box paddingLeft={1}>
                    <Twitter fontSize='large' sx={{"&:hover": { cursor: "pointer" }}}/>
                </Box>
                <Stack>
                    <List>
                        {navbarItems.map(({ text, NavbarIcon }) =>
                            <ListItem disablePadding key={text} sx={{ margin: '10px 0' }}>
                                <ListItemButton fontSize={'large'}>
                                    <ListItemIcon>
                                        <NavbarIcon />
                                    </ListItemIcon>
                                    <ListItemText ><Box sx={{ fontSize: '1.3rem', fontWeight: '500', }}>{text}</Box></ListItemText>
                                </ListItemButton>
                            </ListItem>)}
                        <Box bgcolor={'#1C9AF0'} p={1.8} sx={{
                            fontSize: '1.2rem',
                            fontWeight: '600', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            borderRadius: '30px',
                            color: 'text.primary',
                            "&:hover": { cursor: "pointer" }
                        }}>Tweet</Box>
                    </List>
                </Stack>
            </Stack>
            <Stack direction={'row'} sx={
                {
                    display: 'flex',
                    justifyContent: 'space-between',
                    "&:hover": { cursor: "pointer" }
                }}>
                <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 45, height: 45 }} />
                    <Stack sx={{ display: 'flex', justifyContent: 'space-around' }} gap={.7}>
                        <Typography variant='p' paddingLeft={2} sx={{ fontSize: '1rem' }}>Shoham Kar</Typography>
                        <Typography variant='p' paddingLeft={2} sx={{ fontSize: '.9rem' }}>@__shohamkar</Typography>
                    </Stack>
                </Stack>
                <IconButton sx={{ "&:hover": { backgroundColor: "background.default" } }}>
                    <MoreHorizOutlined sx={{ width: 20, height: 20 }} />
                </IconButton>
            </Stack>
        </Box>
    )
}

export default Navbar