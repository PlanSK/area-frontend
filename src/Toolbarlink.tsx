import React from 'react';
import { v1 } from 'uuid';
import { Typography, Box, Menu, MenuItem, Button, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


type ToolbarLinkItemType = {
    id: string
    title: string
    link: string
    count: number
}

export function Toolbarlink(props: { messagesCount: number }) {
    const tollbarLinks: Array<ToolbarLinkItemType> = [
        { id: v1(), title: "Main page", link: "/", count: 0 },
        { id: v1(), title: "Messages", link: "/messages", count: props.messagesCount },
        { id: v1(), title: "Game zone stat", link: "/stat", count: 0 },
    ]
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {tollbarLinks.map((linkItem) => (
                        <MenuItem key={linkItem.id} href={linkItem.link}>
                            <Typography textAlign="center">
                                {linkItem.title}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {tollbarLinks.map((linkItem) => (
                    <Button
                        key={linkItem.id}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        href={linkItem.link}
                    >
                        <Badge
                            badgeContent={linkItem.count}
                            variant="dot"
                            color="primary"
                        >
                            {linkItem.title}
                        </Badge>
                    </Button>
                ))}
            </Box>
        </>
    );
}