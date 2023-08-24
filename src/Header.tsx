import React from 'react';
import logo from './img/logo.png'
import { MessageButton } from './MessageButton';
import { ProfileBtn, ProfileMenu } from './ProfileMenu';

export function Header() {
    return (
    <header>
        <div className="container">
        <nav className="navbar navbar-expand border-bottom p-0">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            <div className="navbar-item d-flex">
                <MessageButton />
                <ProfileBtn />
                <ProfileMenu />
            </div>
            </div>
        </nav>
        </div>
    </header>
  );
}