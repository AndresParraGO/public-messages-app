

import React from 'react';
import './Msg.css';

function Msg( {id, content} ) {
	return (
		<article className="msg">
			<img title={content.displayName} className="msg__avatar" src={content.photo} alt={content.displayName} />
			<p className="msg__text">{content.message}</p>
		</article>
	);
}

export default Msg;