import React from 'react';

export default React.createContext({
	inspect: false,
    hover: null,
	focus: null, // selected entity
	
	inspectSelect: () => { },
	inspectClose: () => { },
	inspectHoverOn: () => { },
	inspectHoverOff: () => { }
})