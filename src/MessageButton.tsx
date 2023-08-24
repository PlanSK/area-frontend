import React from 'react';

function ButtonBadger() {
  return (
    <span className="position-absolute top-0 start-100 translate-middle p-1 badge rounded-circle bg-danger fa-fade">
      <span className="visually-hidden">unread messages</span>
    </span>
  );
}

export function MessageButton() {
  let unread_messages: number = 0;
  return (
    <div className="d-flex align-items-center me-2">
      <a className="btn btn-outline-secondary pt-0 pb-0 position-relative normalize" href="#" title="Messenger">
      <i className="fa-solid fa-paper-plane {unread-message && 'fa-fade'}"></i>
      {unread_messages && <ButtonBadger/>}
      </a>
    </div>
);
}