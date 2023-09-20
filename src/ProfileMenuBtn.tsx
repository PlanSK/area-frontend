import React from 'react';
import { v1 } from 'uuid';
import { Box, Menu, MenuItem, Tooltip, Avatar, Divider, ListItemIcon, ListItemText, Link } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupIcon from '@mui/icons-material/Group';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export type ProfileDataType = {
    profileName: string
    profileImage: string
    staffPermissions: boolean
}

type MenuItemsType = {
    id: string
    link: string
    icon: React.ReactElement<SvgIconComponent>
    title: string
    divider: boolean
}

export function ProfileMenuBtn(props: ProfileDataType) {
    let staffMenuArray: Array<MenuItemsType> = [
        { id: v1(), link: '/admin', icon: <HandymanIcon />, title: 'Панель администрирования', divider: false },
        { id: v1(), link: '/activation', icon: <GroupIcon />, title: 'Состояние активации сотрудников', divider: true },
    ]
    let commonMenuArray: Array<MenuItemsType> = [
        { id: v1(), link: '/profile', icon: <ManageAccountsIcon />, title: 'Мой профиль', divider: false },
        { id: v1(), link: '', icon: <Brightness6Icon />, title: 'Сменить тему', divider: true },
        { id: v1(), link: '/logout', icon: <ExitToAppIcon />, title: 'Выйти', divider: false },
    ]

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    let menuItemsArray: Array<MenuItemsType> = commonMenuArray;
    if (props.staffPermissions) {
        menuItemsArray = staffMenuArray.concat(commonMenuArray);
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {props.profileImage ? (
                        <Avatar alt="Profile image" src={props.profileImage} />
                    ) : (
                        <Avatar>{props.profileName[0]}</Avatar>
                    )}
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {menuItemsArray.map((menuItem: MenuItemsType) => (
                    <>
                        <MenuItem
                            key={menuItem.id}
                            component={Link}
                            href={menuItem.link}
                        >
                            <ListItemIcon>
                                {menuItem.icon}
                            </ListItemIcon>
                            <ListItemText>{menuItem.title}</ListItemText>
                        </MenuItem>
                        {menuItem.divider && <Divider />}
                    </>
                ))}
            </Menu>
        </Box>
    );
}
