import React from 'react';
import { ProfileDataType } from './Header'
import { v1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type ProfileIconPropsType = {
  profileImage: string
  profileName: string
}

type MenuItemsType = {
  id: string
  link: string
  icon: IconName
  title: string
  divider: boolean
}

type ProfileMenuPropsType = {
  staffPermissions: boolean
}

type MenuItemPropsType = {
  item: MenuItemsType
}

export function ProfileBtn() {
  return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}


function ProfileIcon(props: ProfileIconPropsType) {
  return (
    <div className="nav-link dropdown-toggle clear-after-toggle d-flex align-items-center" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {props.profileImage ? <img src={props.profileImage} alt="" className="rounded-circle" style={{width: "3em", height: "3em"}}></img> : <FontAwesomeIcon icon='circle-user' size="2x" />}
      <span className="text-secondary m-2 mobile-hide"><b>{props.profileName}</b></span>
    </div>
  );
}


function ListItem(props: MenuItemPropsType) {
  return (
  <>
    <li>
      <a href={props.item.link} className="dropdown-item">
        <FontAwesomeIcon icon={props.item.icon} fixedWidth /> {props.item.title}
      </a>
    </li>
    {props.item.divider && <li><hr className="dropdown-divider" /></li>}
  </>
  );
}


function ProfileMenuItems(props: ProfileMenuPropsType) {
  let staffMenuArray: Array<MenuItemsType> = [
    { id: v1(), link: '/admin', icon: 'screwdriver-wrench', title: 'Панель администрирования', divider: false},
    { id: v1(), link: '/activation', icon: 'envelope-circle-check', title: 'Состояние активации сотрудников', divider: true},
  ]
  let commonMenuArray: Array<MenuItemsType> = [
    { id: v1(), link: '', icon: 'sun', title: 'Сменить тему', divider: false},
    { id: v1(), link: 'https://stat.artcore24.ru/', icon: 'network-wired', title: 'Состояние игровых зон', divider: false},
    { id: v1(), link: '/profile', icon: 'user', title: 'Мой профиль', divider: true},
    { id: v1(), link: '/logout', icon: 'arrow-right-from-bracket', title: 'Выйти', divider: false},
  ]

  return (
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDarkDropdownMenuLink">
      { props.staffPermissions && staffMenuArray.map((item: MenuItemsType) => <ListItem key={item.id} item={item} />)}
      { commonMenuArray.map((item: MenuItemsType) => <ListItem key={item.id} item={item} />) }
    </ul>
  );
}

export function ProfileMenu(props: ProfileDataType) {
  return (
    <div className="collapse d-flex" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown" key='menu'>
          <ProfileIcon profileImage={props.profileImage}
                       profileName={props.profileName}
          />
          <ProfileMenuItems staffPermissions={props.staffPermissions}/>
        </li>
      </ul>
    </div>
);
}