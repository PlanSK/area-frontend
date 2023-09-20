import React from 'react';
import { Toolbarlink } from './Toolbarlink';
import { ProfileMenuBtn, ProfileDataType } from './ProfileMenuBtn';
import { AppBar, Container, Toolbar } from '@mui/material';

export type ToolbarData = {
  profileData: ProfileDataType
  messagesCount: number
}

export function Maintoolbar(props: ToolbarData) {
  return (
    <AppBar position='static' sx={{marginBottom: '2px'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img src="/img/artx_short.png" alt="logo" height={'50px'} style={{margin: '5px'}}/>
          <Toolbarlink messagesCount={props.messagesCount}/>
          <ProfileMenuBtn
                profileName={props.profileData.profileName}
                profileImage={props.profileData.profileImage}
                staffPermissions={props.profileData.staffPermissions}
              />
        </Toolbar>
      </Container>
    </AppBar>
  );
}