

import React from 'react';

function Modal( {signOut} ) {
	return (
		<article className="modal">
			<ul>
				<li onClick={signOut}>Logout</li>
			</ul>
		</article>
	);
}

export default Modal;