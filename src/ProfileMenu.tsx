import React from 'react';

export function ProfileBtn() {
  return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}



function StaffMenuItems() {
  let adminMenuArray = [
    {link: '#', icon: 'fa-solid fa-screwdriver-wrench', text: 'Панель администрирования'},
    {link: '#', icon: 'fa-solid fa-envelope-circle-check', text: 'Состояние активации сотрудников'},
  ]
  return (
    {adminMenuArray.map((item) => {
      <li><a className="dropdown-item" href={item.link}><i className={item.icon}></i>&nbsp;{item.text}</a></li>
    }
    )}
  );
}

function StaffMenu() {

}

function ProfileImage(props) {
  if (props.profileImage) {
    return <img src={props.profileImage} alt="" className="rounded-circle" style={{width: 3em; height: 3em;}}></img>
  } else {
    <i className="fa-solid fa-circle-user fa-2x"></i>
  }
}


function ProfileIcon(props) {
  let profileImage = {}
  return (
    <a className="nav-link dropdown-toggle clear-after-toggle d-flex align-items-center" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <ProfileImage />
    <span className="text-secondary m-2 mobile-hide"><b>{props.userName}</b></span>
    </a>
  );
}


export function ProfileMenu() {
  let imageFile: string = '';
  let staffPermissions: boolean = true;
  return (
    <div className="collapse d-flex" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <ProfileIcon />
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDarkDropdownMenuLink">
            { staffPermissions && <StaffMenuItems /> }
            { staffPermissions && <li><hr className="dropdown-divider" /></li> }
            <li>
              <a href className="dropdown-item" onclick="switchTheme()"><i className="fa-regular fa-sun"></i> / <i className="fa-regular fa-moon"></i> Сменить тему</a>
            </li>
            <li><a href="https://stat.artcore24.ru/" className="dropdown-item"><i className="fa-solid fa-network-wired"></i> Состояние игровых зон</a></li>
            <li><a className="dropdown-item" href="{% url 'show_user_detail' %}?next={{ request.path }}"><i className="fa-solid fa-user"></i>&nbsp;Мой профиль</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="{% url 'logout' %}"><i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Выйти</i></a></li>
          </ul>
        </li>
      </ul>
    </div>
);
}