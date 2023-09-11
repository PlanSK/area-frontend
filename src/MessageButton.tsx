import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MessagesPropsType = {
  messagesCount: number
}

export function MessageButton(props: MessagesPropsType) {
  return (
    <div className="d-flex align-items-center me-2">
      <a className="btn btn-outline-secondary pt-1 pb-1" href="/messenger" title="Messenger">
        <FontAwesomeIcon icon='paper-plane' />
      { props.messagesCount > 0 && <span className="badge badge-primary bg-primary ms-1 fa-fade">{props.messagesCount}</span> }
      </a>
    </div>
  );
}