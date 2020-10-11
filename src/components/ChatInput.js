

import React from 'react';
import './ChatInput.css';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatInput() {
  return (
    <article className="chat__input">
      <input type="text" placeholder="Write..." />
      <button type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </article>
  );
}

export default ChatInput;
