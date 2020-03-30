import React from 'react';

export default React.createContext({
    hover: null,
	focus: null, // selected entity
	
	inspectSelect: () => { },
	inspectClose: () => { },
	inspectHoverOn: () => { },
	inspectHoverOff: () => { }
})