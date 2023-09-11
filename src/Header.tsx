import React from 'react';
import { MessageButton } from './MessageButton';
import { ProfileBtn, ProfileMenu } from './ProfileMenu';

export type HeaderData = {
  profileData: ProfileDataType
  messagesCount: number
}

export type ProfileDataType = {
  profileName: string
  profileImage: string
  staffPermissions: boolean
}

export function Header(props: HeaderData) {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand border-bottom p-0">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={process.env.PUBLIC_URL + '/img/logo.png'} height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            <div className="navbar-item d-flex">
              <MessageButton messagesCount={props.messagesCount} />
              <ProfileBtn />
              <ProfileMenu profileImage={props.profileData.profileImage}
                profileName={props.profileData.profileName}
                staffPermissions={props.profileData.staffPermissions}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}